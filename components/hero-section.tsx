import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo de profil */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border">
                <Image
                  src="/profile-photo.jpg"
                  alt="Theo Palagi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
              AI & Computer Vision Student
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              Theo Palagi
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Student <span className="font-bold">@Telecom Paris</span>, Institut Polytechnique de Paris
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Hello! I'm Theo, an Engineering Student from France, passionate
              about{" "}
              <span className="text-foreground font-medium">
                Artificial Intelligence
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                Computer Vision
              </span>
              . I'm specializing in AI, Computer Vision, and Applied
              Mathematics. My current coursework includes Deep Learning,
              Generative Models, 3D/Video Vision, Object Recognition, NLP,
              Signal Processing, and ML Optimization. Welcome to my portfolio!
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
              <Link
                href="#projects"
                className="px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Download Resume
              </Link>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <Link
                href="https://github.com/theoplg"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/theopalagi/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="mailto:theo.palagi@telecom-paris.fr"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
