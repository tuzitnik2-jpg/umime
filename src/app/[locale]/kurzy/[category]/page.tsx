import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import {
  CATEGORIES,
  LANGUAGES,
  getCategoryBySlug,
  type LanguageCode,
} from "@/lib/taxonomy";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

export const revalidate = 0;

type Course = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  language: string | null;
};

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; category: string }>;
  searchParams: Promise<{ jazyk?: string }>;
}) {
  const { locale, category: categorySlug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const { jazyk } = await searchParams;

  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  // Ověříme, že hodnota z URL je platný jazyk (LANGUAGES je zdroj pravdy),
  // ať nikdy nepošleme do Prisma libovolný string z query parametru.
  const selectedLanguage = LANGUAGES.find((l) => l.value === jazyk)?.value as
    | LanguageCode
    | undefined;

  let courses: Course[] = [];
  try {
    courses = await prisma.course.findMany({
      where: {
        published: true,
        category: category.value,
        ...(selectedLanguage ? { language: selectedLanguage } : {}),
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        language: true,
      },
    });
  } catch {
    // Databáze zatím není nastavená (např. lokální vývoj bez DATABASE_URL).
    courses = [];
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-2 flex flex-wrap gap-2 text-sm text-[var(--foreground)]/50">
        {CATEGORIES.map((c) => (
          <span key={c.slug}>
            {c.slug === category.slug ? (
              <span className="font-semibold text-[var(--brand-600)]">
                {dict.categories[c.slug].label}
              </span>
            ) : (
              <Link href={`/${locale}/kurzy/${c.slug}`} className="hover:underline">
                {dict.categories[c.slug].label}
              </Link>
            )}
            {c.slug !== CATEGORIES[CATEGORIES.length - 1].slug && (
              <span className="mx-2">·</span>
            )}
          </span>
        ))}
      </div>

      <h1 className="mb-1 text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
        {dict.categories[category.slug].label}
      </h1>
      <p className="mb-8 text-[var(--foreground)]/60">
        {dict.categories[category.slug].description}
      </p>

      {/* Jazykový filtr */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Link
          href={`/${locale}/kurzy/${category.slug}`}
          className={`pill px-4 py-2 text-sm ${
            !jazyk
              ? "bg-[var(--brand-500)] text-white"
              : "bg-[var(--surface-muted)] text-[var(--foreground)]/70 hover:bg-[var(--brand-50)]"
          }`}
        >
          {dict.category.allLanguages}
        </Link>
        {LANGUAGES.map((lang) => (
          <Link
            key={lang.value}
            href={`/${locale}/kurzy/${category.slug}?jazyk=${lang.value}`}
            className={`pill px-4 py-2 text-sm ${
              jazyk === lang.value
                ? "bg-[var(--brand-500)] text-white"
                : "bg-[var(--surface-muted)] text-[var(--foreground)]/70 hover:bg-[var(--brand-50)]"
            }`}
          >
            {dict.languages[lang.value]}
          </Link>
        ))}
      </div>

      {courses.length === 0 ? (
        <div className="card p-10 text-center text-[var(--foreground)]/60">
          {jazyk ? dict.category.noCoursesFiltered : dict.category.noCourses}
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/${locale}/kurzy/${category.slug}/${course.slug}`}
              className="card card-hover flex flex-col gap-3 p-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{course.title}</h2>
                {course.language && (
                  <span className="pill bg-[var(--brand-50)] px-2.5 py-1 text-xs text-[var(--brand-700)]">
                    {course.language}
                  </span>
                )}
              </div>
              {course.description && (
                <p className="text-sm text-[var(--foreground)]/60">
                  {course.description}
                </p>
              )}
              <span className="mt-auto text-sm font-semibold text-[var(--brand-600)]">
                {dict.category.viewLevels}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
