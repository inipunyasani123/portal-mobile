// Data sepuluh demo aplikasi mobile. Isinya diambil dari folder AplikasiMobile/<slug> dan halaman live tiap aplikasi
// (app.json, README, panel samping +html, sitemap): nama, jenis, latar fiktif, dan fitur yang memang bisa dicoba.
// `halaman` = rute yang ada di sitemap aplikasinya. `layar` = potret ponsel asli (390×844, DPR 2) dari live,
// dipotret dengan scripts/potret.mjs. `ikon` = ikon aplikasinya sendiri (assets/icon.png). `warna` = warna tema
// aplikasi itu (app.json / ikon).
const B = '/aplikasi-mobile/images';

// Pengelompokan menurut usaha pengguna aplikasinya (bukan jenis teknisnya).
export const JENIS = [
  { id: 'toko', label: 'Toko & Kuliner', ket: 'warung, kafe, pesan makanan' },
  { id: 'jasa', label: 'Jasa & Layanan', ket: 'pangkas, salon, laundry' },
  { id: 'pendidikan', label: 'Pendidikan & Komunitas', ket: 'sekolah, masjid' },
  { id: 'kantor', label: 'Kantor & Properti', ket: 'absensi karyawan, kos' },
  { id: 'acara', label: 'Acara & Hiburan', ket: 'tiket konser dan festival' },
];
const KELOMPOK = { kasir: 'toko', member: 'toko', antar: 'toko', booking: 'jasa', laundry: 'jasa', sekolah: 'pendidikan', masjid: 'pendidikan', absensi: 'kantor', kos: 'kantor', tiket: 'acara' };

export const aplikasi = [
  {
    slug: 'kasir',
    nama: 'Ketip',
        kategori: 'Kasir warung',
    tagline: 'Kasir HP untuk warung. Catat penjualan dan pantau stok.',
    latar: 'Contoh: warung kopi dan kelontong di Tulungagung.',
    fitur: [
      ['Jual dengan cepat', 'pilih barang, hitung, selesai dalam tiga ketukan.'],
      ['Tunai, QRIS, atau kasbon', 'kembalian dan struk digital langsung jadi.'],
      ['Stok terpantau', 'bahan dan porsi berkurang otomatis.'],
      ['Tutup kasir', 'hitung uang laci, pengeluaran, dan laba hari ini.'],
    ],
    halaman: [['/laporan', 'Laporan'], ['/kasbon', 'Kasbon'], ['/stok', 'Stok'], ['/pengeluaran', 'Pengeluaran']],
    besar: true,
    warna: { bg: '#16140F', aksen: '#F2C230' },
    ikon: `${B}/ikon/kasir.webp`,
    layar: [[`${B}/layar/kasir-1.webp`, 'Kasir'], [`${B}/layar/kasir-2.webp`, 'Laporan'], [`${B}/layar/kasir-3.webp`, 'Kasbon']],
  },
  {
    slug: 'booking',
    nama: 'Kursi Putar',
        kategori: 'Booking pangkas & salon',
    tagline: 'Booking jam kosong atau ambil nomor antre.',
    latar: 'Contoh: pangkas rambut dan salon di Blitar.',
    fitur: [
      ['Jam kosong yang akurat', 'mengikuti jam buka dan layanan.'],
      ['Pilih kapster', 'atau siapa saja yang kosong.'],
      ['Karcis dengan kode QR', 'tunjukkan ke kasir saat datang.'],
      ['Antre datang langsung', 'lihat nomor dan perkiraan dipanggil.'],
    ],
    halaman: [['/layanan', 'Layanan'], ['/booking', 'Booking'], ['/antre', 'Antre'], ['/kapster', 'Kapster']],
    warna: { bg: '#7A1F2B', aksen: '#9FD3B8' },
    ikon: `${B}/ikon/booking.webp`,
    layar: [[`${B}/layar/booking-1.webp`, 'Beranda'], [`${B}/layar/booking-2.webp`, 'Layanan']],
  },
  {
    slug: 'sekolah',
    nama: 'Kapur',
        kategori: 'Orang tua murid',
    tagline: 'Kabar dari sekolah langsung di HP orang tua.',
    latar: 'Contoh: SD di Kediri, dua anak dalam satu akun.',
    fitur: [
      ['Jadwal dan absensi', 'ajukan izin atau sakit dari HP.'],
      ['Nilai dan rapor', 'lihat perkembangan tiap mata pelajaran.'],
      ['SPP dan pesan', 'bayar dan tanya wali kelas (simulasi).'],
    ],
    halaman: [['/jadwal', 'Jadwal'], ['/nilai', 'Nilai'], ['/tagihan', 'Tagihan SPP'], ['/pesan', 'Pesan']],
    warna: { bg: '#1F4A3B', aksen: '#F2C230' },
    ikon: `${B}/ikon/sekolah.webp`,
    layar: [[`${B}/layar/sekolah-1.webp`, 'Beranda'], [`${B}/layar/sekolah-2.webp`, 'Nilai']],
  },
  {
    slug: 'member',
    nama: 'Kopi Blirik',
        kategori: 'Member & poin kafe',
    tagline: 'Kartu member, poin, dan voucher untuk kafe.',
    latar: 'Contoh: jaringan kafe di lima kota Jawa Timur.',
    fitur: [
      ['Kartu member QR', 'kodenya berganti tiap 60 detik.'],
      ['Poin dan hadiah', 'kumpulkan poin, tukar voucher.'],
      ['Pesan ambil', 'pesan dulu, ambil tanpa antre.'],
    ],
    halaman: [['/kartu', 'Kartu member'], ['/hadiah', 'Hadiah'], ['/pesan', 'Pesan ambil'], ['/outlet', 'Outlet']],
    warna: { bg: '#1C5638', aksen: '#F0C24B' },
    ikon: `${B}/ikon/member.webp`,
    layar: [[`${B}/layar/member-1.webp`, 'Beranda'], [`${B}/layar/member-2.webp`, 'Kartu member']],
  },
  {
    slug: 'antar',
    nama: 'Pincuk',
        kategori: 'Pesan-antar kuliner',
    tagline: 'Masakan warung tetangga, diantar selagi hangat.',
    latar: 'Contoh: warung-warung di kota rekaan Tirtalaya.',
    fitur: [
      ['Pilih warung', 'yang sedang buka bisa dipesan.'],
      ['Atur pesanan', 'level sambal dan tambahan lauk.'],
      ['Lacak kurir', 'pantau pesanan sampai tiba (simulasi).'],
    ],
    halaman: [['/cari', 'Cari menu'], ['/kategori/sarapan', 'Sarapan'], ['/warung/bakso-kali-ijo', 'Satu warung'], ['/promo', 'Promo']],
    warna: { bg: '#B3321B', aksen: '#3E9B5A' },
    ikon: `${B}/ikon/antar.webp`,
    layar: [[`${B}/layar/antar-1.webp`, 'Beranda'], [`${B}/layar/antar-2.webp`, 'Menu warung']],
  },
  {
    slug: 'laundry',
    nama: 'Busa Ungu',
        kategori: 'Pelanggan laundry',
    tagline: 'Pantau cucian dari jemput sampai diantar.',
    latar: 'Contoh: laundry kiloan dengan layanan jemput-antar.',
    fitur: [
      ['Status tiap tahap', 'dicuci, disetrika, sampai diantar.'],
      ['Jemput-antar', 'pilih jam, catat noda dan pewangi.'],
      ['Nota dan poin', 'bayar (simulasi) dan kumpulkan poin.'],
    ],
    halaman: [['/status', 'Status cucian'], ['/pesan', 'Pesan jemput'], ['/harga', 'Daftar harga'], ['/notifikasi', 'Notifikasi']],
    warna: { bg: '#5B2FD0', aksen: '#FFD24A' },
    ikon: `${B}/ikon/laundry.webp`,
    layar: [[`${B}/layar/laundry-1.webp`, 'Beranda'], [`${B}/layar/laundry-2.webp`, 'Status cucian']],
  },
  {
    slug: 'absensi',
    nama: 'Gilir',
        kategori: 'Absensi karyawan',
    tagline: 'Absen, jadwal shift, cuti, dan slip gaji.',
    latar: 'Contoh: toko roti tiga gerai di Tulungagung.',
    fitur: [
      ['Absen di gerai', 'hanya bisa dilakukan di lokasi kerja.'],
      ['Jadwal shift', 'lihat jadwal dan rekan satu shift.'],
      ['Cuti dan slip gaji', 'ajukan dari HP, atasan yang menyetujui.'],
    ],
    halaman: [['/jadwal', 'Jadwal shift'], ['/pengajuan', 'Pengajuan'], ['/gaji', 'Slip gaji'], ['/atasan', 'Mode atasan']],
    warna: { bg: '#1E1A15', aksen: '#EFDCA6' },
    ikon: `${B}/ikon/absensi.webp`,
    layar: [[`${B}/layar/absensi-1.webp`, 'Jadwal shift'], [`${B}/layar/absensi-2.webp`, 'Slip gaji']],
  },
  {
    slug: 'tiket',
    nama: 'Karcis Wetan',
        kategori: 'Tiket acara',
    tagline: 'Tiket acara Jawa Timur, dari pesan sampai masuk gerbang.',
    latar: 'Contoh: konser, seminar, festival kuliner, dan lari.',
    fitur: [
      ['Pilih tiket', 'bayar lewat QRIS atau transfer (simulasi).'],
      ['E-tiket QR', 'bisa dikirim ke teman.'],
      ['Layar panitia', 'periksa tiket di gerbang.'],
    ],
    halaman: [['/acara/malam-gending-elektrik', 'Satu acara'], ['/tiket', 'Tiketku'], ['/panitia', 'Mode panitia']],
    warna: { bg: '#15121F', aksen: '#FF6A2B' },
    ikon: `${B}/ikon/tiket.webp`,
    layar: [[`${B}/layar/tiket-1.webp`, 'Beranda'], [`${B}/layar/tiket-2.webp`, 'Halaman acara']],
  },
  {
    slug: 'masjid',
    nama: 'Nurul Ufuk',
        kategori: 'Jemaah masjid',
    tagline: 'Jadwal salat, kas terbuka, dan kabar masjid.',
    latar: 'Contoh: masjid rekaan di Tulungagung.',
    fitur: [
      ['Jadwal salat', 'dengan hitung mundur dan pengingat azan.'],
      ['Arah kiblat', 'kompas di HP.'],
      ['Kajian dan kas', 'lihat agenda, laporan kas, dan infak.'],
    ],
    halaman: [['/jadwal', 'Jadwal sebulan'], ['/kiblat', 'Kiblat'], ['/kas', 'Laporan kas'], ['/infak', 'Infak']],
    warna: { bg: '#141C33', aksen: '#F2C66B' },
    ikon: `${B}/ikon/masjid.webp`,
    layar: [[`${B}/layar/masjid-1.webp`, 'Beranda'], [`${B}/layar/masjid-2.webp`, 'Laporan kas']],
  },
  {
    slug: 'kos',
    nama: 'Grendel',
        kategori: 'Aplikasi kos',
    tagline: 'Satu aplikasi untuk penghuni dan pemilik kos.',
    latar: 'Contoh: kos 12 kamar di Tulungagung.',
    fitur: [
      ['Tagihan jelas', 'bayar lewat QRIS atau transfer (simulasi).'],
      ['Lapor kerusakan', 'kirim foto dan pantau perbaikan.'],
      ['Sisi pemilik', 'lihat denah kamar dan arus kas.'],
    ],
    halaman: [['/penghuni', 'Sisi penghuni'], ['/penghuni/lapor', 'Lapor kerusakan'], ['/pemilik/kamar', 'Denah kamar'], ['/kamar/03', 'Iklan kamar']],
    besar: true,
    warna: { bg: '#A3381F', aksen: '#E9A93A' },
    ikon: `${B}/ikon/kos.webp`,
    layar: [[`${B}/layar/kos-1.webp`, 'Pilih peran'], [`${B}/layar/kos-2.webp`, 'Sisi penghuni'], [`${B}/layar/kos-3.webp`, 'Sisi pemilik']],
  },
].map((a) => ({ ...a, jenis: KELOMPOK[a.slug], url: `https://app-${a.slug}.pintuweb.id` }));

export const JUMLAH = aplikasi.length;
const ANGKA = ['Nol', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas', 'Dua belas'];
export const NAMA_JUMLAH = ANGKA[JUMLAH] || String(JUMLAH);
export const bySlug = (s) => aplikasi.find((a) => a.slug === s);
