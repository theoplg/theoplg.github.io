"use client";

import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  paper?: string | null;
}

export function ProjectCard({
  slug,
  title,
  description,
  tags,
  codeUrl,
  paper,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-muted-foreground/30 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
        {title}
      </h4>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-center gap-4 mt-auto">
        {codeUrl && (
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(codeUrl, "_blank");
            }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={16} />
            Code
          </span>
        )}
        {paper && (
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(paper, "_blank");
            }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText size={16} />
            Paper
          </span>
        )}
      </div>
    </Link>
  );
}
