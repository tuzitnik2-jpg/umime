import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { NavTabs } from "@/components/NavTabs";

export const metadata: Metadata = {
  title: "Umíme",
  description: "Online příprava na základku, střední, přijímačky i maturitu",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className="h-full antialiased">
      <body className="min-h-full flex flex-col text-[var(--foreground)]">
        <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-extrabold tracking-tight">
                <span className="gradient-text">Umíme</span>
              </Link>
              <div className="flex items-center gap-3 text-sm font-medium">
                <Link
                  href="/prihlaseni"
                  className="text-[var(--foreground)]/70 hover:text-[var(--foreground)]"
                >
                  Přihlásit se
                </Link>
                <Link
                  href="/registrace"
                  className="rounded-full bg-[var(--brand-500)] px-4 py-2 text-white shadow-sm transition-colors hover:bg-[var(--brand-600)]"
                >
                  Registrace
                </Link>
              </div>
            </div>
            <NavTabs />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border-soft)] bg-white py-8 text-center text-sm text-[var(--foreground)]/50">
          &copy; {new Date().getFullYear()} Umíme
        </footer>
      </body>
    </html>
  );
}
