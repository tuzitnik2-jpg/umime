// Sdílený zdroj pravdy pro kolo štěstí — pořadí a barvy segmentů musí
// odpovídat mezi klientem (vykreslení kola) a serverem (výběr výhry), aby se
// animace kola vždycky zastavila na výhře, kterou API skutečně přiznalo.

export type WheelPrize = {
  amount: number;
  weight: number;
  color: string;
};

export const WHEEL_PRIZES: WheelPrize[] = [
  { amount: 5, weight: 30, color: "#6d5bf6" },
  { amount: 10, weight: 25, color: "#f6465d" },
  { amount: 15, weight: 18, color: "#ffb020" },
  { amount: 20, weight: 12, color: "#22c55e" },
  { amount: 10, weight: 25, color: "#22b8f6" },
  { amount: 50, weight: 4, color: "#f6465d" },
  { amount: 15, weight: 18, color: "#6d5bf6" },
  { amount: 100, weight: 1, color: "#ffb020" },
];

export const WHEEL_SPIN_COOLDOWN_MS = 24 * 60 * 60 * 1000;

export function pickWheelPrizeIndex(): number {
  const totalWeight = WHEEL_PRIZES.reduce((sum, p) => sum + p.weight, 0);
  let roll = Math.random() * totalWeight;
  for (let i = 0; i < WHEEL_PRIZES.length; i++) {
    roll -= WHEEL_PRIZES[i].weight;
    if (roll <= 0) return i;
  }
  return WHEEL_PRIZES.length - 1;
}
