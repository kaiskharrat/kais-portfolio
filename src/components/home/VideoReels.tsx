'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const reels = [
  { id: 'U_n6eq5iYEk', title: 'Noya — Brand Ad' },
  { id: 'DprffZce50s', title: 'Product Reel' },
  { id: 'ckcVXo2_hUw', title: 'Creative Reel' },
  { id: 'fg93krRBeV8', title: 'DreamStore MyWay' },
]

function ReelCard({ id, title, index }: { id: string; title: string; index: number }) {
  const [playing, setPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      className="flex flex-col gap-3"
    >
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-[var(--surface)] cursor-pointer"
        style={{ aspectRatio: '9 / 16' }}
        onClick={() => setPlaying(true)}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          />
        ) : (
          <>
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-110">
                <Play size={22} fill="white" className="text-white ml-1" />
              </div>
            </div>
          </>
        )}
      </div>
      <p className="text-xs text-[var(--fg-subtle)] text-center">{title}</p>
    </motion.div>
  )
}

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
            <ReelCard key={id} id={id} title={title} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
