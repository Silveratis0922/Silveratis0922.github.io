import Image from 'next/image'
import Link from 'next/link'
import { portfolio } from '@/data/portfolio'

export default function Home() {
  return (
    <div className="space-y-20">

      {/* ── Hero ── */}
      <section className="flex flex-col md:flex-row items-center gap-12 pt-4">

        {/* Texte */}
        <div className="flex-1 space-y-5">
          <p className="text-sm font-medium text-blue-400 tracking-wider uppercase">
            {portfolio.tagline}
          </p>
          <div>
            <h1 className="text-5xl font-bold text-white">Bonjour, je suis</h1>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {portfolio.name}
            </h1>
          </div>
          <p className="text-xl text-[#8b949e] font-medium">{portfolio.title}</p>
          <p className="text-[#8b949e] leading-relaxed max-w-lg">{portfolio.bio}</p>
          <div className="flex gap-3 pt-2 flex-wrap">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-[#30363d] text-[#e6edf3] text-sm font-medium rounded-lg hover:border-[#58a6ff] hover:text-white transition-all duration-200"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          <div className="w-52 h-52 rounded-full p-[3px] bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center overflow-hidden">
              {portfolio.photo ? (
                <Image
                  src={portfolio.photo}
                  alt={portfolio.name}
                  width={208}
                  height={208}
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
          {portfolio.skills.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#0d1117] border border-[#21262d] rounded-xl p-5 hover:border-[#30363d] transition-colors duration-200"
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
          ))}
        </div>
      </section>

    </div>
  )
}
