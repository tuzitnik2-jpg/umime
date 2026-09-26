"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/lib/taxonomy";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function NavTabs({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 overflow-x-auto">
      {CATEGORIES.map((cat) => {
        const href = `/${locale}/kurzy/${cat.slug}`;
        const isActive = pathname?.startsWith(href);

        return (
          <Link
            key={cat.slug}
            href={href}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? "bg-[var(--brand-500)] text-white shadow-sm"
                : "text-[var(--foreground)]/70 hover:scale-105 hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {dict.categories[cat.slug].label}
          </Link>
        );
      })}
    </div>
  );
}
