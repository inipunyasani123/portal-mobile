import HARGA from './harga.json';
// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /aplikasi-mobile) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
/** Harga & kontak dibaca dari ./harga.json (salinan https://www.pintuweb.id/harga.json, diambil scripts/ambil-harga.mjs saat build). */
const P = (slug) => HARGA.paket[slug];
const rp = (n) => `Rp${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
const tanggal = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} ${["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][m - 1]} ${y}`; };

export const PINTUWEB = 'https://www.pintuweb.id';
export const URL_PORTAL = `${PINTUWEB}/aplikasi-mobile`;

/** Kontak & jam kerja dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY, HOURS). Ganti di sana = ganti di sini. */
export const WA_NUMBER = HARGA.wa.nomor;
export const WA_DISPLAY = HARGA.wa.tampil;
export const JAM_KERJA = 'Senin – Sabtu, 08.00 – 19.00 WIB';
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Paket aplikasi mobile dari PintuWeb/app/lib/packages.ts (slug aplikasi-mobile: title, minPrice/maxPrice, time),
 * keputusan pemilik 22–23 Okt 2026. Satu-satunya tempat angka bisnis di portal ini. PRICES_UPDATED di sana:
 * 2026-10-23. Kalau angkanya berubah di sana, ubah juga di sini.
 */
export const HARGA_PER = tanggal(HARGA.diperbarui);
export const PAKET = {
  nama: 'Aplikasi Mobile (Android & iOS)',
  mulai: rp(P('aplikasi-mobile').mulai),
  sampai: rp(P('aplikasi-mobile').sampai) + (P('aplikasi-mobile').lebih ? '+' : ''),
  waktu: P('aplikasi-mobile').waktu,
  teknologi: 'React Native + Expo',
  platform: ['Android', 'iOS', 'web'],
  bayar: 'DP 50% untuk memulai, pelunasan setelah aplikasi jadi',
  diserahkan: ['File aplikasi', 'Kode sumber', `Garansi perbaikan bug ${HARGA.garansiHari} hari sejak aplikasi diserahkan`],
};
/** Metode bayar PintuWeb (PAYMENT_METHODS di packages.ts); nomor rekening & alamat dompet hanya di invoice. */
export const METODE_BAYAR = ['QRIS', 'Transfer bank', 'DANA', 'SeaBank', 'USDT'];

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Konsep Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Portofolio Pribadi' },
  { path: 'website-reservasi', label: 'Reservasi & Booking' },
  { path: 'website-properti', label: 'Properti' },
  { path: 'aplikasi-to-do', label: 'To-Do & Produktivitas' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'aplikasi-mobile');

/** Paket harga (lib/packages.ts: aplikasi-mobile), halaman layanan, cara bayar, dan galeri demo PintuWeb. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#aplikasi-mobile`, label: 'Harga paket Aplikasi Mobile' },
  { href: `${PINTUWEB}/services/aplikasi-android-ios`, label: 'Jasa pembuatan aplikasi Android & iOS' },
  { href: `${PINTUWEB}/pembayaran`, label: 'Cara bayar' },
  { href: `${PINTUWEB}/demo#mobile`, label: 'Semua demo PintuWeb' },
];

/** Artikel yang relevan dengan portal ini (di bawah "Baca juga"). */
export const BACA_JUGA = [
  { href: `${PINTUWEB}/artikel/harga-pembuatan-aplikasi`, label: 'Berapa harga pembuatan aplikasi?' },
];
