import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vzdělávací platforma",
  description: "Online kurzy a lekce",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <header className="border-b border-zinc-200 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold">
              Vzdělávací platforma
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link href="/kurzy" className="hover:text-zinc-600">
                Kurzy
              </Link>
              <Link href="/prihlaseni" className="hover:text-zinc-600">
                Přihlásit se
              </Link>
              <Link
                href="/registrace"
                className="rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-700"
              >
                Registrace
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-white py-6 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Vzdělávací platforma
        </footer>
      </body>
    </html>
  );
}
