import { ArrowUpRight, Award, Star } from 'lucide-react'

const achievements = [
  {
    title: 'IAPT PRMO',
    category: 'Mathematics Olympiad',
    description:
      'Cleared the Pre-Regional Mathematical Olympiad, demonstrating strong analytical and problem-solving ability.',
    icon: Star,
    accent: 'indigo',
    detail: 'Olympiad qualifier',
    ranks: null,
    organization: 'Indian Association of Physics Teachers',
    organizationUrl: 'https://iapt.org.in/',
  },
  {
    title: 'SilverZone Olympiad',
    category: 'Academic distinction',
    description: 'Recognized for strong performance among students at both school and state levels.',
    icon: Award,
    accent: 'violet',
    detail: null,
    ranks: [
      { value: '1st', label: 'Rank in class' },
      { value: '26th', label: 'Rank in state' },
    ],
    organization: 'SilverZone Foundation',
    organizationUrl: 'https://www.silverzone.org/',
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="achievements-section mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center sm:mb-14">
        <div className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">Milestones</div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Achievements & Recognition
        </h2>
        <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
          A record of curiosity, perseverance, and mathematical problem-solving.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {achievements.map(({ title, category, description, icon: Icon, accent, detail, ranks, organization, organizationUrl }) => (
          <article
            key={title}
            className={`achievement-card achievement-card-${accent} portfolio-card group relative flex min-h-72 flex-col overflow-hidden rounded-3xl border border-slate-800 p-6 shadow-xl sm:p-8`}
          >
            <div className="achievement-glow pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="achievement-icon flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="achievement-category rounded-full border border-slate-700 px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase">
                {category}
              </span>
            </div>

            <div className="relative mt-8">
              {detail ? (
                <p className="achievement-detail mb-2 text-xs font-semibold tracking-wider uppercase">{detail}</p>
              ) : null}
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">{description}</p>
            </div>

            {ranks ? (
              <div className="relative mt-7 grid grid-cols-2 gap-3">
                {ranks.map(({ value, label }) => (
                  <div key={label} className="achievement-rank rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                    <p className="text-3xl font-extrabold leading-none text-violet-400">{value}</p>
                    <p className="mt-2 text-xs font-medium text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            ) : null}
            <a
              href={organizationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`achievement-footer flex items-center justify-between gap-3 border-t border-slate-800 pt-5 text-xs font-medium text-slate-400 transition-colors hover:text-indigo-300 ${ranks ? 'mt-6' : 'mt-auto'}`}
            >
              <span>Visit {organization}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-indigo-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
