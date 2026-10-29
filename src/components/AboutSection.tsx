import { useRef } from 'react'
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react'
import { HorizontalScrollControls } from './HorizontalScrollControls'

const cardClass =
  'portfolio-card space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-8 shadow-xl transition-all hover:border-indigo-500/50'

export function AboutSection() {
  const cardsRef = useRef<HTMLDivElement>(null)

  const scrollCards = (direction: -1 | 1) => {
    const cards = cardsRef.current
    if (!cards) return

    cards.scrollBy({ left: direction * cards.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <section id="about" className="border-t border-slate-900 bg-slate-900/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <div className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">
            About My Approach
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic Excellence & Philosophy
          </h2>
          <p className="text-sm text-slate-400 sm:text-base">
            Combining academic discipline with real-world software engineering expertise to make math
            and coding intuitive and exciting.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pt-4 pb-12 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:p-0"
        >
          <article className={`${cardClass} academic-card w-[min(86vw,22rem)] shrink-0 snap-start md:w-auto md:shrink`}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Education</p>
                <h3 className="text-lg font-bold text-white">Engineering</h3>
              </div>
            </div>

            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/6 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold leading-snug text-white">B.E. in Computer Science</p>
                  <p className="mt-2 text-xs font-medium text-slate-500">Graduated 2023</p>
                </div>
                <div className="shrink-0 rounded-lg bg-indigo-500/10 px-3 py-2 text-center">
                  <p className="text-xl leading-none font-bold text-indigo-400">9.8</p>
                  <p className="mt-1 text-[10px] font-semibold tracking-wide text-slate-400 uppercase">CGPA</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Schooling</p>
              <div className="divide-y divide-slate-800">
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-slate-400">HSC · Maharashtra Board</span>
                  <span className="font-semibold text-white">86.15%</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-slate-400">SSC · Maharashtra Board</span>
                  <span className="font-semibold text-white">87.20%</span>
                </div>
              </div>
            </div>
          </article>

          <article className={`${cardClass} w-[min(86vw,22rem)] shrink-0 snap-start md:w-auto md:shrink`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Teaching Approach</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Personalized coaching that breaks complex equations and logic into manageable concepts,
              building lasting problem-solving confidence.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Custom Notes', 'Targeted Practice', 'Doubt Solving'].map((item) => (
                <span key={item} className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-indigo-300">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className={`${cardClass} w-[min(86vw,22rem)] shrink-0 snap-start md:w-auto md:shrink`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Professional Background</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Software Development Engineer at <strong className="text-white">Diebold Nixdorf</strong>,
              with prior experience at Quess Corp and Kotak Life. Bringing practical industry
              experience to computer science tutoring.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Java Full Stack', 'Problem Solving'].map((item) => (
                <span key={item} className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-cyan-300">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>

        <HorizontalScrollControls
          onPrevious={() => scrollCards(-1)}
          onNext={() => scrollCards(1)} label={''}
        />
      </div>
    </section>
  )
}
