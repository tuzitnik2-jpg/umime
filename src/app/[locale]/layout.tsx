import type { Metadata } from "next";
import Link from "next/link";
import { Baloo_2, Inter } from "next/font/google";
import "../globals.css";
import { NavTabs } from "@/components/NavTabs";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { THEME_INIT_SCRIPT } from "@/lib/theme-init-script";

const baloo = Baloo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-body",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Umíme",
  description: "Online příprava na základku, střední, přijímačky i maturitu",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`h-full antialiased ${baloo.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        className="min-h-full flex flex-col text-[var(--foreground)]"
        style={{ fontFamily: "var(--font-body), var(--font-sans)" }}
      >
        <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[var(--surface)]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                href={`/${locale}`}
                className="text-xl font-extrabold tracking-tight wiggle-on-hover"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="gradient-text">Umíme</span> 🎓
              </Link>
              <div className="flex items-center gap-3 text-sm font-medium">
                <Link
                  href={`/${locale}/obchod`}
                  aria-label={dict.nav.shop}
                  title={dict.nav.shop}
                  className="rounded-full p-2 text-lg leading-none transition-transform hover:scale-110 hover:bg-[var(--surface-muted)]"
                >
                  🛍️
                </Link>
                <Link
                  href={`/${locale}/nastaveni`}
                  aria-label={dict.nav.settings}
                  title={dict.nav.settings}
                  className="rounded-full p-2 text-lg leading-none transition-transform hover:scale-110 hover:bg-[var(--surface-muted)]"
                >
                  ⚙️
                </Link>
                <LanguageSwitcher current={locale as Locale} />
                <Link
                  href={`/${locale}/prihlaseni`}
                  className="text-[var(--foreground)]/70 hover:text-[var(--foreground)]"
                >
                  {dict.nav.login}
                </Link>
                <Link
                  href={`/${locale}/registrace`}
                  className="btn-bouncy rounded-full bg-[var(--brand-500)] px-4 py-2 text-white shadow-sm transition-colors hover:bg-[var(--brand-600)]"
                >
                  {dict.nav.register}
                </Link>
              </div>
            </div>
            <NavTabs locale={locale as Locale} dict={dict} />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border-soft)] bg-[var(--surface)] py-8 text-center text-sm text-[var(--foreground)]/50">
          &copy; {new Date().getFullYear()} {dict.footer.rights}
        </footer>
      </body>
    </html>
  );
}
