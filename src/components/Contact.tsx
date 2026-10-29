import type { ReactNode } from 'react'
import { ArrowUpRight, Check, MapPin, Sparkles } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'

type ContactCardProps = {
  href: string
  icon: ReactNode
  title: string
  description: string
}

function ContactCard({ href, icon, title, description }: Readonly<ContactCardProps>) {
  const isExternal = href.startsWith('https://')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="contact-card portfolio-card group relative flex min-h-40 min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/10 transition-all duration-300 hover:border-indigo-500/60 hover:bg-slate-900 sm:p-6"
    >
      <div className="mb-5 flex items-start justify-between">
        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-400 transition-colors group-hover:border-indigo-400/40 group-hover:bg-indigo-500/20">
          {icon}
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-400" aria-hidden="true" />
      </div>
      <h3 className="mb-1 font-semibold text-white">{title}</h3>
      <p className="wrap-break-word text-sm text-slate-400">{description}</p>
    </a>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.917V6.75" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"     className="h-6 w-6" aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3ZM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.78 0-1.22.52-1.42 1.01-.07.17-.1.42-.1.67V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.2 1.03 3.2 3.26Z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.45-5.152-3.773-6.602-6.602l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="contact-section mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="contact-panel relative overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900 to-indigo-950/60 p-6 shadow-2xl shadow-indigo-950/20 sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              YOUR NEXT STEP STARTS HERE
            </div>
            <h2 id="contact-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's learn <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">together.</span>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate-300">
              Get in touch to talk about personalized math, coding, and Olympiad tutoring. Let’s find
              the right learning plan for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs font-medium text-slate-300">
                <MapPin className="h-4 w-4 text-indigo-400" /> Malad, Mumbai
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300">
                <Check className="h-4 w-4" /> Available for tutoring
              </span>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            <ContactCard
              href="tel:+919820809562"
              icon={<PhoneIcon />}
              title="Call Me Directly"
              description="+91 9820809562"
            />
            <ContactCard
              href="https://wa.me/919820809562"
              icon={<WhatsAppIcon />}
              title="WhatsApp"
              description="Message me directly."
            />
            <ContactCard
              href="mailto:ay1117680@gmail.com"
              icon={<EmailIcon />}
              title="Send an Email"
              description="ay1117680@gmail.com"
            />
            <ContactCard
              href="https://www.linkedin.com/in/aakasky/"
              icon={<LinkedInIcon />}
              title="View LinkedIn"
              description="See my professional history."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
