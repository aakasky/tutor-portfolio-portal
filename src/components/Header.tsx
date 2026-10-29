import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const whatsappHref = 'https://wa.me/919820809562'

const links = [
  ['About', '#about'],
  ['Subjects', '#subjects'],
  ['Experience', '#experience'],
  ['Achievements', '#achievements'],
  ['Contact', '#contact'],
]

export function Header({ theme, onToggleTheme }: Readonly<HeaderProps>) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
    }
  }, [menuOpen])

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-70 border-b border-slate-800/80 bg-slate-950/95 shadow-lg shadow-slate-950/10 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a
          href="#top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 text-lg font-bold shadow-lg shadow-indigo-500/30">
            AY
          </span>
          <span className="min-w-0">
            <span className={`block truncate bg-linear-to-r bg-clip-text text-base font-bold tracking-tight text-transparent sm:text-lg ${theme === 'light' ? 'from-indigo-700 to-violet-700' : 'from-white to-indigo-300'}`}>
              Aakash Yadav
            </span>
            <span className="block text-xs font-medium text-indigo-400">Teaching & Coding Mentor</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 xl:flex 2xl:gap-8">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-indigo-400">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex 2xl:gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-slate-300 transition-colors hover:border-indigo-500 hover:text-indigo-400"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact Aakash on WhatsApp"
            className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-emerald-400 transition-colors hover:border-emerald-400 hover:bg-emerald-500/20"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="shrink-0 rounded-lg bg-slate-900 p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-indigo-300 xl:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

    </header>

      {menuOpen && (
        <div className="fixed inset-0 z-60 overflow-y-auto bg-slate-950 pt-16 shadow-2xl sm:pt-20 xl:hidden">
          <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl flex-col items-center justify-center gap-8 px-6 py-8 sm:min-h-[calc(100dvh-5rem)]">
            <nav className="flex w-full flex-col items-center justify-center gap-5 text-center" aria-label="Mobile navigation">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-2 text-xl font-semibold text-slate-300 transition-colors hover:text-indigo-400"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="grid w-full max-w-md grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  onToggleTheme()
                  closeMenu()
                }}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                className="flex min-w-0 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-3 text-xs font-semibold text-slate-200 transition-colors hover:border-indigo-500"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-indigo-400" />}
                <span className="truncate">{theme === 'dark' ? 'Light theme' : 'Dark theme'}</span>
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                aria-label="Contact Aakash on WhatsApp"
                className="flex min-w-0 items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-3 text-xs font-semibold text-emerald-400 transition-colors hover:border-emerald-400 hover:bg-emerald-500/20"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
