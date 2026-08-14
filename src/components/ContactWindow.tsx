import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/data/social";

export function ContactWindow() {
  const email = socialLinks.find((link) => link.id === "email");
  const github = socialLinks.find((link) => link.id === "github");
  const linkedin = socialLinks.find((link) => link.id === "linkedin");

  return (
    <div className="flex h-full flex-col gap-4">
      <div>
        <p className="font-heading text-lg font-semibold text-ink">
          Have a problem worth building for?
        </p>
        <p className="mt-1 text-sm text-muted-ink">
          Let&apos;s talk about software, systems, or the thing your
          spreadsheet should probably stop doing.
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {email && (
          <Button href={email.href} variant="primary" arrow>
            Say hello
          </Button>
        )}
        {github && (
          <Button href={github.href} variant="secondary" target="_blank" rel="noreferrer">
            GitHub
          </Button>
        )}
        {linkedin && (
          <Button href={linkedin.href} variant="secondary" target="_blank" rel="noreferrer">
            LinkedIn
          </Button>
        )}
      </div>
    </div>
  );
}
