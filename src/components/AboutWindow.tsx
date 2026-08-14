import { Badge } from "@/components/ui/Badge";

export function AboutWindow() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div>
        <p className="font-heading text-lg font-semibold text-ink">
          Mahesa Yuztar
        </p>
        <p className="text-sm text-muted-ink">
          Software Engineer & Fullstack Developer · Malang, Indonesia
        </p>
      </div>

      <p className="text-sm leading-relaxed text-ink">
        I turn messy problems into software people can actually use — across
        frontend, backend, infrastructure, and the awkward space in between.
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        <Badge tone="surface">Fullstack</Badge>
        <Badge tone="purple">Infrastructure</Badge>
        <Badge tone="pink">Leadership</Badge>
      </div>
    </div>
  );
}
