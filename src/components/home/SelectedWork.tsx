'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/ui/ProjectCard'
import { featuredProjects } from '@/data/projects'
import type { ProjectCategory } from '@/data/projects'

type Filter = 'all' | ProjectCategory

const filters: { label: string; value: Filter }[] = [
  { label: 'All',         value: 'all' },
  { label: 'Creative',    value: 'creative' },
  { label: 'Technology',  value: 'technology' },
  { label: 'E-commerce',  value: 'ecommerce' },
]

export default function SelectedWork() {
  const [active, setActive] = useState<Filter>('all')

  const projects = active === 'all'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === active)

  return (
    <section id="work" className="py-24 border-t border-[var(--border)]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">
              Selected Work
            </p>
            <h2 className="text-h1 text-[var(--fg)]">Projects that matter.</h2>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1 p-1 bg-[var(--surface)] border border-[var(--border)] rounded-xl self-start md:self-auto"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-pointer ${
                  active === f.value
                    ? 'bg-[var(--surface2)] text-[var(--fg)] font-medium'
                    : 'text-[var(--fg-muted)] hover:text-[var(--fg)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
