﻿'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Creative',   href: '/creative' },
  { label: 'Technology', href: '/technology' },
  { label: 'E-commerce', href: '/ecommerce' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
]

const switcher = [
  { label: 'Creative',   href: '/creative',   color: 'gradient-creative-text' },
  { label: 'Technology', href: '/technology', color: 'gradient-tech-text' },
  { label: 'E-commerce', href: '/ecommerce',  color: 'gradient-ecom-text' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[var(--border)] backdrop-blur-xl'
            : ''
        }`}
        style={{ background: scrolled ? 'rgba(9,9,11,0.8)' : 'transparent' }}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              Kais<span className="text-[var(--accent)]">.</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => {
                const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                      active
                        ? 'text-[var(--fg)] bg-[var(--surface2)]'
                        : 'text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface2)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Portfolio switcher (desktop) */}
              <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-xs font-medium">
                {switcher.map((s, i) => (
                  <span key={s.href} className="flex items-center gap-1">
                    <Link href={s.href} className={`${s.color} hover:opacity-70 transition-opacity cursor-pointer`}>
                      {s.label}
                    </Link>
                    {i < switcher.length - 1 && <span className="text-[var(--fg-subtle)]">·</span>}
                  </span>
                ))}
              </div>

              <ThemeToggle />

              {/* Mobile burger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface2)] transition-all duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-[var(--border)] backdrop-blur-xl"
            style={{ background: 'rgba(9,9,11,0.95)' }}
          >
            <div className="container-wide py-4">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                        active
                          ? 'text-[var(--fg)] bg-[var(--surface2)]'
                          : 'text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface2)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              {/* Switcher */}
              <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center gap-4 px-4">
                {switcher.map((s) => (
                  <Link key={s.href} href={s.href} className={`${s.color} text-sm font-medium cursor-pointer`}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
