'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string | React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-h1 text-[var(--fg)] mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-[var(--fg-muted)] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  )
}
