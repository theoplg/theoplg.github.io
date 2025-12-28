import { AllProjectsCard } from "@/components/all-projects-card"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const allProjects = [
  {
    title: "LLM-SSC",
    description:
      "Web application for automatic topic extraction from text corpora. Uses BERTopic, SentenceTransformers and unsupervised clustering techniques to analyze YouTube comments or rap lyrics.",
    tags: ["NLP", "Python", "BERTopic"],
    date: "Dec 2024",
    image: "/nlp-topic-extraction-visualization-with-clusters.jpg",
    codeUrl: "https://github.com/theoplg/llm-ssc",
  },
  {
    title: "Copy-Move Forgery Detection",
    description:
      "Implementation of the PatchMatch algorithm to detect Copy-Move forgeries in images. Robust pipeline including median filtering, error map and RMSE verification.",
    tags: ["Computer Vision", "Python", "Image Processing"],
    date: "Nov 2024",
    image: "/image-forgery-detection-algorithm-visualization.jpg",
    codeUrl: "https://github.com/theoplg/copy-moove-forgery",
    reportUrl: "https://theoplg.github.io/portfolio-website/reports/papier1.pdf",
  },
  {
    title: "spinning-ball-spiral",
    description:
      "This project investigates the aerodynamics of spinning spherical projectiles, inspired by the legendary perfect free-kick scored by Roberto Carlos in 1997.",
    tags: ["Physics Simulation", "Python", "Matplotlib"],
    date: "Oct 2024",
    image: "/soccer-ball-trajectory-physics-simulation.jpg",
    codeUrl: "https://github.com/theoplg/spinning-ball-spiral",
    reportUrl: "https://theoplg.github.io/portfolio-website/reports/papier2.pdf",
  },
  {
    title: "Contractive and Robust Imitation",
    description:
      "Learning unconstrained and stable imitation policies from state-only expert demonstrations applicable to a variety of robotic platforms. Experiments and simulations are entirely conducted in simulation environments.",
    tags: ["Imitation Learning", "PyTorch", "Isaac Sim/Lab"],
    date: "Apr 28, 2024",
    image: "/robotic-arm-imitation-learning-simulation.jpg",
    ongoing: true,
  },
  {
    title: "Safe RL Policy Optimization",
    description:
      "Learning model-free reinforcement learning policies with internal safety and stability guarantees mainly for manipulation and locomotion tasks. The experiments leverage domain randomization techniques.",
    tags: ["Reinforcement Learning", "PyTorch", "Isaac Sim/Lab"],
    date: "Feb 24, 2024",
    image: "/reinforcement-learning-robot-locomotion.jpg",
    ongoing: true,
  },
  {
    title: "Lyapunov-Stable Polynomial Imitation Policies",
    description: "Learning polynomial imitation policies with guaranteed stability and out of distribution recovery.",
    tags: ["Imitation Learning", "Python", "C/C++"],
    date: "Apr 28, 2024",
    image: "/robotic-arm-drawing-mathematical-curves.jpg",
  },
  {
    title: "Stable Neural Imitation Policies",
    description: "Learning globally stable neural imitation policies (SNDS).",
    tags: ["Imitation Learning", "PyTorch"],
    date: "Oct 26, 2023",
    image: "/robot-arm-neural-network-imitation-learning-poses.jpg",
  },
]

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
