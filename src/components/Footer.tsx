const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <p className="text-sm text-slate-400">
          © {currentYear} Aakash Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
