import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

const products = {
  fundraising: {
    name: 'FundraisingPortal',
    status: 'Live',
    headline:
      'De votre dossier de financement à un pipeline structuré d’opportunités.',
    description:
      'FundraisingPortal aide les organisations à analyser leurs dossiers, qualifier leur préparation, identifier les financeurs pertinents et suivre leurs opportunités.',
    features: [
      'Analyse documentaire assistée par IA',
      'Qualification du dossier',
      'Matching avec les financeurs',
      'Pipeline des opportunités',
      'Préparation des emails',
      'Suivi et relances',
    ],
    cta: 'Demander une démonstration',
  },

  devisflow: {
    name: 'DevisFlow',
    status: 'Building',
    headline:
      'Transformer une demande client en proposition commerciale structurée.',
    description:
      'DevisFlow automatise progressivement le processus qui va de la réception du besoin jusqu’au devis et au suivi commercial.',
    features: [
      'Centralisation des demandes',
      'Structuration du besoin client',
      'Assistance à la création du devis',
      'Workflow de validation',
      'Suivi commercial',
      'Automatisation des relances',
    ],
    cta: 'Suivre le développement',
  },

  donorflow: {
    name: 'DonorFlow',
    status: 'Roadmap',
    headline:
      'Comprendre, segmenter et engager intelligemment les donateurs.',
    description:
      'DonorFlow constituera la solution dédiée à la gestion et à l’engagement des donateurs au sein de l’écosystème AD Consulting IA.',
    features: [
      'Centralisation des données',
      'Segmentation intelligente',
      'Historique des interactions',
      'Engagement personnalisé',
      'Suivi de la fidélisation',
      'Donor Copilot',
    ],
    cta: 'Découvrir la vision',
  },
}

export default function ProductPage() {
  const { productId } = useParams()

  const product =
    products[productId as keyof typeof products]

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Produit introuvable</h1>

          <Link
            to="/"
            className="mt-6 inline-flex text-blue-600"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            AD Consulting IA
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            {product.status}
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl">
            {product.name}
          </h1>

          <h2 className="mt-6 max-w-4xl text-2xl font-semibold leading-relaxed text-slate-700 sm:text-3xl">
            {product.headline}
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            {product.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
            Fonctionnalités
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <article
                key={feature}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="mb-5 h-2 w-2 rounded-full bg-blue-600" />

                <p className="font-semibold text-slate-800">
                  {feature}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-blue-600 p-10 text-white">
            <h2 className="text-3xl font-bold">
              {product.cta}
            </h2>

            <p className="mt-4 max-w-2xl text-blue-100">
              Parlons de votre besoin et voyons comment cette solution peut
              s'intégrer à votre organisation.
            </p>

            <a
              href="mailto:contact@adconsultingai.ch"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-blue-700"
            >
              Nous contacter
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}