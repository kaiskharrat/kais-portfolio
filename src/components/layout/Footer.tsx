import Link from 'next/link'
import { Mail, ExternalLink } from 'lucide-react'

const links = [
  { label: 'Creative',   href: '/creative' },
  { label: 'Technology', href: '/technology' },
  { label: 'E-commerce', href: '/ecommerce' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-[var(--fg)] mb-3 block">
              Kais<span className="text-[var(--accent)]">.</span>
            </Link>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-xs">
              Digital Builder — Software Engineering × E-commerce × Creative.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--fg-subtle)] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--fg-subtle)] mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:kaiskharrat0@gmail.com"
                  className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail size={13} /> kaiskharrat0@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kais-kharrat-964418251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200 flex items-center gap-2"
                >
                  <ExternalLink size={13} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kaiskharrat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200 flex items-center gap-2"
                >
                  <ExternalLink size={13} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--fg-subtle)]">
            &copy; {new Date().getFullYear()} Kais Kharrat. All rights reserved.
          </p>
          <p className="text-xs text-[var(--fg-subtle)]">
            Built with Next.js &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
