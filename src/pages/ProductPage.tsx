import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Mail,
  Search,
  Target,
  UsersRound,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
const FUNDRAISING_DEMO_URL =
  'https://fundraising.adconsultingia.ch'

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

const fundraisingSteps = [
  {
    number: '01',
    title: 'Déposer le dossier',
    text: 'Centralisez les documents du projet et les informations essentielles dans un espace unique.',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'Analyser et qualifier',
    text: 'L’IA extrait les informations utiles, identifie les points forts et aide à mesurer la préparation du dossier.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Identifier les financeurs',
    text: 'Structurez la recherche et rapprochez le projet des opportunités les plus pertinentes.',
    icon: Target,
  },
  {
    number: '04',
    title: 'Piloter les opportunités',
    text: 'Suivez les contacts, les statuts, les prochaines actions et les relances dans un pipeline clair.',
    icon: Mail,
  },
]

const fundraisingProblems = [
  'Des informations réparties entre plusieurs documents et outils.',
  'Une qualification du dossier souvent manuelle et difficile à standardiser.',
  'Des recherches de financeurs longues et peu structurées.',
  'Un suivi des opportunités dépendant de fichiers, emails et rappels dispersés.',
]

const fundraisingAudiences = [
  'Associations et ONG',
  'Fondations et structures à impact',
  'Organisations portant des projets de financement',
  'Cabinets et consultants en accompagnement au fundraising',
]

function BackToHome() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={16} />
          AD Consulting IA
        </Link>
      </div>
    </section>
  )
}

function FundraisingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <BackToHome />

      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="absolute -left-32 top-12 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute right-0 top-0 h-[460px] w-[460px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              Live · FundraisingPortal
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
              De votre dossier de financement à un pipeline structuré
              d’opportunités.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Analysez vos dossiers, qualifiez votre préparation, identifiez les
              financeurs pertinents et pilotez vos démarches dans un seul espace.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={FUNDRAISING_DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Voir la démo
                <ArrowRight size={18} />
              </a>

              <Link
                to="/#contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Demander une démonstration
              </Link>
            </div>
          </div>

          <div className="relative rounded-[2.25rem] border border-blue-100 bg-white p-7 shadow-2xl shadow-blue-900/10">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200/50 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                Workflow
              </p>

              <div className="mt-6 space-y-4">
                {[
                  'Dossier projet',
                  'Analyse IA',
                  'Matching financeurs',
                  'Pipeline & relances',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="font-semibold text-slate-800">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-blue-600 p-5 text-white">
                <p className="text-sm font-semibold text-blue-100">Objectif</p>

                <p className="mt-2 text-xl font-bold">
                  Transformer une recherche dispersée en processus pilotable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Le problème
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Le fundraising devient vite difficile à piloter quand chaque étape
              vit dans un outil différent.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {fundraisingProblems.map((problem) => (
              <article
                key={problem}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="text-blue-600" size={22} />

                <p className="mt-4 leading-7 text-slate-600">{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fonctionnement" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Comment ça fonctionne
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Un parcours continu, du dossier jusqu’à la prochaine action.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fundraisingSteps.map((step) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-bold text-blue-600">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                  <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                Fonctionnalités
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Les briques essentielles du processus de financement.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {products.fundraising.features.map((feature) => (
                <article
                  key={feature}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <div className="mb-5 h-2 w-2 rounded-full bg-blue-600" />

                  <p className="font-semibold text-slate-800">{feature}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                <UsersRound size={26} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
                Pour qui ?
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Pour les équipes qui doivent transformer un projet en opportunités
                de financement concrètes.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {fundraisingAudiences.map((audience) => (
                <div
                  key={audience}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="font-semibold text-slate-100">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.25rem] bg-blue-600 p-10 text-white sm:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-100">
              FundraisingPortal
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              Présentez-nous votre projet de financement.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Nous vous montrerons comment FundraisingPortal peut structurer votre
              dossier, votre recherche de financeurs et le suivi des opportunités.
            </p>

           <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={FUNDRAISING_DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold !text-blue-700"
              >
                Voir FundraisingPortal
                <ArrowRight size={18} />
              </a>

              <a
                href="mailto:contact@adconsultingia.ch"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


function DevisFlowPage() {
  const steps = [
    'Réception de la demande',
    'Qualification du besoin',
    'Génération du devis',
    'Validation',
    'Envoi au client',
    'Suivi et relance',
  ]

  const problems = [
    'Des demandes reçues par email, téléphone ou messagerie et difficiles à centraliser.',
    'Une ressaisie manuelle des informations avant de pouvoir préparer un devis.',
    'Des propositions commerciales qui manquent parfois de cohérence ou de standardisation.',
    'Des relances commerciales dépendantes de rappels manuels.',
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <BackToHome />

      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="absolute -left-32 top-12 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute right-0 top-0 h-[460px] w-[460px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
            Building · DevisFlow
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Transformer une demande client en devis structuré, validé et suivi.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            DevisFlow structure progressivement tout le parcours commercial,
            depuis la réception du besoin jusqu’au devis envoyé et à la relance.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#workflow-devis"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Découvrir le workflow
              <ArrowRight size={18} />
            </a>

            <a
              href="mailto:contact@adconsultingia.ch"
              className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              Suivre le développement
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Le problème
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Le devis est souvent simple à envoyer, mais complexe à produire correctement.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <article
                key={problem}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="text-blue-600" size={22} />
                <p className="mt-4 leading-7 text-slate-600">{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow-devis" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Workflow
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Un processus commercial continu, de la demande à la relance.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <p className="text-sm font-bold text-blue-600">
                  0{index + 1}
                </p>

                <h3 className="mt-5 text-xl font-bold">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                Fonctionnalités
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Les briques qui structureront DevisFlow.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {products.devisflow.features.map((feature) => (
                <article
                  key={feature}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <div className="mb-5 h-2 w-2 rounded-full bg-blue-600" />
                  <p className="font-semibold text-slate-800">{feature}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.25rem] bg-slate-950 p-10 text-white sm:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
              DevisFlow
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              DevisFlow est actuellement en construction.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Vous souhaitez suivre son développement ou discuter d’un besoin
              similaire dans votre entreprise ?
            </p>

            <a
              href="mailto:contact@adconsultingia.ch"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white"
            >
              Nous contacter
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


function DonorFlowPage() {
  const steps = [
    'Centralisation des donateurs',
    'Historique des interactions',
    'Segmentation intelligente',
    'Engagement personnalisé',
    'Suivi de la fidélisation',
    'Donor Copilot',
  ]

  const visionItems = [
    'Construire une vision complète de chaque relation donateur.',
    'Segmenter les profils selon leur historique, leur engagement et leur potentiel.',
    'Personnaliser les interactions sans perdre la dimension humaine.',
    'Aider les équipes à identifier les prochaines actions pertinentes.',
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <BackToHome />

      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="absolute -left-32 top-12 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />
        <div className="absolute right-0 top-0 h-[460px] w-[460px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
            Roadmap · DonorFlow
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Comprendre, segmenter et engager intelligemment les donateurs.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            DonorFlow est la future brique CRM de l'écosystème AD Consulting IA,
            conçue pour centraliser la connaissance donateur et améliorer
            progressivement l'engagement et la fidélisation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#vision-donorflow"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Découvrir la vision
              <ArrowRight size={18} />
            </a>

            <a
              href="mailto:contact@adconsultingia.ch"
              className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <section id="vision-donorflow" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Vision
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Passer d'une base de contacts à une véritable intelligence de la
              relation donateur.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {visionItems.map((item) => (
              <article
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="text-violet-600" size={22} />

                <p className="mt-4 leading-7 text-slate-600">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Roadmap CRM
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Une relation donateur pilotée de bout en bout.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <p className="text-sm font-bold text-violet-600">
                  0{index + 1}
                </p>

                <h3 className="mt-5 text-xl font-bold">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                Fonctionnalités prévues
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Les futures briques du CRM DonorFlow.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {products.donorflow.features.map((feature) => (
                <article
                  key={feature}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <div className="mb-5 h-2 w-2 rounded-full bg-violet-600" />

                  <p className="font-semibold text-slate-800">
                    {feature}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.25rem] bg-slate-950 p-10 text-white sm:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-400">
              DonorFlow
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              DonorFlow prépare la prochaine évolution de l'écosystème.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Une future plateforme CRM dédiée à la connaissance, à
              l'engagement et à la fidélisation des donateurs.
            </p>

            <a
              href="mailto:contact@adconsultingia.ch"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white"
            >
              Nous contacter
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

type GenericProduct =
  | (typeof products)['devisflow']
  | (typeof products)['donorflow']


function GenericProductPage({ product }: { product: GenericProduct }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <BackToHome />

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

                <p className="font-semibold text-slate-800">{feature}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-blue-600 p-10 text-white">
            <h2 className="text-3xl font-bold">{product.cta}</h2>

            <p className="mt-4 max-w-2xl text-blue-100">
              Parlons de votre besoin et voyons comment cette solution peut
              s'intégrer à votre organisation.
            </p>

            <a
              href="mailto:contact@adconsultingia.ch"
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

export default function ProductPage() {
  const { productId } = useParams()

  const product = products[productId as keyof typeof products]

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Produit introuvable</h1>

          <Link to="/" className="mt-6 inline-flex text-blue-600">
            Retour à l'accueil
          </Link>
        </div>
      </main>
    )
  }

  if (productId === 'fundraising') {
    return <FundraisingPage />
  }

  if (productId === 'devisflow') {
    return <DevisFlowPage />
  }

  if (productId === 'donorflow') {
    return <DonorFlowPage />
  }

  return <GenericProductPage product={product} />
}