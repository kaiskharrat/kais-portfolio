'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Palette, Code2, ShoppingBag, ArrowRight } from 'lucide-react'

const sides = [
  {
    id: 'creative',
    icon: Palette,
    label: 'CREATIVE',
    title: 'Brand Design & Video',
    description:
      'Brand identities, visual systems, product creatives and video content.',
    href: '/creative',
    cta: 'Explore Creative',
    gradient: 'gradient-creative',
    gradientText: 'gradient-creative-text',
    glow: 'rgba(244,114,182,0.15)',
    border: 'rgba(244,114,182,0.2)',
  },
  {
    id: 'technology',
    icon: Code2,
    label: 'TECHNOLOGY',
    title: 'Software Engineering',
    description:
      'Web applications, business systems, APIs, AI and automation.',
    href: '/technology',
    cta: 'Explore Technology',
    gradient: 'gradient-tech',
    gradientText: 'gradient-tech-text',
    glow: 'rgba(99,102,241,0.15)',
    border: 'rgba(99,102,241,0.2)',
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    label: 'E-COMMERCE',
    title: 'E-commerce & Growth',
    description:
      'Store operations, performance marketing, conversion and digital systems.',
    href: '/ecommerce',
    cta: 'Explore E-commerce',
    gradient: 'gradient-ecom',
    gradientText: 'gradient-ecom-text',
    glow: 'rgba(34,197,94,0.12)',
    border: 'rgba(34,197,94,0.2)',
  },
]

export default function ThreeSides() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">
            Three sides of my work
          </p>
          <h2 className="text-h1 text-[var(--fg)] max-w-lg">
            Different disciplines. One professional.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {sides.map((side, i) => (
            <motion.div
              key={side.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <Link
                href={side.href}
                className="group relative flex flex-col h-full p-8 bg-[var(--surface)] rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl cursor-pointer"
                style={{ borderColor: 'var(--border)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = side.border
                  e.currentTarget.style.boxShadow = `0 0 60px ${side.glow}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${side.glow} 0%, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div className={`relative w-12 h-12 rounded-xl ${side.gradient} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <side.icon size={22} className="text-white" />
                </div>

                {/* Label */}
                <p className={`relative text-xs font-bold tracking-widest ${side.gradientText} mb-2`}>
                  {side.label}
                </p>

                {/* Title */}
                <h3 className="relative text-xl font-bold text-[var(--fg)] mb-3 group-hover:text-[var(--fg)] transition-colors duration-200">
                  {side.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm text-[var(--fg-muted)] leading-relaxed flex-1 mb-6">
                  {side.description}
                </p>

                {/* CTA */}
                <div className={`relative flex items-center gap-2 text-sm font-medium ${side.gradientText}`}>
                  {side.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
