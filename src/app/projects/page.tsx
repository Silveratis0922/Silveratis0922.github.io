import { portfolio } from '@/data/portfolio'

const colorMap: Record<string, string> = {
  blue:   'bg-blue-500/10 border-blue-500/30 text-blue-400',
  orange: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  green:  'bg-green-500/10 border-green-500/30 text-green-400',
  teal:   'bg-teal-500/10 border-teal-500/30 text-teal-400',
}

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-4 h-4 text-[#30363d] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export default function ProjectsPage() {
  return (
    <div className="space-y-12">

      <div>
        <h1 className="text-3xl font-bold text-white">Projets</h1>
        <p className="text-[#8b949e] mt-2">Mes realisations personnelles et academiques</p>
      </div>

      <div className="space-y-8">
        {portfolio.projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-8 space-y-7"
          >
            {/* En-tete */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-blue-400 text-sm font-medium mt-1">{project.subtitle}</p>
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[#30363d] rounded-lg text-sm text-[#8b949e] hover:text-white hover:border-[#58a6ff] transition-all duration-200"
                >
                  <GitHubIcon />
                  Voir sur GitHub
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-[#8b949e] leading-relaxed">{project.description}</p>

            {/* Visualisation du pipeline */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider">
                Flux de donnees
              </p>

              {/* Airflow : orchestrateur */}
              <div className="bg-[#161b22] border border-dashed border-orange-500/30 rounded-xl px-4 py-3">
                <p className="text-xs text-center text-[#8b949e]">
                  Orchestre par{' '}
                  <span className="text-orange-400 font-semibold">{project.orchestrator}</span>
                  {' '}— planifie et automatise toutes les etapes
                </p>
              </div>

              {/* Etapes du pipeline */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {project.pipeline.map((step, i) => (
                  <div key={step.tool} className="flex items-center gap-2">
                    <div className={`border rounded-lg px-4 py-2.5 text-center min-w-[100px] ${colorMap[step.color]}`}>
                      <div className="text-xs font-bold">{step.tool}</div>
                      <div className="text-xs opacity-60 mt-0.5">{step.role}</div>
                    </div>
                    {i < project.pipeline.length - 1 && <ArrowIcon />}
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#8b949e]">
                Infrastructure :{' '}
                <span className="text-[#e6edf3] font-medium">{project.infra}</span>
                {' '}— chaque outil tourne dans un conteneur isole
              </p>
            </div>

            {/* Stack technique */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider">
                Technologies utilisees
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[#161b22] border border-[#30363d] rounded-full text-xs text-[#e6edf3] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
