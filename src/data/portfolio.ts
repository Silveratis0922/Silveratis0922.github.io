// ============================================================
// FICHIER DE CONFIGURATION DU PORTFOLIO
// Modifie uniquement ce fichier pour personnaliser le contenu
// ============================================================

export const portfolio = {
  // --- Identité ---
  name: "Tristan",           // Ton prénom
  lastName: "Nom",           // Ton nom de famille
  initials: "T",             // Tes initiales (affichées si pas de photo)
  title: "Data Engineer · Data Analyst",
  tagline: "Étudiant Master | En recherche d'alternance",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo.",

  // Ajoute ta photo dans /public/photo.jpg puis remplace null par "/photo.jpg"
  photo: null as string | null,

  // --- Compétences ---
  skills: [
    {
      category: "Langages",
      items: ["Python", "SQL"],
    },
    {
      category: "Data Engineering",
      items: ["PySpark", "Apache Airflow", "dbt", "Docker"],
    },
    {
      category: "Bases de données & Stockage",
      items: ["PostgreSQL", "MinIO"],
    },
    {
      category: "Analyse & Visualisation",
      items: ["Pandas", "Metabase"],
    },
  ],

  // --- Projets ---
  projects: [
    {
      id: "pipeline-e2e",
      title: "Pipeline Data End-to-End",
      subtitle: "De la donnée brute à la visualisation",
      description:
        "Un pipeline de données complet et automatisé qui simule un flux réel en entreprise. Les données brutes sont collectées et stockées, puis transformées et nettoyées, avant d'être mises à disposition pour l'analyse et la visualisation — le tout orchestré automatiquement sans intervention manuelle.",
      pipeline: [
        { tool: "Python",        role: "Collecte",        color: "blue"   },
        { tool: "MinIO",         role: "Stockage",        color: "orange" },
        { tool: "PySpark + dbt", role: "Transformation",  color: "purple" },
        { tool: "PostgreSQL",    role: "Entrepôt",        color: "green"  },
        { tool: "Metabase",      role: "Visualisation",   color: "teal"   },
      ],
      orchestrator: "Apache Airflow",
      infra: "Docker",
      tech: ["Python", "PySpark", "dbt", "MinIO", "PostgreSQL", "Airflow", "Docker", "Metabase"],
      github: "", // Lien GitHub du projet
    },
  ],

  // --- Contact ---
  contact: {
    linkedin: "", // Ex: https://linkedin.com/in/ton-profil
    github:   "", // Ex: https://github.com/ton-username
    cv:       "", // Ex: https://drive.google.com/... ou /cv.pdf
  },
}
