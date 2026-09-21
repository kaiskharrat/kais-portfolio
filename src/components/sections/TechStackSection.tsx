'use client'

import { motion } from 'framer-motion'

const stack = [
  {
    category: 'Frontend',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    items: ['Angular', 'React', 'Next.js', 'TypeScript', 'HTML5', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
    items: ['Spring Boot', 'Node.js', 'Express', 'Django', 'REST APIs', 'JWT'],
  },
  {
    category: 'Databases',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Automation & AI',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10 border-yellow-500/20',
    items: ['n8n', 'AI APIs', 'Webhooks', 'Meta Ads API'],
  },
  {
    category: 'DevOps & Tools',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    items: ['Git', 'Docker', 'Nginx', 'VPS', 'Linux'],
  },
]

export default function TechStackSection() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">
            Stack
          </p>
          <h2 className="text-h2 text-[var(--fg)]">Technologies I work with</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl"
            >
              <p className={`text-xs font-bold tracking-wider uppercase ${group.color} mb-4`}>
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${group.bg} ${group.color}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
