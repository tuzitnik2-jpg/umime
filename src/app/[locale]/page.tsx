import Link from "next/link";
import { CATEGORIES, type CategorySlug } from "@/lib/taxonomy";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

const CATEGORY_EMOJI: Record<CategorySlug, string> = {
  zakladni: "📘",
  stredni: "🎒",
  prijimacky: "🎯",
  maturita: "🎓",
};

const CATEGORY_ACCENT: Record<CategorySlug, string> = {
  zakladni: "bg-[var(--brand-50)] text-[var(--brand-700)]",
  stredni: "bg-[color-mix(in_srgb,var(--accent-500)_12%,white)] text-[var(--accent-500)]",
  prijimacky: "bg-[color-mix(in_srgb,var(--accent-yellow)_18%,white)] text-[color-mix(in_srgb,var(--accent-yellow)_70%,black)]",
  maturita: "bg-[color-mix(in_srgb,var(--accent-green)_16%,white)] text-[color-mix(in_srgb,var(--accent-green)_65%,black)]",
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <div>
      <section className="gradient-hero">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center">
          <span className="pill bg-[var(--brand-50)] px-3 py-1 text-[var(--brand-700)]">
            {dict.home.badge}
          </span>
          <h1
            className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {dict.home.titleLine1}{" "}
            <span className="gradient-text">{dict.home.titleLine2}</span>
          </h1>
          <p className="max-w-xl text-lg text-[var(--foreground)]/60">
            {dict.home.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/kurzy/zakladni`}
              className="btn-bouncy rounded-full bg-[var(--brand-500)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--brand-600)]"
            >
              {dict.home.browseCourses}
            </Link>
            <Link
              href={`/${locale}/registrace`}
              className="btn-bouncy rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold hover:bg-[var(--surface-muted)]"
            >
              {dict.home.createAccount}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2
          className="mb-6 text-center text-2xl font-bold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {dict.home.pickSection}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${locale}/kurzy/${cat.slug}`}
              className="card card-hover flex flex-col gap-3 p-6"
            >
              <span
                className={`pill h-10 w-10 items-center justify-center text-xl ${CATEGORY_ACCENT[cat.slug]}`}
              >
                {CATEGORY_EMOJI[cat.slug]}
              </span>
              <h3 className="text-lg font-semibold">
                {dict.categories[cat.slug].label}
              </h3>
              <p className="text-sm text-[var(--foreground)]/60">
                {dict.categories[cat.slug].description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="card flex flex-col items-center gap-4 p-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              🏆 {dict.home.pointsTitle}
            </h2>
            <p className="mt-1 text-sm text-[var(--foreground)]/60">
              {dict.home.pointsDesc}
            </p>
          </div>
          <span className="points-badge pill px-4 py-2 text-sm">
            0 {dict.home.pointsBadge}
          </span>
        </div>
      </section>
    </div>
  );
}
