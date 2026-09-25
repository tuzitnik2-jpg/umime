import { prisma } from "@/lib/prisma";

export const revalidate = 0;

export default async function KurzyPage() {
  let courses: { id: string; title: string; slug: string; description: string | null }[] = [];

  try {
    courses = await prisma.course.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    // Database not yet configured (e.g. local dev without DATABASE_URL).
    courses = [];
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">Kurzy</h1>

      {courses.length === 0 ? (
        <p className="text-zinc-500">
          Momentálně nejsou k dispozici žádné publikované kurzy. Jakmile bude
          připojena databáze a přidán obsah, kurzy se zobrazí zde.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-lg border border-zinc-200 bg-white p-6"
            >
              <h2 className="text-xl font-semibold">{course.title}</h2>
              {course.description && (
                <p className="mt-2 text-sm text-zinc-600">
                  {course.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
