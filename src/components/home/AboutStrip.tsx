'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Calendar, Code2, Users, MapPin } from 'lucide-react'

const stats = [
  { icon: Calendar, label: 'Experience', value: '5+ Years' },
  { icon: Code2,    label: 'Projects',   value: '20+'     },
  { icon: Users,    label: 'Clients',    value: '25+'     },
  { icon: MapPin,   label: 'Based in',   value: 'Sfax, Tunisia' },
]

const container: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AboutStrip() {
  return (
    <section className="py-16 border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">
              About Me
            </p>
            <h2 className="text-h2 text-[var(--fg)] mb-4 leading-snug">
              Building ideas into<br />
              powerful <span className="gradient-accent">digital products.</span>
            </h2>
            <p className="text-[var(--fg-muted)] leading-relaxed max-w-sm">
              Full-stack developer and digital builder with a passion for clean code, intuitive design and measurable results — from software to e-commerce to brand.
            </p>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={item}
                className="flex flex-col gap-3 p-5 bg-[var(--surface2)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)]/30 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                  <Icon size={16} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--fg-subtle)] mb-0.5">{label}</p>
                  <p className="font-bold text-lg text-[var(--fg)] leading-tight">{value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
