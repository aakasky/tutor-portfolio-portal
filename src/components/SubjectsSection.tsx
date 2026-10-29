import { useMemo, useRef } from 'react'
import {
  Award,
  BookOpen,
  Code,
  GraduationCap,
  Sparkles,
  Star,
  type LucideIcon,
} from 'lucide-react'
import { HorizontalScrollControls } from './HorizontalScrollControls'

export type SubjectCategory = 'all' | 'math' | 'coding' | 'science' | 'boards'

type Subject = {
  id: string
  title: string
  category: Exclude<SubjectCategory, 'all'>
  description: string
  icon: LucideIcon
  color: string
}

type SubjectsSectionProps = {
  activeCategory: SubjectCategory
  onCategoryChange: (category: SubjectCategory) => void
}

const subjects: Subject[] = [
  {
    id: 'math',
    title: 'Mathematics',
    category: 'math',
    description: 'Algebra, Geometry, Trigonometry, Calculus & Olympiad Prep.',
    icon: BookOpen,
    color: 'text-indigo-400',
  },
  {
    id: 'coding',
    title: 'Coding & CS',
    category: 'coding',
    description: 'Java, Python, Data Structures, and algorithmic problem solving.',
    icon: Code,
    color: 'text-cyan-400',
  },
  {
    id: 'physics',
    title: 'Physics',
    category: 'science',
    description: 'Mechanics, Electromagnetism, Optics, and conceptual clarity.',
    icon: Sparkles,
    color: 'text-purple-400',
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    category: 'science',
    description: 'Organic, Inorganic, and Physical Chemistry simplified.',
    icon: Award,
    color: 'text-pink-400',
  },
  {
    id: 'boards',
    title: 'Board Exam Mastery',
    category: 'boards',
    description: 'Targeted CBSE, ICSE, and State Board preparation with past papers.',
    icon: GraduationCap,
    color: 'text-emerald-400',
  },
  {
    id: 'olympiad',
    title: 'Olympiad Training',
    category: 'math',
    description: 'IAPT PRMO & SilverZone specialized problem-solving coaching.',
    icon: Star,
    color: 'text-amber-400',
  },
]

const filters: { label: string; value: SubjectCategory }[] = [
  { label: 'All Subjects', value: 'all' },
  { label: 'Mathematics & Olympiad', value: 'math' },
  { label: 'Coding & CS', value: 'coding' },
  { label: 'Physics & Chemistry', value: 'science' },
  { label: 'Board Exams', value: 'boards' },
]

export function SubjectsSection({
  activeCategory,
  onCategoryChange,
}: Readonly<SubjectsSectionProps>) {
  const cardsRef = useRef<HTMLDivElement>(null)
  const visibleSubjects = useMemo(
    () =>
      activeCategory === 'all'
        ? subjects
        : subjects.filter((subject) => subject.category === activeCategory),
    [activeCategory],
  )

  const scrollCards = (direction: -1 | 1) => {
    const cards = cardsRef.current
    if (!cards) return

    cards.scrollBy({ left: direction * cards.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <section id="subjects" className="subjects-section mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 flex min-w-0 flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-6">
        <div>
          <div className="mb-2 text-xs font-bold tracking-wider text-indigo-400 uppercase">
            Curriculum & Subjects
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What I Teach</h2>
        </div>
        <div className="hidden min-w-0 flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-900 p-1.5 md:flex md:w-auto">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={activeCategory === filter.value}
              onClick={() => onCategoryChange(filter.value)}
              className={`min-w-0 rounded-lg px-3 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === filter.value
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={cardsRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pt-4 pb-12 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:p-0 lg:grid-cols-3"
      >
        {visibleSubjects.map(({ id, title, description, icon: Icon, color }) => (
          <article
            key={id}
            className="portfolio-card subject-card group flex w-[min(86vw,22rem)] shrink-0 snap-start flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-indigo-500/50 md:w-auto md:shrink"
          >
            <div>
              <div className="mb-4 inline-flex rounded-xl border border-slate-700/50 bg-slate-800/80 p-3 transition-transform group-hover:scale-110">
                <Icon className={`h-6 w-6 ${color}`} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{description}</p>
            </div>
          </article>
        ))}
      </div>

      <HorizontalScrollControls
        onPrevious={() => scrollCards(-1)}
        onNext={() => scrollCards(1)} label={''}
      />
    </section>
  )
}
