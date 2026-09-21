'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <section className="relative lg:min-h-screen flex items-center overflow-hidden">
      {/* Radial glow — dark only, desktop only */}
      {!isLight && (
        <div
          className="pointer-events-none absolute top-0 right-0 w-[700px] h-full opacity-20 hidden lg:block"
          style={{
            background: 'radial-gradient(ellipse at 60% 40%, rgba(249,115,22,0.45) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />
      )}

      <div className="container relative z-10 pt-20 pb-10 lg:pt-28 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

          {/* ── PHOTO — first on mobile, right on desktop ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
          >
            {isLight ? (
              <div
                className="relative w-full overflow-hidden rounded-2xl lg:rounded-none"
                style={{ height: 'clamp(220px, 58vw, 480px)' }}
              >
                <Image
                  src="/kais-hero-light.webp"
                  alt="Kais Kharrat — Digital Builder"
                  fill
                  className="object-cover object-top lg:object-right"
                  priority
                  sizes="(max-width: 1024px) 92vw, 45vw"
                />
                {/* Desktop-only left fade */}
                <div
                  className="hidden lg:block absolute inset-0 pointer-events-none z-10"
                  style={{ background: 'linear-gradient(to right, var(--bg) 0%, transparent 35%)' }}
                />
              </div>
            ) : (
              <div
                className="relative w-full overflow-hidden rounded-2xl lg:rounded-none"
                style={{ height: 'clamp(240px, 65vw, 520px)' }}
              >
                <Image
                  src="/kais-hero.webp"
                  alt="Kais Kharrat — Digital Builder"
                  fill
                  className="object-cover object-top lg:object-right"
                  priority
                  sizes="(max-width: 1024px) 92vw, 45vw"
                />
                {/* Desktop-only fades */}
                <div
                  className="hidden lg:block absolute inset-0 pointer-events-none z-10"
                  style={{ background: 'linear-gradient(to right, var(--bg) 0%, transparent 45%)' }}
                />
                <div
                  className="hidden lg:block absolute inset-0 pointer-events-none z-10"
                  style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 30%)' }}
                />
                {/* Mobile: subtle bottom fade */}
                <div
                  className="lg:hidden absolute inset-0 pointer-events-none z-10"
                  style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 25%)' }}
                />
              </div>
            )}
          </motion.div>

          {/* ── TEXT ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-last lg:order-first"
          >
            {/* Badge */}
            <motion.div variants={item} className="flex items-center gap-2 mb-5 lg:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="text-sm text-[var(--fg-muted)]">Available for new projects</span>
            </motion.div>

            {/* Name */}
            <motion.div variants={item} className="mb-2 lg:mb-3">
              <h1
                className="text-[var(--fg)] leading-none font-bold tracking-tight"
                style={{ fontSize: 'clamp(2.6rem, 8vw, 5.5rem)' }}
              >
                Kais Kharrat
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={item} className="mb-4 lg:mb-7">
              <span className="text-hero gradient-accent">Digital Builder</span>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={item} className="text-lg lg:text-2xl text-[var(--fg-muted)] leading-relaxed mb-2 lg:mb-3 font-light">
              I design, build and grow digital experiences.
            </motion.p>

            {/* Sub — hidden on mobile */}
            <motion.p variants={item} className="hidden lg:block text-base text-[var(--fg-subtle)] leading-relaxed mb-10 max-w-md">
              Software engineer working at the intersection of technology, creativity and e-commerce.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0 mb-6 lg:mb-12">
              <Link
                href="/#work"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-lt)] text-white font-medium rounded-xl transition-all duration-200 text-sm"
              >
                View my work
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--fg-subtle)] font-medium rounded-xl transition-all duration-200 text-sm"
              >
                Let&apos;s work together
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>

            {/* Disciplines — desktop only */}
            <motion.div variants={item} className="hidden lg:flex flex-wrap items-center gap-2">
              <span className="text-xs text-[var(--fg-subtle)] mr-1">Disciplines ·</span>
              {['Software Engineering', 'Brand Design', 'E-commerce', 'Performance Marketing', 'Automation', 'Video Editing'].map((d) => (
                <span
                  key={d}
                  className="px-3 py-1 text-xs text-[var(--fg-subtle)] border border-[var(--border)] rounded-full bg-[var(--surface)]"
                >
                  {d}
                </span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
