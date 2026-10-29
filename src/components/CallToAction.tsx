import { ArrowRight, Calendar } from 'lucide-react'

type CallToActionProps = {
  onContact: () => void
}

export function CallToAction({ onContact }: Readonly<CallToActionProps>) {
  return (
    <section className="cta-section mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="portfolio-card cta-card relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-linear-to-r from-indigo-900/40 via-violet-900/40 to-slate-900 p-5 shadow-2xl sm:p-8 lg:p-12">
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="relative z-10 grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(12rem,0.65fr)] lg:gap-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300">
              <Calendar className="h-3.5 w-3.5" /> Start Learning Today
            </div>
            <h2 className="text-2xl leading-tight font-extrabold text-white sm:text-4xl">
              Ready to Boost Your Grades & Confidence?
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Book a personalized trial tutoring session with Aakash. Get custom notes, structured
              guidance, and clear explanations.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onContact}
                className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/30 transition hover:scale-[1.02] sm:px-8 sm:py-4"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="hidden h-80 items-end justify-center overflow-hidden lg:flex">
            <img
              src="/profile-image.png"
              alt="Aakash Yadav"
              className="h-full max-w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
