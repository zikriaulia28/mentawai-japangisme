import { describe, it, expect } from "vitest";
import { calcPricing, buildWaUrl, getPerOrg } from "./pricing";

describe("getPerOrg", () => {
  it("open trip org 7..10 same promo price", () => {
    expect(getPerOrg("2H1M", "WNI", 7)).toBe(1_600_000);
    expect(getPerOrg("2H1M", "WNI", 10)).toBe(1_600_000);
    expect(getPerOrg("3H2M", "WNA", 7)).toBe(2_000_000);
  });
});

describe("calcPricing", () => {
  it("WNI 2H1M 4 org start Padang = perPax x4 (exact, no range bug)", () => {
    // org 4 per-org = 2.100.000 (same as tier 3-4); Padang addon WNI 560.000
    const r = calcPricing({ pkg: "2H1M", category: "WNI", org: 4, start: "Padang", drone: false });
    expect(r.perorg).toBe(2_100_000);
    expect(r.startPerorg).toBe(560_000);
    expect(r.total).toBe((2_100_000 + 560_000) * 4);
  });

  it("WNI 2H1M 6 org = perPax x6", () => {
    const r = calcPricing({ pkg: "2H1M", category: "WNI", org: 6, start: "Tuapejat", drone: false });
    expect(r.perorg).toBe(1_800_000);
    expect(r.total).toBe(1_800_000 * 6);
  });

  it("WNA 3H2M 7 org start Pekanbaru + drone = drone flat (not xorg)", () => {
    const r = calcPricing({ pkg: "3H2M", category: "WNA", org: 7, start: "Pekanbaru", drone: true });
    expect(r.perorg).toBe(2_000_000);
    expect(r.startPerorg).toBe(1_350_000);
    expect(r.dronePerorg).toBe(1_500_000);
    // (2.000.000 + 1.350.000) * 7 + 1.500.000  (drone not multiplied by org)
    expect(r.total).toBe((2_000_000 + 1_350_000) * 7 + 1_500_000);
  });

  it("free start Tuapejat adds nothing", () => {
    const r = calcPricing({ pkg: "2H1M", category: "WNI", org: 2, start: "Tuapejat", drone: false });
    expect(r.startPerorg).toBe(0);
  });

  it("drone add-on WNI 1jt and WNA 1.5jt", () => {
    const wni = calcPricing({ pkg: "2H1M", category: "WNI", org: 2, start: "Tuapejat", drone: true });
    const wna = calcPricing({ pkg: "2H1M", category: "WNA", org: 2, start: "Tuapejat", drone: true });
    expect(wni.dronePerorg).toBe(1_000_000);
    expect(wna.dronePerorg).toBe(1_500_000);
  });
});

describe("buildWaUrl", () => {
  it("contains wa.me number + encoded text with org count (exact)", () => {
    const url = buildWaUrl({ pkg: "2H1M", category: "WNI", org: 4, start: "Padang", drone: true });
    expect(url).toContain("wa.me/6282360245556");
    expect(url).toContain("text=");
    const decoded = decodeURIComponent(url.split("text=")[1]);
    expect(decoded).toContain("2 Hari 1 Malam");
    expect(decoded).toContain("4 org");
    expect(decoded).toContain("Padang");
    expect(decoded).toContain("IDR");
  });
});
