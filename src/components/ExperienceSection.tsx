import { BookOpen, Briefcase, CheckCircle2 } from 'lucide-react'

const roles = [
  { title: 'Software Development Engineer', dates: 'June 2026 – Present', company: 'Diebold Nixdorf' },
  { title: 'Senior Software Developer', dates: 'June 2025 – May 2026', company: 'Quess Corp' },
  { title: 'Java Full Stack Developer', dates: 'May 2023 – June 2025', company: 'Kotak Life', },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="experience-section border-y border-slate-800/70 bg-linear-to-b from-slate-900/50 via-slate-950 to-slate-900/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center sm:mb-16">
          <div className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">Where knowledge meets practice</div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience & Career Journey
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A balanced career bridging student mentorship with high-impact software engineering roles.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 space-y-5 lg:col-span-5">
            <div className="flex items-center gap-3 px-1">
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-2.5 text-indigo-400">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">Teaching & Tutoring</h3>
                <p className="text-xs text-slate-400">Turning complex ideas into confidence</p>
              </div>
            </div>
            <article className="portfolio-card experience-card relative min-w-0 space-y-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/10 sm:p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="relative flex flex-col items-start justify-between gap-3 min-[400px]:flex-row min-[400px]:gap-4">
                <div className="min-w-0">
                  <p className="mb-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">Current focus</p>
                  <h4 className="text-xl font-bold text-white">Private Tutor & Mentor</h4>
                  <p className="mt-1 text-sm font-medium text-slate-400">Independent · Malad, Mumbai</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Active</span>
                </span>
              </div>
              <ul className="relative space-y-3 border-t border-slate-800 pt-5 text-sm leading-relaxed text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" aria-hidden="true" />
                  <span>Personalized coaching for classes 5th to 12th (CBSE, ICSE, and State Boards).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" aria-hidden="true" />
                  <span>Simplified complex math concepts to build confidence in problem-solving.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" aria-hidden="true" />
                  <span>Custom notes and assignments tailored to student needs and curriculum.</span>
                </li>
              </ul>
            </article>
          </div>

          <div className="min-w-0 space-y-5 lg:col-span-7">
            <div className="flex items-center gap-3 px-1">
              <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-2.5 text-violet-400">
                <Briefcase className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">Technical Industry Career</h3>
                <p className="text-xs text-slate-400">Building real-world software solutions</p>
              </div>
            </div>
            <div className="relative space-y-3">
              <div className="absolute bottom-8 left-3.5 top-8 w-px bg-linear-to-b from-violet-400/60 via-indigo-500/40 to-transparent" aria-hidden="true" />
              {roles.map((role) => (
                <div key={role.title} className="relative pl-12">
                  <div className="absolute left-0 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/40 bg-slate-950 text-violet-300 shadow-[0_0_16px_rgb(139_92_246/15%)]">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                  </div>
                  <article className="portfolio-card experience-card group min-w-0 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 shadow-lg shadow-slate-950/10 sm:p-5">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div className="min-w-0">
                        <h4 className="wrap-break-word font-bold text-white">{role.title}</h4>
                        <p className="mt-1 text-sm text-slate-400">{role.company}</p>
                      </div>
                      <span className="inline-flex w-fit shrink-0 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300">
                        {role.dates}
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
