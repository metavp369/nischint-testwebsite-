import { Container, LinkButton } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue">Page not found</p>
      <h1 className="mt-3 text-4xl font-extrabold">We couldn&rsquo;t find that page</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">It may have moved while we rebuilt the site. If you need help urgently, call 112.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton href="/">Go to home</LinkButton>
        <LinkButton href="/contact" variant="secondary">Contact us</LinkButton>
      </div>
    </Container>
  );
}
