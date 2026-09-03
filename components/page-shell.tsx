import Link from "next/link";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-border bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

export function LegalLayout({
  title,
  description,
  updated,
  toc,
  children,
}: {
  title: string;
  description: string;
  updated: string;
  toc: { href: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            On this page
          </p>
          <nav className="mt-3 space-y-1.5">
            {toc.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-6 text-xs text-muted-foreground">
            Last updated {updated}
          </p>
        </aside>
        <article className="legal-prose max-w-3xl space-y-10 text-[15px] leading-7 text-navy/85">
          {children}
        </article>
      </div>
    </>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
