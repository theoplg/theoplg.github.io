import { GraduationCap } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm tracking-widest text-muted-foreground uppercase mb-4">03.</h2>
        <h3 className="text-3xl font-bold text-foreground mb-12">Education & Experience</h3>

        <div className="border-l-2 border-border pl-8 relative">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
            <GraduationCap size={14} className="text-background" />
          </div>

          <div>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">EDUCATION</span>
            <h4 className="text-xl font-semibold text-foreground mt-4 mb-2">Master of Science in Engineering</h4>
            <p className="text-foreground font-medium mb-1">Télécom Paris - Institut Polytechnique de Paris</p>
            <p className="text-sm text-muted-foreground mb-4">2024 — 2027</p>
            <p className="text-muted-foreground leading-relaxed">
              Télécom Paris is a leading French engineering school specializing in computer science and
              telecommunications. Coursework includes Deep Learning, Generative Models, 3D/Video Vision, Object
              Recognition, NLP, Signal Processing, and ML Optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
