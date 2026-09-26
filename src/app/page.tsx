import Link from "next/link";
import { CATEGORIES } from "@/lib/taxonomy";

export default function Home() {
  return (
    <div>
      <section className="gradient-hero">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center">
          <span className="pill bg-[var(--brand-50)] px-3 py-1 text-[var(--brand-700)]">
            Nová platforma pro přípravu
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Připrav se na <span className="gradient-text">základku, střední,<br />přijímačky i maturitu</span>
          </h1>
          <p className="max-w-xl text-lg text-[var(--foreground)]/60">
            Sbírej body za dokončené lekce, sleduj svůj postup a uč se v
            jazyce, který právě potřebuješ.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kurzy/zakladni"
              className="rounded-full bg-[var(--brand-500)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--brand-600)]"
            >
              Prohlédnout kurzy
            </Link>
            <Link
              href="/registrace"
              className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold hover:bg-[var(--surface-muted)]"
            >
              Vytvořit účet
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Vyber si svou sekci
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/kurzy/${cat.slug}`}
              className="card card-hover flex flex-col gap-3 p-6"
            >
              <span
                className={`pill h-9 w-9 items-center justify-center text-base ${
                  i % 2 === 0
                    ? "bg-[var(--brand-50)] text-[var(--brand-700)]"
                    : "bg-[color-mix(in_srgb,var(--accent-500)_12%,white)] text-[var(--accent-500)]"
                }`}
              >
                {cat.label.charAt(0)}
              </span>
              <h3 className="text-lg font-semibold">{cat.label}</h3>
              <p className="text-sm text-[var(--foreground)]/60">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="card flex flex-col items-center gap-4 p-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-xl font-bold">Bodový systém</h2>
            <p className="mt-1 text-sm text-[var(--foreground)]/60">
              Za každou dokončenou lekci nebo cvičení získáš body. Sleduj svůj
              postup a odemykej další odměny, jak budou přibývat.
            </p>
          </div>
          <span className="points-badge pill px-4 py-2 text-sm">
            0 bodů
          </span>
        </div>
      </section>
    </div>
  );
}
