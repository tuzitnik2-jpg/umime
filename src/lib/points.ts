import { prisma } from "@/lib/prisma";

/**
 * Přidá (nebo odečte, při záporném amount) body uživateli a zaznamená
 * transakci do historie. Zavolej odkudkoliv, kde chceš uživatele
 * odměnit — dokončená lekce, kvíz, denní bonus apod.
 *
 * Příklad: await awardPoints(userId, 10, "Dokončená lekce: Úvod do zlomků");
 */
export async function awardPoints(
  userId: string,
  amount: number,
  reason: string
) {
  return prisma.$transaction([
    prisma.pointTransaction.create({
      data: { userId, amount, reason },
    }),
    prisma.user.update({
      where: { id: userId },
      data: { points: { increment: amount } },
    }),
  ]);
}

export async function getPointsHistory(userId: string) {
  return prisma.pointTransaction.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}
