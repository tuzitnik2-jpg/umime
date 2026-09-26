import Link from "next/link";
import { CATEGORIES } from "@/lib/taxonomy";

export default function KurzyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Kurzy</h1>
      <p className="mb-8 text-[var(--foreground)]/60">
        Vyber si sekci, kterou se chceš učit.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/kurzy/${cat.slug}`}
            className="card card-hover flex flex-col gap-2 p-6"
          >
            <h2 className="text-lg font-semibold">{cat.label}</h2>
            <p className="text-sm text-[var(--foreground)]/60">
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
