// All hard-coded content for the landing page, sourced from PRD-FINAL-Japangisme-Mentawai.md.
import type { PackageKey } from "./pricing";

export const BRAND = {
  name: "Japangisme Mentawai Tour Guide",
  owner: "Bung Japang",
  phone: "+62 823-6024-5556",
  waUrl:
    "https://wa.me/6282360245556?text=Halo%20Bung%20Japang,%20saya%20tertarik%20dengan%20trip%20Mentawai%20ini.%20Bisakah%20kita%20berdiskusi%20mengenai%20rencana%20liburan%20saya%20ke%20Mentawai?",
  ig: "tripmentawai_japangisme",
  tiktok: "Japangisme Mentawai Tour Guide",
  logo: "/logo.jpg",
};

export const NAV_LINKS = [
  { label: "Paket", href: "#pricing" },
  { label: "Fasilitas", href: "#facilities" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Galeri", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#footer" },
];

export const HERO = {
  headline1: "Explore the Beauty of Mentawai Islands",
  headline2: "Trip Mentawai Japangisme",
  sub1: "Open Trip dan Private Trip Mentawai 3 Hari 2 Malam & 2 Hari 1 Malam",
  sub2: "Layanan jasa lokal Mentawai",
  slides: [
    "/hero/hero-1.jpg",
    "/hero/hero-2.jpg",
    "/hero/hero-3.jpg",
    "/hero/hero-4.jpg",
  ],
};

export const HIGHLIGHTS = [
  {
    icon: "Snowflake",
    label: "Penginapan Ber-AC",
    copy: "View laut, 2 orang/kamar",
  },
  {
    icon: "Ship",
    label: "Boat Tenda Charter",
    copy: "Standar operasional wisata",
  },
  {
    icon: "Glasses",
    label: "Peralatan Snorkeling",
    copy: "Siap pakai selama trip",
  },
  { icon: "Waves", label: "SUP Paddle", copy: "Menikmati hutan mangrove" },
  {
    icon: "Camera",
    label: "Underwater Doc",
    copy: "Gratis foto/video bawah laut",
  },
  { icon: "Plane", label: "Dokumentasi Drone", copy: "By request (add-on)" },
  { icon: "Users", label: "Jasa Lokal", copy: "Guide & crew asli Mentawai" },
];

export const INCLUDED = [
  "Penginapan AC view laut",
  "Makan, minum, buah-buahan, speaker",
  "Boat tenda charter",
  "Life Jacket",
  "P3K",
  "Guide local Mentawai",
  "Peralatan Snorkeling",
  "Paddle Board",
  "Dokumentasi Underwater",
];

export const EXCLUDED = [
  "Transportasi menuju Padang (jika luar Padang)",
  "Penginapan selama di Padang",
  "Tiket kapal Mentawai Fast (Padang ⇄ Tuapejat) tekhusus tamu yang start Tuapejat (Mentawai)",
  "Obat pribadi (untuk yang punya penyakit bawaan)",
  "Tip guide",
];

export const DRONE_CALLOUT =
  "🎬 Dokumentasi Drone tersedia sebagai add-on — IDR 1.000.000/battery (WNI) | IDR 1.500.000/battery (WNA). By request, minimal H-2 sebelum trip.";

export interface ItineraryItem {
  time: string;
  activity: string;
}
export interface ItineraryDay {
  day: string;
  items: ItineraryItem[];
}
export interface ItineraryPackage {
  pkg: PackageKey;
  days: ItineraryDay[];
}

export const ITINERARY: ItineraryPackage[] = [
  {
    pkg: "2H1M",
    days: [
      {
        day: "H1",
        items: [
          { time: "10:30", activity: "Sampai di dermaga Tuapejat" },
          {
            time: "11:00",
            activity: "Check-in & meeting point di penginapan, welcome drink",
          },
          { time: "12:00", activity: "ISHOMA" },
          { time: "13:30", activity: "Prepare Island Hopping" },
          { time: "14:00", activity: "Berangkat menuju Mangobay (Underwater)" },
          {
            time: "16:00",
            activity: "Spongebob Island (Paddle, hutan mangrove)",
          },
          { time: "18:00", activity: "Balik ke penginapan (Sunset)" },
          { time: "19:30", activity: "Makan malam" },
          { time: "20:00", activity: "Acara bebas" },
        ],
      },
      {
        day: "H2",
        items: [
          { time: "08:00", activity: "Sarapan pagi" },
          { time: "08:30", activity: "Prepare" },
          {
            time: "09:00",
            activity: "Berangkat melewati resort Bilou & Nasara",
          },
          {
            time: "09:30",
            activity: "Stay di pantai Resort Toska (photoshoot)",
          },
          { time: "11:30", activity: "Berangkat penginapan" },
          { time: "12:30", activity: "ISHOMA di penginapan" },
          { time: "13:00", activity: "Prepare" },
          { time: "14:30", activity: "Checkout penginapan (masuk kapal)" },
          { time: "15:00", activity: "Sayonara" },
        ],
      },
    ],
  },
  {
    pkg: "3H2M",
    days: [
      {
        day: "H1",
        items: [
          { time: "10:30", activity: "Sampai di dermaga Tuapejat" },
          {
            time: "11:00",
            activity: "Check-in & meeting point, welcome drink",
          },
          { time: "12:00", activity: "ISHOMA" },
          { time: "13:30", activity: "Prepare Island Hopping" },
          { time: "14:00", activity: "Berangkat menuju Gosong Simakakang" },
          {
            time: "16:00",
            activity: "Explore Pulau Setan (jika cuaca mendukung)",
          },
          { time: "16:30", activity: 'Sunset di spot surfing "Ombak Tikus"' },
          { time: "18:30", activity: "Balik ke penginapan" },
          { time: "19:30", activity: "Makan malam" },
          { time: "20:00", activity: "Acara bebas" },
        ],
      },
      {
        day: "H2",
        items: [
          { time: "08:00", activity: "Sarapan pagi" },
          { time: "08:30", activity: "Prepare" },
          {
            time: "09:00",
            activity: "Berangkat menuju pantai Simakakang Island",
          },
          {
            time: "10:00",
            activity: "Snorkeling di Mangobay (underwater doc)",
          },
          { time: "12:30", activity: "ISHOMA (Mangobay)" },
          {
            time: "15:00",
            activity: "Spongebob Island (Paddle, hutan mangrove)",
          },
          { time: "18:10", activity: "Balik ke penginapan" },
          { time: "19:30", activity: "Makan malam" },
          { time: "20:00", activity: "Acara bebas" },
        ],
      },
      {
        day: "H3",
        items: [
          { time: "08:00", activity: "Sarapan pagi" },
          { time: "08:30", activity: "Prepare" },
          {
            time: "09:00",
            activity: "Berangkat melewati resort Bilou & Nasara",
          },
          {
            time: "09:30",
            activity: "Stay di pantai Resort Toska (photoshoot)",
          },
          { time: "11:30", activity: "Berangkat penginapan" },
          { time: "12:30", activity: "ISHOMA di penginapan" },
          { time: "13:00", activity: "Prepare" },
          { time: "14:30", activity: "Checkout penginapan (masuk kapal)" },
          { time: "15:00", activity: "Sayonara" },
        ],
      },
    ],
  },
];

export interface GalleryImage {
  src: string;
  spot: string;
}
export const GALLERY_SPOTS = [
  "Semua",
  "Mangobay",
  "Gosong Simakakang",
  "Pantai Simakakang",
  "Pantai Toska",
  "Spongebob",
  "Surfing",
  "Pulau Setan",
];
export const GALLERY: GalleryImage[] = [
  { src: "/gallery/mangobay/mangobay-1.jpg", spot: "Mangobay" },
  { src: "/gallery/mangobay/mangobay-2.jpg", spot: "Mangobay" },
  { src: "/gallery/mangobay/mangobay-3.webp", spot: "Mangobay" },
  { src: "/gallery/mangobay/mangobay-4.jpg", spot: "Mangobay" },
  {
    src: "/gallery/gosong-simakakang/gosong-simakakang-1.jpg",
    spot: "Gosong Simakakang",
  },
  {
    src: "/gallery/gosong-simakakang/gosong-simakakang-2.jpg",
    spot: "Gosong Simakakang",
  },
  {
    src: "/gallery/gosong-simakakang/gosong-simakakang-3.jpg",
    spot: "Gosong Simakakang",
  },
  {
    src: "/gallery/gosong-simakakang/gosong-simakakang-4.jpg",
    spot: "Gosong Simakakang",
  },
  {
    src: "/gallery/pantai-simakakang/pantai-simakakang-1.jpg",
    spot: "Pantai Simakakang",
  },
  {
    src: "/gallery/pantai-simakakang/pantai-simakakang-2.jpg",
    spot: "Pantai Simakakang",
  },
  {
    src: "/gallery/pantai-simakakang/pantai-simakakang-3.jpg",
    spot: "Pantai Simakakang",
  },
  {
    src: "/gallery/pantai-simakakang/pantai-simakakang-4.webp",
    spot: "Pantai Simakakang",
  },
  { src: "/gallery/pantai-toska/pantai-toska-1.jpg", spot: "Pantai Toska" },
  { src: "/gallery/pantai-toska/pantai-toska-2.webp", spot: "Pantai Toska" },
  { src: "/gallery/pantai-toska/pantai-toska-3.webp", spot: "Pantai Toska" },
  { src: "/gallery/pantai-toska/pantai-toska-4.webp", spot: "Pantai Toska" },
  {
    src: "/gallery/spongebob-island/spongebob-island-1.jpg",
    spot: "Spongebob",
  },
  {
    src: "/gallery/spongebob-island/spongebob-island-2.jpg",
    spot: "Spongebob",
  },
  {
    src: "/gallery/spongebob-island/spongebob-island-3.jpg",
    spot: "Spongebob",
  },
  {
    src: "/gallery/spongebob-island/spongebob-island-4.jpg",
    spot: "Spongebob",
  },
  {
    src: "/gallery/spongebob-island/spongebob-island-5.jpg",
    spot: "Spongebob",
  },
  {
    src: "/gallery/spongebob-island/spongebob-island-6.jpg",
    spot: "Spongebob",
  },
  { src: "/gallery/pulau-setan/pulau-setan-1.jpg", spot: "Pulau Setan" },
  { src: "/gallery/spot-surfing/spot-surfing-1.jpg", spot: "Surfing" },
  { src: "/gallery/spot-surfing/spot-surfing-2.jpg", spot: "Surfing" },
  { src: "/gallery/spot-surfing/spot-surfing-3.jpg", spot: "Surfing" },
];

export interface Testimonial {
  name: string;
  city: string;
  pkg: string;
  text: string;
}
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rina",
    city: "Jakarta",
    pkg: "3H2M",
    text: "Trip-nya seru banget! Fasilitas lengkap dan guide-nya ramah.",
  },
  {
    name: "Andi",
    city: "Pekanbaru",
    pkg: "2H1M",
    text: "Best snorkeling experience in Mentawai. Underwater doc-nya mantap!",
  },
  {
    name: "Sarah",
    city: "Surabaya",
    pkg: "3H2M",
    text: "Private trip bareng teman, super worth it. View dari drone gila!",
  },
  {
    name: "Rahmat Reski",
    city: "Bukittinggi",
    pkg: "3H2M",
    text: "Trip-nya luar biasa! Guide dan crew-nya profesional, bikin nyaman banget.",
  },
  {
    name: "Fauzi Al Rasyid",
    city: "Padang",
    pkg: "2H1M",
    text: "Jasa lokal dengan pelayanan yang profesional. Jika ingin opentrip dan private trip ke Mentawai jasa ini sangat direkomendasikan. Puas sekali dengan liburannya.",
  },
  {
    name: "Weni Satrini",
    city: "Bekasi",
    pkg: "3H2M",
    text: "Tim Japangisme sangat ramah dan sigap, semua tersusun rapi dari awal sampai akhir. Pemandangan Mentawai yang memukau makin terasa nikmat berkat pelayanan luar biasa. Sangat direkomendasikan!",
  },
  {
    name: "Yupita Elina",
    city: "Pekanbaru",
    pkg: "3H2M",
    text: "Luar biasaaaaaa... tempat yg bagus nyaman pantai yg indah.",
  },
];

export const TERMS = [
  "Booking minimal H-7 sebelum jadwal trip",
  "DP 1: Rp 500.000 saat pendaftaran",
  "DP 2: 50% dari total harga trip dibayarkan pada H-7 trip",
  "Pelunasan dibayarkan pada H1 saat meeting point",
  "DP tidak bisa dikembalikan jika peserta membatalkan, namun bisa di-reschedule khusus peserta PRIVATE TRIP",
  "Reschedule masa tenggang 5 hari",
  "Uang dikembalikan 100% jika kapal Padang ⇄ Tuapejat tidak jalan karena faktor cuaca",
  "Drone: biaya tambahan (WNI IDR 1.000.000/battery, WNA IDR 1.500.000/battery) — by request",
  "Schedule bisa berubah sesuai kondisi cuaca (badai, pasang naik/turun)",
  "Pemesanan paket include drone minimal H-2 sebelum trip",
  "Open trip = 7 org minimum. Jika peserta kurang dari 7, peserta pilih: Ikut harga sesuai jumlah peserta, atau Trip dibatalkan + DP dikembalikan 100%",
];

export interface Faq {
  q: string;
  a: string;
}
export const FAQS: Faq[] = [
  {
    q: "Minimal berapa peserta open trip?",
    a: "Bebas, namun menyesuaikan dengan harga yang sudah ditentukan, untuk harga 1.8jt/org start tuapejat minimal peserta 7 orang. Jika kurang dari 7 orang, peserta pilih: ikut harga sesuai jumlah peserta, atau trip dibatalkan + DP kembali 100%.",
  },
  {
    q: "Boleh private trip / custom jadwal?",
    a: "Boleh, namun untuk jadwal tetap menyesuaikan dengan jadwal kapal Mentawai fast yaitu setiap hari (Senin, rabu, jumat dan minggu).",
  },
  {
    q: "Berapa DP & kapan lunas?",
    a: "Booking min H-7. DP1 Rp500.000 saat daftar, DP2 50% total di H-7, pelunasan saat meeting point H1.",
  },
  {
    q: "Kalau cuaca buruk / kapal tidak jalan?",
    a: "Uang kembali 100% jika kapal Padang⇄Tuapejat batal karena cuaca. Jadwal bisa berubah mengikuti pasang/badai.",
  },
  {
    q: "Add-on drone gimana?",
    a: "WNI IDR 1.000.000/battery, WNA IDR 1.500.000/battery, by request, minimal H-2 sebelum trip.",
  },
  {
    q: "Peralatan snorkeling / SUP termasuk?",
    a: "Include: life jacket, snorkeling gear, paddle board, dokumentasi underwater. Exclude: tip guide & tiket kapal Mentawai Fast jika peserta start dari Tuapejat (Mentawai)",
  },
  {
    q: "Dokumen apa yang dibawa?",
    a: "KTP/SIM untuk identitas + tiket kapal Mentawai Fast (Padang⇄Tuapejat, bukan include). Transportasi ke Padang bukan tanggung kami jika peserta start dari Tuapejat (Mentawai)",
  },
];
