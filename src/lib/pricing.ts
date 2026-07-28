// Pricing logic + WhatsApp URL builder — single source of truth for Section 3.
// All numbers in IDR, per PRD §6.3.

export type PackageKey = "2H1M" | "3H2M";
export type Category = "WNI" | "WNA";
export type StartPoint = "Tuapejat" | "Padang" | "Pekanbaru";
export type PaxTier = 2 | 3 | 5 | 7; // representative pax per tier group

const PRICING: Record<PackageKey, Record<Category, Record<PaxTier, number>>> = {
  "2H1M": {
    WNI: { 2: 3_000_000, 3: 2_100_000, 5: 1_800_000, 7: 1_600_000 },
    WNA: { 2: 3_100_000, 3: 2_200_000, 5: 1_900_000, 7: 1_700_000 },
  },
  "3H2M": {
    WNI: { 2: 3_300_000, 3: 2_400_000, 5: 2_000_000, 7: 1_800_000 },
    WNA: { 2: 3_500_000, 3: 2_600_000, 5: 2_200_000, 7: 2_000_000 },
  },
};

// Start-point add-on, per pax. Tuapejat is free.
const START_ADDON: Record<StartPoint, Record<Category, number>> = {
  Tuapejat: { WNI: 0, WNA: 0 },
  Padang: { WNI: 560_000, WNA: 750_000 },
  Pekanbaru: { WNI: 1_000_000, WNA: 1_350_000 },
};

const DRONE_ADDON: Record<Category, number> = { WNI: 1_000_000, WNA: 1_500_000 };

export function getTier(pax: number): PaxTier {
  if (pax <= 2) return 2;
  if (pax <= 4) return 3;
  if (pax <= 6) return 5;
  return 7;
}

export interface PricingInput {
  pkg: PackageKey;
  category: Category;
  pax: number;
  start: StartPoint;
  drone: boolean;
}

export interface PricingResult {
  tier: PaxTier;
  perPax: number;
  startPerPax: number;
  dronePerPax: number;
  total: number;
}

export function calcPricing({ pkg, category, pax, start, drone }: PricingInput): PricingResult {
  const tier = getTier(pax);
  const perPax = PRICING[pkg][category][tier];
  const startPerPax = START_ADDON[start][category];
  const dronePerPax = drone ? DRONE_ADDON[category] : 0;
  const total = (perPax + startPerPax + dronePerPax) * pax;
  return { tier, perPax, startPerPax, dronePerPax, total };
}

export function formatIDR(n: number): string {
  return "IDR " + n.toLocaleString("id-ID");
}

const PHONE = "6282360245556";
const PKG_LABEL: Record<PackageKey, string> = { "2H1M": "2 Hari 1 Malam", "3H2M": "3 Hari 2 Malam" };

export function buildWaUrl(input: PricingInput): string {
  const r = calcPricing(input);
  const lines = [
    "Halo Bung Japang, saya tertarik trip Mentawai!",
    `Paket: ${PKG_LABEL[input.pkg]} (${input.category})`,
    `Jumlah peserta: ${input.pax} pax`,
    `Start point: ${input.start}`,
    `Drone: ${input.drone ? "Ya (by request, min H-2)" : "Tidak"}`,
    `Total estimasi: ${formatIDR(r.total)}`,
  ];
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
}
