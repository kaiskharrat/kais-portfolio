'use client'

import { motion } from 'framer-motion'

interface PortfolioHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  statement: string
  gradientClass: string
}

export default function PortfolioHero({
  eyebrow,
  title,
  subtitle,
  statement,
  gradientClass,
}: PortfolioHeroProps) {
  return (
    <section className="pt-32 pb-20 border-b border-[var(--border)]">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--fg-subtle)] mb-6">
            {eyebrow}
          </p>
          <h1 className="text-h1 text-[var(--fg)] mb-3">{title}</h1>
          <p className={`text-lg font-medium ${gradientClass} mb-6`}>{subtitle}</p>
          <p className="text-xl text-[var(--fg-muted)] leading-relaxed max-w-2xl font-light">
            {statement}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
