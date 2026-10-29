import { ArrowLeft, ArrowRight } from 'lucide-react'

type HorizontalScrollControlsProps = {
  label: string
  onPrevious: () => void
  onNext: () => void
}

export function HorizontalScrollControls({
  onPrevious,
  onNext,
}: Readonly<HorizontalScrollControlsProps>) {
  return (
    <div className="mb-3 flex items-center justify-end gap-3 md:hidden">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrevious}
          aria-label="Scroll cards left"
          className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Scroll cards right"
          className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-300"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
