"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/lib/taxonomy";

export function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 overflow-x-auto">
      {CATEGORIES.map((cat) => {
        const href = `/kurzy/${cat.slug}`;
        const isActive = pathname?.startsWith(href);

        return (
          <Link
            key={cat.slug}
            href={href}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-[var(--brand-500)] text-white"
                : "text-[var(--foreground)]/70 hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {cat.label}
          </Link>
        );
      })}
    </div>
  );
}
