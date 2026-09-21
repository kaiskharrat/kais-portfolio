﻿'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/layout/PageWrapper'
import { Mail, ExternalLink, Phone, MapPin, CheckCircle, Send } from 'lucide-react'

const contactMethods = [
  { icon: Mail,        label: 'Email',     value: 'kaiskharrat0@gmail.com',  href: 'mailto:kaiskharrat0@gmail.com' },
  { icon: Phone,       label: 'WhatsApp',  value: '+216 29 536 778',         href: 'https://wa.me/21629536778' },
  { icon: MapPin,      label: 'Location',  value: 'Sfax, Tunisia — Remote',  href: null },
  { icon: ExternalLink,label: 'LinkedIn',  value: 'linkedin.com/in/kais-kharrat', href: 'https://www.linkedin.com/in/kais-kharrat-964418251/' },
  { icon: ExternalLink,label: 'GitHub',    value: 'github.com/kaiskharrat',   href: 'https://github.com/kaiskharrat' },
  { icon: ExternalLink,label: 'Instagram', value: '@[INSERT]',               href: 'https://instagram.com/[INSERT]' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setSent(true)
    setLoading(false)
  }

  return (
    <PageWrapper>
      <section className="pt-32 pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--fg-subtle)] mb-6">Contact</p>
              <h1 className="text-h1 text-[var(--fg)] mb-4">
                Have a project<br />in mind?
              </h1>
              <p className="text-2xl gradient-accent font-semibold mb-8">
                Let&apos;s build it.
              </p>
              <p className="text-[var(--fg-muted)] leading-relaxed mb-12 max-w-sm">
                Open to full-time positions, remote opportunities, and freelance projects across software engineering, brand design and e-commerce.
              </p>

              <div className="flex flex-col gap-4">
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--fg-subtle)]">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm text-[var(--fg-muted)]">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full gap-5 p-12 bg-[var(--surface)] border border-emerald-500/30 rounded-2xl text-center">
                  <CheckCircle size={40} className="text-emerald-400" />
                  <h3 className="text-xl font-semibold text-[var(--fg)]">Message received.</h3>
                  <p className="text-[var(--fg-muted)] text-sm">I&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 p-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cf-name" className="block text-xs text-[var(--fg-subtle)] mb-2">Name</label>
                      <input
                        id="cf-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--surface2)] border border-[var(--border)] focus:border-[var(--accent)]/50 rounded-xl text-[var(--fg)] placeholder-[var(--fg-subtle)] text-sm outline-none transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="cf-email" className="block text-xs text-[var(--fg-subtle)] mb-2">Email</label>
                      <input
                        id="cf-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--surface2)] border border-[var(--border)] focus:border-[var(--accent)]/50 rounded-xl text-[var(--fg)] placeholder-[var(--fg-subtle)] text-sm outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cf-project" className="block text-xs text-[var(--fg-subtle)] mb-2">Type of project</label>
                    <select
                      id="cf-project"
                      value={form.project}
                      onChange={(e) => setForm({ ...form, project: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--surface2)] border border-[var(--border)] focus:border-[var(--accent)]/50 rounded-xl text-[var(--fg)] text-sm outline-none transition-colors duration-200 cursor-pointer"
                    >
                      <option value="">Select a category…</option>
                      <option value="technology">Software Engineering</option>
                      <option value="creative">Brand Design / Video</option>
                      <option value="ecommerce">E-commerce / Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cf-message" className="block text-xs text-[var(--fg-subtle)] mb-2">Message</label>
                    <textarea
                      id="cf-message"
                      required
                      rows={5}
                      placeholder="Tell me about your project…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--surface2)] border border-[var(--border)] focus:border-[var(--accent)]/50 rounded-xl text-[var(--fg)] placeholder-[var(--fg-subtle)] text-sm outline-none transition-colors duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--accent)] hover:opacity-90 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 text-sm cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={15} />
                    )}
                    {loading ? 'Sending…' : 'Send message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
