// ============================================================
// FICHIER DE CONFIGURATION DU PORTFOLIO
// Modifie uniquement ce fichier pour personnaliser le contenu
// ============================================================

export const portfolio = {
  // --- Identite ---
  name: "Tristan",           // Ton prenom
  lastName: "Nom",           // Ton nom de famille
  initials: "T",             // Tes initiales (affiches si pas de photo)
  title: "Data Engineer · Data Analyst",
  tagline: "Etudiant Master | En recherche d'alternance",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo.",

  // Ajoute ta photo dans /public/photo.jpg puis remplace null par "/photo.jpg"
  photo: null as string | null,

  // --- Competences ---
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
      category: "Bases de donnees & Stockage",
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
      subtitle: "De la donnee brute a la visualisation",
      description:
        "Un pipeline de donnees complet et automatise qui simule un flux reel en entreprise. Les donnees brutes sont collectees et stockees, puis transformees et nettoyees, avant d'etre mises a disposition pour l'analyse et la visualisation — le tout orchestre automatiquement sans intervention manuelle.",
      pipeline: [
        { tool: "Python",        role: "Collecte",        color: "blue"   },
        { tool: "MinIO",         role: "Stockage",        color: "orange" },
        { tool: "PySpark + dbt", role: "Transformation",  color: "purple" },
        { tool: "PostgreSQL",    role: "Entrepot",        color: "green"  },
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
