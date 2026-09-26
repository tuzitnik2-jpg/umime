"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";
import { setLocaleCookie } from "@/lib/locale-cookie";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function switchTo(locale: Locale) {
    setOpen(false);
    setLocaleCookie(locale);
    const rest = pathname?.replace(/^\/(cs|en|de|ru)/, "") || "";
    router.push(`/${locale}${rest}`);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium transition-transform hover:scale-105 hover:border-[var(--brand-100)]"
        aria-label="Change language"
      >
        <span className="text-base leading-none">{localeFlags[current]}</span>
        <span className="hidden sm:inline">{current.toUpperCase()}</span>
        <span className="text-xs text-[var(--foreground)]/40">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-1.5 shadow-xl">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchTo(locale)}
              className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors ${
                locale === current
                  ? "bg-[var(--brand-50)] text-[var(--brand-700)]"
                  : "hover:bg-[var(--surface-muted)]"
              }`}
            >
              <span className="text-base leading-none">{localeFlags[locale]}</span>
              {localeNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
