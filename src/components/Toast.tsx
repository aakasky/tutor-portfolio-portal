import { CheckCircle2 } from 'lucide-react'

type ToastProps = {
  message: string
}

export function Toast({ message }: ToastProps) {
  if (!message) return null

  return (
    <div
      role="status"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-xl border border-indigo-400 bg-indigo-600 px-6 py-3 text-white shadow-2xl"
    >
      <CheckCircle2 className="h-5 w-5 text-emerald-300" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  )
}
