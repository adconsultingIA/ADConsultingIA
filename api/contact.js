export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  const {
    name,
    company,
    email,
    phone,
    product,
    message,
  } = req.body || {}

  if (!name || !email || !product || !message) {
    return res.status(400).json({
      success: false,
      message: 'Champs obligatoires manquants',
    })
  }

  const webhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('[contact] MAKE_CONTACT_WEBHOOK_URL missing')

    return res.status(500).json({
      success: false,
      message: 'Configuration serveur incomplète',
    })
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        company: company || '',
        email,
        phone: phone || '',
        product,
        message,
        source: 'adconsultingia.ch',
        submitted_at: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      const body = await response.text()

      console.error(
        '[contact] Make webhook error:',
        response.status,
        body
      )

      return res.status(502).json({
        success: false,
        message: 'Erreur lors de la transmission',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Votre demande a bien été envoyée.',
    })
  } catch (error) {
    console.error('[contact] Unexpected error:', error)

    return res.status(500).json({
      success: false,
      message: 'Une erreur est survenue',
    })
  }
}
