import type { Metadata } from 'next'
import PageWrapper from '@/components/layout/PageWrapper'
import PortfolioHero from '@/components/sections/PortfolioHero'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { ecommerceProjects } from '@/data/projects'
import EcomMetrics from '@/components/sections/EcomMetrics'

export const metadata: Metadata = {
  title: 'E-commerce & Growth',
  description: 'Store operations, performance marketing, conversion and digital systems.',
}

export default function EcommercePage() {
  return (
    <PageWrapper>
      <PortfolioHero
        eyebrow="E-commerce Portfolio"
        title="E-commerce & Growth"
        subtitle="Operations · Performance · Conversion · Systems"
        statement="I combine technology, creativity and performance to build better e-commerce businesses."
        gradientClass="gradient-ecom-text"
      />

      {/* What I do */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">Approach</p>
              <h2 className="text-h2 text-[var(--fg)] mb-6">E-commerce is a system,<br/>not a website.</h2>
              <p className="text-[var(--fg-muted)] leading-relaxed mb-4">
                I approach e-commerce as an interconnected system: the product, the creative, the ad strategy, the landing page, the order workflow, the delivery and the customer communication all need to work together.
              </p>
              <p className="text-[var(--fg-muted)] leading-relaxed">
                Having built both the technical infrastructure and the marketing operations, I understand how every part affects the bottom line.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Store Management',        sub: 'Product catalogue, pricing, operations' },
                { label: 'Performance Marketing',   sub: 'Meta Ads, CPA, ROAS optimisation' },
                { label: 'Creative Testing',        sub: 'Ad creative production and A/B testing' },
                { label: 'Conversion & LPs',        sub: 'Landing pages, checkout, AOV' },
                { label: 'Business Automation',     sub: 'CRM, order management, delivery flows' },
                { label: 'Analytics',               sub: 'Meta Pixel, custom events, attribution' },
              ].map((area) => (
                <div
                  key={area.label}
                  className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-emerald-500/30 transition-colors duration-200"
                >
                  <p className="text-sm font-semibold text-[var(--fg)] mb-1">{area.label}</p>
                  <p className="text-xs text-[var(--fg-subtle)] leading-snug">{area.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics component */}
      <EcomMetrics />

      {/* Projects */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="container">
          <SectionHeader
            eyebrow="Work"
            title="E-commerce Projects"
            description="Case studies in operations, performance marketing and growth."
            className="mb-14"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
