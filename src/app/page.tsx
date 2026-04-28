import Image from 'next/image'
import Link from 'next/link'
import { portfolio } from '@/data/portfolio'

export default function Home() {
  return (
    <div className="space-y-20">

      {/* ── Hero ── */}
      <section className="flex flex-col md:flex-row items-center gap-6 pt-4">

        {/* Texte */}
        <div className="flex-1 space-y-5">
          <p className="anim-1 text-sm font-medium text-blue-400 tracking-wider uppercase">
            {portfolio.tagline}
          </p>
          <div className="anim-2">
            <h1 className="text-5xl font-bold text-white">Bonjour, je suis</h1>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {portfolio.name}
            </h1>
          </div>
          <p className="anim-3 text-xl font-semibold">
            <span className="text-blue-400">Data Engineer</span>
            <span className="text-[#8b949e] mx-2">·</span>
            <span className="text-purple-400">Data Analyst</span>
          </p>
          <p className="anim-4 text-[#c9d1d9] leading-relaxed max-w-lg">{portfolio.bio}</p>
          <div className="anim-5 flex gap-3 pt-2 flex-wrap">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
            >
              Voir mes projets
            </Link>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-[#30363d] text-[#e6edf3] text-sm font-medium rounded-lg hover:border-[#58a6ff] hover:text-white transition-all duration-200"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="anim-photo shrink-0">
          <div className="w-72 h-72 rounded-full p-[3px] bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center overflow-hidden">
              {portfolio.photo ? (
                <Image
                  src={portfolio.photo}
                  alt={portfolio.name}
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-5xl font-bold bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {portfolio.initials}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Competences ── */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Compétences</h2>
          <p className="text-[#8b949e] mt-1 text-sm">Technologies et outils que je maîtrise</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolio.skills.map((cat, i) => {
            const isLast = i === portfolio.skills.length - 1
            const isAlone = isLast && portfolio.skills.length % 2 !== 0
            return (
            <div
              key={cat.category}
              className={`bg-[#0d1117] border border-[#21262d] rounded-xl p-5 hover:border-[#30363d] transition-colors duration-200 ${
                isAlone ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
              }`}
            >
              <h3 className="text-white font-semibold text-sm mb-3">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#161b22] border border-[#30363d] rounded-full text-xs text-[#e6edf3] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )})}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Me retrouver</h2>
          <p className="text-[#8b949e] mt-1 text-sm">Disponible sur ces plateformes</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {portfolio.contact.linkedin && (
            <a
              href={portfolio.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 bg-[#0d1117] border border-[#21262d] rounded-xl text-sm font-medium text-[#c9d1d9] hover:border-blue-500/50 hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          )}
          {portfolio.contact.github && (
            <a
              href={portfolio.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 bg-[#0d1117] border border-[#21262d] rounded-xl text-sm font-medium text-[#c9d1d9] hover:border-[#8b949e] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {portfolio.contact.cv && (
            <a
              href={portfolio.contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 bg-[#0d1117] border border-[#21262d] rounded-xl text-sm font-medium text-[#c9d1d9] hover:border-purple-500/50 hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </a>
          )}
        </div>
      </section>

    </div>
  )
}
