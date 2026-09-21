'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'

const categoryLabel: Record<string, string> = {
  creative: 'Creative',
  technology: 'Technology',
  ecommerce: 'E-commerce',
}

const categoryColor: Record<string, string> = {
  creative: 'gradient-creative',
  technology: 'gradient-tech',
  ecommerce: 'gradient-ecom',
}

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--accent)]/5"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white rounded-full ${categoryColor[project.category]}`}
            >
              {categoryLabel[project.category]}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
              View case study <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-base font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors duration-200 leading-snug">
              {project.title}
            </h3>
            <span className="text-xs text-[var(--fg-subtle)] shrink-0 mt-0.5">{project.year}</span>
          </div>
          <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4 line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs text-[var(--fg-subtle)] bg-[var(--surface2)] rounded-md border border-[var(--border)]"
              >
                {t}
              </span>
            ))}
            {(project.services ?? []).slice(0, 3).map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-xs text-[var(--fg-subtle)] bg-[var(--surface2)] rounded-md border border-[var(--border)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
