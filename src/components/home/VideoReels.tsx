'use client'

import { motion } from 'framer-motion'

const reels = [
  { id: 'U_n6eq5iYEk', title: 'Noya — Brand Ad' },
  { id: 'DprffZce50s', title: 'Product Reel' },
  { id: 'ckcVXo2_hUw', title: 'Creative Reel' },
  { id: 'fg93krRBeV8', title: 'DreamStore MyWay' },
]

export default function VideoReels() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--fg-subtle)] mb-3">
            Creative Work
          </p>
          <h2 className="text-h2 text-[var(--fg)]">Video Reels</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {reels.map(({ id, title }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="flex flex-col gap-3"
            >
              <div
                className="relative w-full overflow-hidden rounded-2xl bg-[var(--surface)]"
                style={{ aspectRatio: '9 / 16' }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
              <p className="text-xs text-[var(--fg-subtle)] text-center">{title}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
