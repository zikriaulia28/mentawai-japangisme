import { describe, it, expect } from "vitest";
import { calcPricing, buildWaUrl, getTier } from "./pricing";

describe("getTier", () => {
  it("maps pax to tier group", () => {
    expect(getTier(1)).toBe(2);
    expect(getTier(2)).toBe(2);
    expect(getTier(4)).toBe(3);
    expect(getTier(6)).toBe(5);
    expect(getTier(10)).toBe(7);
  });
});

describe("calcPricing", () => {
  it("WNI 2H1M 4 pax start Padang = expected", () => {
    // tier 3-4 => 2.100.000/pax; Padang addon WNI 560.000/pax; no drone
    const r = calcPricing({ pkg: "2H1M", category: "WNI", pax: 4, start: "Padang", drone: false });
    expect(r.tier).toBe(3);
    expect(r.perPax).toBe(2_100_000);
    expect(r.startPerPax).toBe(560_000);
    expect(r.dronePerPax).toBe(0);
    expect(r.total).toBe((2_100_000 + 560_000) * 4);
  });

  it("WNA 3H2M 7 pax start Pekanbaru + drone = expected", () => {
    // tier 7-10 => 2.000.000/pax; Pekanbaru addon WNA 1.350.000; drone WNA 1.500.000
    const r = calcPricing({ pkg: "3H2M", category: "WNA", pax: 7, start: "Pekanbaru", drone: true });
    expect(r.tier).toBe(7);
    expect(r.perPax).toBe(2_000_000);
    expect(r.startPerPax).toBe(1_350_000);
    expect(r.dronePerPax).toBe(1_500_000);
    expect(r.total).toBe((2_000_000 + 1_350_000 + 1_500_000) * 7);
  });

  it("tier discount active at 3-4 pax (cheaper per pax than 2)", () => {
    const two = calcPricing({ pkg: "2H1M", category: "WNI", pax: 2, start: "Tuapejat", drone: false });
    const four = calcPricing({ pkg: "2H1M", category: "WNI", pax: 4, start: "Tuapejat", drone: false });
    expect(four.perPax).toBeLessThan(two.perPax);
  });

  it("free start Tuapejat adds nothing", () => {
    const r = calcPricing({ pkg: "2H1M", category: "WNI", pax: 2, start: "Tuapejat", drone: false });
    expect(r.startPerPax).toBe(0);
  });

  it("drone add-on WNI 1jt and WNA 1.5jt", () => {
    const wni = calcPricing({ pkg: "2H1M", category: "WNI", pax: 2, start: "Tuapejat", drone: true });
    const wna = calcPricing({ pkg: "2H1M", category: "WNA", pax: 2, start: "Tuapejat", drone: true });
    expect(wni.dronePerPax).toBe(1_000_000);
    expect(wna.dronePerPax).toBe(1_500_000);
  });
});

describe("buildWaUrl", () => {
  it("contains wa.me number + encoded text with pkg/pax/start/drone/total", () => {
    const url = buildWaUrl({ pkg: "2H1M", category: "WNI", pax: 4, start: "Padang", drone: true });
    expect(url).toContain("wa.me/6282360245556");
    expect(url).toContain("text=");
    const decoded = decodeURIComponent(url.split("text=")[1]);
    expect(decoded).toContain("2 Hari 1 Malam");
    expect(decoded).toContain("4 pax");
    expect(decoded).toContain("Padang");
    expect(decoded).toContain("IDR");
  });
});
