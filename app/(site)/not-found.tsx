import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="content-shell flex min-h-screen items-center py-16">
      <Container className="max-w-2xl">
        <div className="rounded-[2rem] border border-line bg-panel/90 p-8 shadow-soft">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">404</p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-ink">Page not found</h1>
          <p className="mb-6 text-base leading-8 text-muted">
            The requested page does not exist or is not available in this language yet.
          </p>
          <ButtonLink href="/es" variant="primary">
            Go to home
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
