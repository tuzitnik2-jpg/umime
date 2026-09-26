import type { Metadata } from "next";
import Link from "next/link";
import { Baloo_2, Inter } from "next/font/google";
import "../globals.css";
import { NavTabs } from "@/components/NavTabs";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

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
    <html lang={locale} className={`h-full antialiased ${baloo.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col text-[var(--foreground)]" style={{ fontFamily: "var(--font-body), var(--font-sans)" }}>
        <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-white/80 backdrop-blur-md">
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
        <footer className="border-t border-[var(--border-soft)] bg-white py-8 text-center text-sm text-[var(--foreground)]/50">
          &copy; {new Date().getFullYear()} {dict.footer.rights}
        </footer>
      </body>
    </html>
  );
}
