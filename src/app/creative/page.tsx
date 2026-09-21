import type { Metadata } from 'next'
import PageWrapper from '@/components/layout/PageWrapper'
import PortfolioHero from '@/components/sections/PortfolioHero'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { creativeProjects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Creative Portfolio',
  description: 'Brand identities, visual systems, product creatives and video content.',
}

export default function CreativePage() {
  return (
    <PageWrapper>
      <PortfolioHero
        eyebrow="Creative Portfolio"
        title="Brand Design & Video"
        subtitle="Brand Design · Video Editing · Visual Content"
        statement="Visuals that make brands memorable."
        gradientClass="gradient-creative-text"
      />

      {/* Projects */}
      <section className="py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Work"
            title="Creative Projects"
            description="Brand identities, product creatives, video content and advertising campaigns."
            className="mb-14"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="container">
          <SectionHeader
            eyebrow="What I do"
            title="Creative Services"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Brand Identity',       desc: 'Logo, colour system, typography, brand guidelines and visual language.' },
              { title: 'Social Media Design',  desc: 'Consistent visual content for organic and paid social channels.' },
              { title: 'Product Creative',     desc: 'Product photography direction, lifestyle visuals and composite design.' },
              { title: 'Video Editing',        desc: 'Brand films, UGC ads, product videos and short-form content.' },
              { title: 'Ad Creative Testing',  desc: 'Performance-focused creatives designed for Meta Ads and conversion.' },
              { title: 'Visual Systems',       desc: 'Design systems that scale — reusable, consistent, documented.' },
            ].map((s) => (
              <div
                key={s.title}
                className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl hover:border-pink-500/30 transition-all duration-300"
              >
                <h3 className="font-semibold text-[var(--fg)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
