import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export function ProjectsWindow() {
  return (
    <div className="flex h-full flex-col gap-3">
      <p className="text-sm text-muted-ink">Click a card. I promise they do something.</p>

      <div className="flex flex-1 flex-col gap-2 overflow-auto">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex items-center justify-between gap-2 rounded-lg border-ink bg-surface px-3 py-2"
          >
            <div>
              <p className="font-heading text-sm font-semibold text-ink">
                {project.title}
              </p>
              <p className="text-xs text-muted-ink">{project.description}</p>
            </div>
            <Badge tone="cream">↗</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
