import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PageWrapper from '@/components/layout/PageWrapper'
import { getProjectBySlug, allProjects } from '@/data/projects'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project not found' }
  return {
    title: project.title,
    description: project.shortDescription,
  }
}

const categoryLabel: Record<string, string> = {
  creative: 'Creative',
  technology: 'Technology',
  ecommerce: 'E-commerce',
}

const categoryGradient: Record<string, string> = {
  creative: 'gradient-creative-text',
  technology: 'gradient-tech-text',
  ecommerce: 'gradient-ecom-text',
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const categoryIndex = allProjects.findIndex((p) => p.slug === slug)
  const next = allProjects[(categoryIndex + 1) % allProjects.length]

  return (
    <PageWrapper>
      {/* Back */}
      <div className="pt-24 pb-8">
        <div className="container-narrow">
          <Link
            href={`/${project.category === 'ecommerce' ? 'ecommerce' : project.category}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Back to {categoryLabel[project.category]}
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-16">
        <div className="container-narrow">
          <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${categoryGradient[project.category]}`}>
            {categoryLabel[project.category]} · {project.year}
          </p>
          <h1 className="text-h1 text-[var(--fg)] mb-4">{project.title}</h1>
          <p className="text-xl text-[var(--fg-muted)] leading-relaxed mb-6 max-w-2xl font-light">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full text-sm">
              <span className="text-[var(--fg-subtle)]">Role:</span>
              <span className="text-[var(--fg)] font-medium">{project.role}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full text-sm">
              <span className="text-[var(--fg-subtle)]">Year:</span>
              <span className="text-[var(--fg)] font-medium">{project.year}</span>
            </div>
          </div>

          {/* Tech/Services */}
          <div className="flex flex-wrap gap-2">
            {[...project.technologies, ...(project.services ?? [])].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs text-[var(--fg-muted)] bg-[var(--surface)] border border-[var(--border)] rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="pb-20">
        <div className="container">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--border)]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Case study content */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="flex flex-col gap-14">
            {/* Challenge */}
            {project.challenge && (
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">Challenge</p>
                <p className="text-lg text-[var(--fg-muted)] leading-relaxed">{project.challenge}</p>
              </div>
            )}

            {/* Approach */}
            {project.approach && (
              <div className="pt-8 border-t border-[var(--border)]">
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">Approach</p>
                <p className="text-lg text-[var(--fg-muted)] leading-relaxed">{project.approach}</p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="pt-8 border-t border-[var(--border)]">
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">Solution</p>
                <p className="text-lg text-[var(--fg-muted)] leading-relaxed">{project.solution}</p>
              </div>
            )}

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="pt-8 border-t border-[var(--border)]">
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-6">Results</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl"
                    >
                      <p className={`text-2xl font-bold mb-1 ${categoryGradient[project.category]}`}>
                        {m.value}
                      </p>
                      <p className="text-sm text-[var(--fg-muted)]">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="pt-8 border-t border-[var(--border)] flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity duration-200"
                  >
                    Live site <ExternalLink size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm font-medium rounded-xl transition-colors duration-200"
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="container-narrow">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--fg-subtle)] mb-6">Next project</p>
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between p-6 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 rounded-2xl transition-all duration-300"
          >
            <div>
              <p className={`text-xs font-semibold mb-1 ${categoryGradient[next.category]}`}>
                {categoryLabel[next.category]}
              </p>
              <p className="text-lg font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors duration-200">
                {next.title}
              </p>
            </div>
            <ArrowUpRight size={20} className="text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
