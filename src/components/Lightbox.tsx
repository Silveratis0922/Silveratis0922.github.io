'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

type ImageItem = { src: string; caption?: string }

export default function Lightbox({ images }: { images: ImageItem[] }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') setIndex(i => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, images.length])

  return (
    <>
      <div className={`grid gap-3 ${
        images.length === 1 ? 'grid-cols-1' :
        images.length === 2 ? 'grid-cols-2' :
        'grid-cols-2 md:grid-cols-3'
      }`}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); setOpen(true) }}
            className="group relative block overflow-hidden rounded-xl border border-[#21262d] hover:border-[#30363d] transition-colors duration-200 text-left"
          >
            <div className="relative aspect-video w-full bg-[#161b22]">
              <Image
                src={img.src}
                alt={img.caption ?? `Screenshot ${i + 1}`}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            {img.caption && (
              <p className="px-3 py-2 text-xs text-[#8b949e] bg-[#161b22] border-t border-[#21262d]">
                {img.caption}
              </p>
            )}
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {images.length > 1 && (
            <button
              className="absolute left-4 p-3 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all"
              onClick={(e) => { e.stopPropagation(); setIndex(i => (i - 1 + images.length) % images.length) }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div
            className="relative max-w-5xl w-full mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[78vh]">
              <Image
                src={images[index].src}
                alt={images[index].caption ?? `Screenshot ${index + 1}`}
                fill
                className="object-contain rounded-xl"
              />
            </div>
            {images[index].caption && (
              <p className="text-center text-sm text-[#8b949e] mt-3">{images[index].caption}</p>
            )}
            {images.length > 1 && (
              <p className="text-center text-xs text-[#8b949e]/50 mt-1">{index + 1} / {images.length}</p>
            )}
          </div>

          {images.length > 1 && (
            <button
              className="absolute right-4 p-3 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all"
              onClick={(e) => { e.stopPropagation(); setIndex(i => (i + 1) % images.length) }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  )
}
