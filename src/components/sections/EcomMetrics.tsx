'use client'

import { motion } from 'framer-motion'

const metrics = [
  { label: 'Ad Spend',        value: '[INSERT]',    note: 'Total managed' },
  { label: 'Orders',          value: '[INSERT]',    note: 'Total orders processed' },
  { label: 'CPA',             value: '[INSERT]',    note: 'Average cost per acquisition' },
  { label: 'Delivery Rate',   value: '[INSERT %]',  note: 'Confirmed deliveries' },
  { label: 'ROAS',            value: '[INSERT]',    note: 'Return on ad spend' },
  { label: 'Ad Accounts',     value: '18',          note: 'Meta Ads accounts managed' },
]

export default function EcomMetrics() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-2">
            Results
          </p>
          <h2 className="text-h2 text-[var(--fg)]">Performance metrics</h2>
          <p className="text-sm text-[var(--fg-subtle)] mt-2">
            Placeholder values — will be updated with real data.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl hover:border-emerald-500/30 transition-colors duration-200"
            >
              <p className="text-xl font-bold text-[var(--fg)] mb-1 gradient-ecom-text">{m.value}</p>
              <p className="text-xs font-semibold text-[var(--fg)] mb-1">{m.label}</p>
              <p className="text-xs text-[var(--fg-subtle)]">{m.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
