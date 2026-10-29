import { FileText, Sparkles } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'

type HeroProps = {
  theme: 'light' | 'dark'
}

const resumeHref = '/Aakash%20Yadav%20Tutor%20-%20Resume.pdf'

export function Hero({ theme }: Readonly<HeroProps>) {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center" aria-hidden="true">
        <div className="h-125 w-125 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="h-100 w-100 -translate-x-20 -translate-y-20 rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            Expert Tutor & Software Engineer
          </div>
          <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-6xl">
            Empowering Students in{' '}
            <span className={`bg-linear-to-r bg-clip-text text-transparent ${theme === 'light' ? 'from-indigo-700 via-violet-700 to-cyan-700' : 'from-indigo-400 via-violet-400 to-cyan-400'}`}>
              Math, Science & Coding
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 lg:mx-0">
            B.E. Computer Science graduate with Olympiad accolades.
            Personalized coaching across CBSE, ICSE, and State Boards.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
            <a
              href="https://wa.me/919820809562"
              target="_blank"
              rel="noreferrer"
              className="hero-whatsapp flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-600/25 transition hover:scale-[1.02] hover:bg-emerald-500 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-indigo-500 hover:text-white"
            >
              <FileText className="h-4 w-4 text-indigo-400" />
              View Resume
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8 text-center lg:text-left">
            <div>
              <div className="text-2xl font-bold text-white sm:text-3xl">9.8/10</div>
              <div className="mt-0.5 text-xs text-slate-400">Engineering CGPA</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-400 sm:text-3xl">PRMO</div>
              <div className="mt-0.5 text-xs text-slate-400">Olympiad Cleared</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-violet-400 sm:text-3xl">5th–12th</div>
              <div className="mt-0.5 text-xs text-slate-400">Grade Specialists</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1 animate-pulse rounded-2xl bg-linear-to-r from-indigo-500 to-violet-600 opacity-30 blur-xl" />
            <div className="portfolio-card relative space-y-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 text-2xl font-bold text-white shadow-lg">
                  AY
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-bold text-white">Aakash Yadav</h2>
                    <a
                      href="https://wa.me/919820809562"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Contact Aakash on WhatsApp"
                      className="shrink-0 rounded-lg bg-emerald-500/10 p-2 text-emerald-400 transition-colors hover:bg-emerald-500/20 hover:text-emerald-300"
                    >
                      <WhatsAppIcon className="h-7 w-7" />
                    </a>
                  </div>
                  <p className="text-xs font-medium text-indigo-400">Malad, Mumbai</p>
                </div>
              </div>
              <dl className="space-y-3 border-t border-slate-800 pt-4 text-sm text-slate-300">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Experience</dt>
                  <dd className="text-right font-medium text-slate-200">5+ Years Tutoring</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Teaching Methods</dt>
                  <dd className="text-right font-medium text-slate-200">Online / Offline</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
