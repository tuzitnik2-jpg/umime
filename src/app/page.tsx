import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Učte se online, v vlastním tempu
      </h1>
      <p className="max-w-2xl text-lg text-zinc-600">
        Vytvořte si účet, přihlaste se do kurzu a sledujte svůj postup lekci
        po lekci.
      </p>
      <div className="flex gap-4">
        <Link
          href="/kurzy"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700"
        >
          Prohlédnout kurzy
        </Link>
        <Link
          href="/registrace"
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-zinc-100"
        >
          Vytvořit účet
        </Link>
      </div>
    </div>
  );
}
