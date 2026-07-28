// Pricing logic + WhatsApp URL builder — single source of truth for Section 3.
// All numbers in IDR. Exact per-org pricing (org 2..10), open trip = org 7..10.

export type PackageKey = "2H1M" | "3H2M";
export type Category = "WNI" | "WNA";
export type StartPoint = "Tuapejat" | "Padang" | "Pekanbaru";

// Per-org price. org 7..10 = open trip (same promo price).
const PER_ORG: Record<PackageKey, Record<Category, Record<number, number>>> = {
  "2H1M": {
    WNI: { 2: 3_000_000, 3: 2_100_000, 4: 2_100_000, 5: 1_800_000, 6: 1_800_000, 7: 1_600_000, 8: 1_600_000, 9: 1_600_000, 10: 1_600_000 },
    WNA: { 2: 3_100_000, 3: 2_200_000, 4: 2_200_000, 5: 1_900_000, 6: 1_900_000, 7: 1_700_000, 8: 1_700_000, 9: 1_700_000, 10: 1_700_000 },
  },
  "3H2M": {
    WNI: { 2: 3_300_000, 3: 2_400_000, 4: 2_400_000, 5: 2_000_000, 6: 2_000_000, 7: 1_800_000, 8: 1_800_000, 9: 1_800_000, 10: 1_800_000 },
    WNA: { 2: 3_500_000, 3: 2_600_000, 4: 2_600_000, 5: 2_200_000, 6: 2_200_000, 7: 2_000_000, 8: 2_000_000, 9: 2_000_000, 10: 2_000_000 },
  },
};

// Start-point add-on, per org. Tuapejat is free.
const START_ADDON: Record<StartPoint, Record<Category, number>> = {
  Tuapejat: { WNI: 0, WNA: 0 },
  Padang: { WNI: 560_000, WNA: 750_000 },
  Pekanbaru: { WNI: 1_000_000, WNA: 1_350_000 },
};

const DRONE_ADDON: Record<Category, number> = {
  WNI: 1_000_000,
  WNA: 1_500_000,
};

export function getPerOrg(pkg: PackageKey, category: Category, org: number): number {
  return PER_ORG[pkg][category][org];
}

export interface PricingInput {
  pkg: PackageKey;
  category: Category;
  org: number;
  start: StartPoint;
  drone: boolean;
}

export interface PricingResult {
  perorg: number;
  startPerorg: number;
  dronePerorg: number;
  total: number;
}

export function calcPricing({ pkg, category, org, start, drone }: PricingInput): PricingResult {
  const perorg = getPerOrg(pkg, category, org);
  const startPerorg = START_ADDON[start][category];
  const dronePerorg = drone ? DRONE_ADDON[category] : 0;
  const total = (perorg + startPerorg + dronePerorg) * org;
  return { perorg, startPerorg, dronePerorg, total };
}

export function formatIDR(n: number): string {
  return "IDR " + n.toLocaleString("id-ID");
}

const PHONE = "6282360245556";
const PKG_LABEL: Record<PackageKey, string> = {
  "2H1M": "2 Hari 1 Malam",
  "3H2M": "3 Hari 2 Malam",
};

export function buildWaUrl(input: PricingInput): string {
  const r = calcPricing(input);
  const lines = [
    "Halo Bung Japang, saya tertarik trip Mentawai!",
    `Paket: ${PKG_LABEL[input.pkg]} (${input.category})`,
    `Jumlah peserta: ${input.org} org`,
    `Start point: ${input.start}`,
    `Drone: ${input.drone ? "Ya (by request, min H-2)" : "Tidak"}`,
    `Total estimasi: ${formatIDR(r.total)}`,
  ];
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
}
