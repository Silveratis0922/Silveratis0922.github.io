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
  bio: "Étudiant à l'École 42, je travaille sur des sujets data — de la collecte à la visualisation. Formé par la pratique et les projets, j'aime comprendre comment les données circulent, se transforment et deviennent utiles. Je cherche une alternance pour mettre ces compétences au service d'un environnement réel.",

  // Ajoute ta photo dans /public/photo.jpg puis remplace null par "/photo.jpg"
  photo: "/images/photo.jpg" as string | null,

  // --- Compétences ---
  skills: [
    {
      category: "Langages",
      items: ["Python", "SQL", "Shell"],
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
    {
      category: "Outils & Productivité",
      items: ["Git", "Google Sheet", "Excel", "Google App Scripts"],
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
      orchestratorDescription: "Planifie et automatise toutes les étapes du pipeline",
      infra: "Docker",
      infraDescription: "Chaque service tourne dans un conteneur isolé, garantissant un environnement reproductible",
      tech: ["Python", "PySpark", "dbt", "MinIO", "PostgreSQL", "Airflow", "Docker", "Metabase"],
      github: "https://github.com/Silveratis0922/SpaceKO---Simulation-and-Analysis",
      // Place tes screenshots dans public/images/ et ajoute-les ici :
      // { src: "/images/dashboard.png", caption: "Dashboard Metabase" }
      images: [
        { src: "/images/workflow.png",     caption: "Architecture du workflow" },
        { src: "/images/Dashboard_1.png",  caption: "Dashboard Metabase" },
        { src: "/images/Dashboard_2.png",  caption: "Dashboard Metabase" },
      ] as { src: string; caption?: string }[],
    },
  ],

  // --- Contact ---
  contact: {
    linkedin: "https://www.linkedin.com/in/tristan-chantroux",
    github:   "https://github.com/Silveratis0922", // Ex: https://github.com/ton-username
    cv:       "/fichiers/cv.pdf", // Ex: https://drive.google.com/... ou /cv.pdf
    email:    "tchantro@student.42.fr",
  },
}
