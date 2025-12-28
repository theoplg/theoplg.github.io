import { AllProjectsCard } from "@/components/all-projects-card"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const allProjects = [
  {
    title: "Copy-Move Forgery Detection",
    description:
      "Implementation of the PatchMatch algorithm to detect Copy-Move forgeries in images. Robust pipeline including median filtering, error map and RMSE verification.",
    tags: ["Computer Vision", "Python", "Image Processing"],
    date: "Sep 2025",
    image: "/image-forgery-detection-algorithm-visualization.jpg",
    codeUrl: "https://github.com/theoplg/copy-moove-forgery",
    paper: "/reports/papier1.pdf",
  },
  {
    title: "LLM-SSC",
    description:
      "Web application for automatic topic extraction from text corpora. Uses BERTopic, SentenceTransformers and unsupervised clustering techniques to analyze YouTube comments or rap lyrics.",
    tags: ["NLP", "Python", "BERTopic"],
    date: "May 2025",
    image: "/nlp-topic-extraction-visualization-with-clusters.jpg",
    codeUrl: "https://github.com/theoplg/llm-ssc",
    paper: null,
  },
  {
    title: "Typescript display",
    description:
      "A comprehensive TypeScript learning project showcasing various practical works (TPs) and a final project. This repository serves as a portfolio of TypeScript skills, featuring interactive web applications and demonstrations.",
    tags: ["TypeScript", "Web Development"],
    date: "Jan 2025",
    image: "/typescript.webp",
    codeUrl: "https://github.com/theoplg/typescript-display",
    paper: null,
  },
  {
    title: "spinning-ball-spiral",
    description:
      "This project investigates the aerodynamics of spinning spherical projectiles, inspired by the legendary perfect free-kick scored by Roberto Carlos in 1997.",
    tags: ["Physics Simulation", "Python", "Matplotlib"],
    date: "2023 - 2024",
    image: "/soccer-ball-trajectory-physics-simulation.jpg",
    codeUrl: "https://github.com/theoplg/spinning-ball-spiral",
    paper: "/reports/papier2.pdf",
  }
];

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">All Projects</h1>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive collection of my work in AI, Computer Vision, and Applied Mathematics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {allProjects.map((project) => (
            <AllProjectsCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  )
}
