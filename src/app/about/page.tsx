import type { Metadata } from 'next'
import Image from 'next/image'
import PageWrapper from '@/components/layout/PageWrapper'

export const metadata: Metadata = {
  title: 'About',
  description: 'Engineer by background. Builder by mindset. Kais Kharrat works at the intersection of technology, creativity and e-commerce.',
}

const timeline = [
  {
    year: '2025 – Present',
    role: 'Automation & Systems Specialist · Full-Stack Developer',
    company: 'Cura',
    desc: 'Building internal systems, managing Meta Ads infrastructure and leading technical operations for a fast-growing e-commerce company.',
  },
  {
    year: '2024 – 2025',
    role: 'Digital Creative & Technical Support',
    company: 'Tansik Prod',
    desc: 'Video content production and e-commerce store development on Converty.',
  },
  {
    year: '2023 – 2024',
    role: 'Freelance',
    company: 'Video Editor & E-Commerce Developer',
    desc: 'Product video editing and Converty store setup for e-commerce clients.',
  },
]

const education = [
  {
    degree: 'Engineering Degree in Computer Science',
    level: 'Bac+6',
    school: 'IPSAS Sfax',
    period: '2025 – Present',
  },
  {
    degree: "Bachelor's in Information Systems Development",
    level: 'Bac+3',
    school: 'ISET Sfax',
    period: '2021 – 2024',
  },
]

const skills = [
  { category: 'Engineering',         items: ['Full-Stack Dev', 'REST APIs', 'System Architecture', 'Database Design', 'AI Integration', 'Automation'] },
  { category: 'Creative',            items: ['Brand Design', 'Logo Design', 'Video Editing', 'Motion Graphics', 'Social Media Design', 'Ad Creative'] },
  { category: 'E-commerce & Growth', items: ['Meta Ads', 'Performance Marketing', 'CPA Optimisation', 'Conversion', 'Analytics', 'Meta Pixel'] },
  { category: 'Tools',               items: ['Angular', 'Next.js', 'Spring Boot', 'n8n', 'Premiere Pro', 'Figma'] },
]

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-[var(--border)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--fg-subtle)] mb-6">About</p>
              <h1 className="text-h1 text-[var(--fg)] mb-6">
                Engineer by background.<br />
                <span className="gradient-accent">Builder by mindset.</span>
              </h1>
              <p className="text-xl text-[var(--fg-muted)] leading-relaxed font-light mb-6">
                I started with software engineering, but working closely with e-commerce businesses pushed me into design, performance marketing, automation and business operations.
              </p>
              <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
                Today, I combine these disciplines to build complete digital solutions — not because I can do everything, but because each discipline makes the others stronger.
              </p>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-lt)] opacity-20 blur-xl" />
                <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/Kais.png"
                    alt="Kais Kharrat"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'Technology',
                text: 'I build the systems that power the business — from customer-facing applications to internal tools and automation infrastructure.',
                color: 'gradient-tech-text',
                border: 'hover:border-violet-500/30',
              },
              {
                label: 'Creative',
                text: 'I design the visual identity and produce the content — because a product that looks right performs better.',
                color: 'gradient-creative-text',
                border: 'hover:border-pink-500/30',
              },
              {
                label: 'E-commerce',
                text: 'I run the business operations — ads, conversions, delivery, analytics — using technology and creativity as levers.',
                color: 'gradient-ecom-text',
                border: 'hover:border-emerald-500/30',
              },
            ].map((d) => (
              <div
                key={d.label}
                className={`p-7 bg-[var(--surface)] border border-[var(--border)] rounded-2xl ${d.border} transition-colors duration-200`}
              >
                <h3 className={`text-lg font-bold ${d.color} mb-3`}>{d.label}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="container-narrow">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-10">Experience</p>
          <div className="flex flex-col gap-8">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6">
                <div className="w-32 shrink-0 pt-0.5">
                  <span className="text-xs text-[var(--fg-subtle)]">{t.year}</span>
                </div>
                <div className="flex-1 pb-8 border-b border-[var(--border)] last:border-0">
                  <p className="text-sm font-semibold text-[var(--accent)] mb-0.5">{t.company}</p>
                  <p className="font-semibold text-[var(--fg)] mb-2">{t.role}</p>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="container-narrow">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-10">Education</p>
          <div className="flex flex-col gap-6">
            {education.map((e) => (
              <div key={e.degree} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-6 border-b border-[var(--border)] last:border-0">
                <div>
                  <p className="font-semibold text-[var(--fg)]">{e.degree}</p>
                  <p className="text-sm text-[var(--fg-muted)] mt-0.5">{e.school} · {e.level}</p>
                </div>
                <span className="text-xs text-[var(--fg-subtle)] shrink-0">{e.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="container">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-10">Skills</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s) => (
              <div key={s.category}>
                <p className="text-sm font-semibold text-[var(--fg)] mb-4">{s.category}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs text-[var(--fg-muted)] bg-[var(--surface)] border border-[var(--border)] rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
