import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/layout/PageWrapper'
import PortfolioHero from '@/components/sections/PortfolioHero'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { technologyProjects } from '@/data/projects'
import TechStackSection from '@/components/sections/TechStackSection'

export const metadata: Metadata = {
  title: 'Software Engineering',
  description: 'Full-stack web applications, business systems, APIs, AI integrations and automation.',
}

export default function TechnologyPage() {
  return (
    <PageWrapper>
      <PortfolioHero
        eyebrow="Technology Portfolio"
        title="Software Engineering"
        subtitle="Web · Applications · AI · Automation"
        statement="I build software that solves real problems."
        gradientClass="gradient-tech-text"
      />

      {/* Engineering profile */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">Profile</p>
              <h2 className="text-h2 text-[var(--fg)] mb-6">Engineering background,<br/>product mindset.</h2>
              <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                Engineering degree in Computer Science (Bac+6) combined with real-world production experience building internal systems, SaaS platforms and automation infrastructure for e-commerce businesses.
              </p>
              <p className="text-[var(--fg-muted)] leading-relaxed">
                I don&apos;t just write code — I architect systems. Every technical decision I make is driven by business outcomes: performance, scalability, maintainability and real user needs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Full-stack Development', sub: 'Angular · React · Next.js · Spring Boot' },
                { label: 'Business Systems',       sub: 'CRM · ERP · Order Management' },
                { label: 'REST APIs',               sub: 'Design · Development · Integration' },
                { label: 'AI & Automation',         sub: 'n8n · AI APIs · Workflow Automation' },
                { label: 'Database Architecture',   sub: 'MySQL · PostgreSQL · MongoDB' },
                { label: 'DevOps',                  sub: 'VPS · Docker · Nginx · CI/CD' },
              ].map((area) => (
                <div
                  key={area.label}
                  className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/30 transition-colors duration-200"
                >
                  <p className="text-sm font-semibold text-[var(--fg)] mb-1">{area.label}</p>
                  <p className="text-xs text-[var(--fg-subtle)] leading-snug">{area.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStackSection />

      {/* Projects */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="container">
          <SectionHeader
            eyebrow="Projects"
            title="Engineering Work"
            description="Selected technical projects — from full-stack platforms to automation systems."
            className="mb-14"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
