import React from 'react'

const IconHammer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M20.3 7.7l-4-4a1 1 0 00-1.41 0l-2.42 2.42a1 1 0 000 1.41l.29.3-9.18 9.17a2.5 2.5 0 103.54 3.53l9.18-9.17.3.29a1 1 0 001.41 0L20.3 9.1a1 1 0 000-1.41z"/>
  </svg>
)

const IconDollar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M12 1.75a.75.75 0 01.75.75v1.05c2.53.2 4.5 1.9 4.5 4.2 0 2.7-2.52 3.8-4.94 4.48-2.28.64-3.56 1.2-3.56 2.52 0 1.1 1.02 1.96 2.87 2.17V20.5a.75.75 0 01-1.5 0v-1.02c-2.63-.26-4.37-1.9-4.37-4.1 0-2.7 2.47-3.78 4.9-4.45 2.3-.64 3.6-1.2 3.6-2.55 0-1.1-1.02-1.93-2.88-2.12V2.5A.75.75 0 0112 1.75z"/>
  </svg>
)

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M20.285 6.708a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414l3.293 3.293 8.293-8.293a1 1 0 011.414 0z"/>
  </svg>
)

const IconTools = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M21.7 20.3l-6.44-6.44a6 6 0 01-2.82.72 6.14 6.14 0 01-3.9-1.39l-2.8 2.8a1 1 0 01-1.42-1.42l2.8-2.8A6.14 6.14 0 015.5 7.9a6 6 0 01.72-2.82L-.01 0l1.41-1.41 23 23L23.99 23z"/>
  </svg>
)

const features = [
  {
    id: 'quality-welding',
    title: 'QUALITY WELDING',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.',
    icon: <IconHammer />,
    linkLabel: 'READ MORE',
  },
  {
    id: 'affordable-pricing',
    title: 'AFFORDABLE PRICING',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.',
    icon: <IconDollar />,
    linkLabel: 'READ MORE',
  },
  {
    id: 'best-welder',
    title: 'BEST WELDER',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.',
    icon: <IconCheck />,
    linkLabel: 'READ MORE',
  },
  {
    id: 'quality-tools',
    title: 'QUALITY TOOLS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.',
    icon: <IconTools />,
    linkLabel: 'READ MORE',
  },
]

function FeatureCard({ feature }) {
  return (
    <div className="group relative rounded-md bg-white shadow-card">
      <div className="absolute -top-7 left-10 rounded-sm bg-brand-gold p-4 text-white">
        {feature.icon}
      </div>

      <div className="px-10 pt-12 pb-10">
        <h3 className="text-xl font-extrabold tracking-tight text-slate-900">{feature.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-500">{feature.description}</p>

        <div className="mt-8 flex items-center gap-4">
          <a href="#" className="text-xs font-semibold tracking-wider text-slate-700">
            {feature.linkLabel}
          </a>
          <span className="h-px w-28 bg-slate-300" />
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>
      </div>
    </main>
  )
}

