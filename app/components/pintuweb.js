// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /aplikasi-mobile) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
export const PINTUWEB = 'https://www.pintuweb.id';
export const URL_PORTAL = `${PINTUWEB}/aplikasi-mobile`;

/** Kontak & jam kerja dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY, HOURS). Ganti di sana = ganti di sini. */
export const WA_NUMBER = '6285190931399';
export const WA_DISPLAY = '+62 851 9093 1399';
export const JAM_KERJA = 'Senin – Sabtu, 08.00 – 19.00 WIB';
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Paket aplikasi mobile dari PintuWeb/app/lib/packages.ts (slug aplikasi-mobile: title, minPrice/maxPrice, time),
 * keputusan pemilik 22–23 Okt 2026. Satu-satunya tempat angka bisnis di portal ini. PRICES_UPDATED di sana:
 * 2026-10-23. Kalau angkanya berubah di sana, ubah juga di sini.
 */
export const HARGA_PER = '23 Oktober 2026';
export const PAKET = {
  nama: 'Aplikasi Mobile (Android & iOS)',
  mulai: 'Rp500.000',
  sampai: 'Rp10.000.000+',
  waktu: '3–7 hari kerja',
  teknologi: 'React Native + Expo',
  platform: ['Android', 'iOS', 'web'],
  bayar: 'DP 50% untuk memulai, pelunasan setelah aplikasi jadi',
  diserahkan: ['File aplikasi', 'Kode sumber', 'Garansi perbaikan bug 30 hari sejak aplikasi diserahkan'],
};
/** Metode bayar PintuWeb (PAYMENT_METHODS di packages.ts); nomor rekening & alamat dompet hanya di invoice. */
export const METODE_BAYAR = ['QRIS', 'Transfer bank', 'DANA', 'SeaBank', 'USDT'];

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Kontes Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Website Portofolio' },
  { path: 'website-reservasi', label: 'Website Reservasi' },
  { path: 'website-properti', label: 'Website Properti' },
  { path: 'aplikasi-to-do', label: 'Aplikasi To-Do' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'aplikasi-mobile');

/** Paket harga (lib/packages.ts: aplikasi-mobile), halaman layanan, cara bayar, dan galeri demo PintuWeb. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#aplikasi-mobile`, label: 'Harga paket Aplikasi Mobile' },
  { href: `${PINTUWEB}/services/aplikasi-android-ios`, label: 'Jasa pembuatan aplikasi Android & iOS' },
  { href: `${PINTUWEB}/pembayaran`, label: 'Cara bayar' },
  { href: `${PINTUWEB}/demo#mobile`, label: 'Semua demo PintuWeb' },
];
