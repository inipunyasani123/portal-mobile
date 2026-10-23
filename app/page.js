import Image from 'next/image';
import { aplikasi, JENIS, JUMLAH, NAMA_JUMLAH, bySlug } from './components/aplikasi-data';
import { LANJUT, GALERI_LAIN, PINTUWEB, PAKET, METODE_BAYAR, HARGA_PER, WA_DISPLAY, JAM_KERJA, wa } from './components/pintuweb';
import Saring from './components/saring';

const WA = wa('Halo PintuWeb, saya mau buat aplikasi mobile (Android & iOS) untuk usaha saya. Boleh minta info?');
const warna = (a) => ({ '--m-bg': a.warna.bg, '--m-aksen': a.warna.aksen });
const jumlahJenis = (id) => aplikasi.filter((a) => a.jenis === id).length;
const SARINGAN = [{ id: 'semua', label: 'Semua', jumlah: JUMLAH }, ...JENIS.map((j) => ({ ...j, jumlah: jumlahJenis(j.id) }))];

/**
 * Fitur yang sungguh berjalan di demo, beserta aplikasi yang memilikinya (lihat aplikasi-data & tiap folder
 * AplikasiMobile/<slug>). `luas` mengatur ukuran widget di bento.
 */
const FITUR = [
  {
    id: 'platform',
    judul: 'Satu kode, tiga platform',
    isi: `Semua aplikasi dibuat dengan ${PAKET.teknologi}. Kode yang sama menjadi aplikasi Android, iOS, dan versi web; yang kamu coba di galeri ini adalah versi webnya.`,
    app: aplikasi.map((a) => a.slug),
    luas: 'besar',
  },
  {
    id: 'perangkat',
    judul: 'Data tersimpan di perangkat',
    isi: 'Data contoh dan isianmu tersimpan di HP (di web: di peramban), jadi aplikasinya terbuka cepat tanpa server. Ketip tetap bisa mencatat transaksi saat sinyal hilang, lalu menyinkronkannya.',
    app: aplikasi.map((a) => a.slug),
    luas: 'lebar',
  },
  {
    id: 'notifikasi',
    judul: 'Notifikasi & pengingat',
    isi: 'Pengingat jadwal, kabar status, dan tagihan yang muncul di dalam aplikasi (simulasi).',
    app: ['booking', 'laundry', 'tiket', 'kos'],
  },
  {
    id: 'pengelola',
    judul: 'Layar pengelola',
    isi: 'Sisi pemilik kos, mode atasan untuk menyetujui cuti, dan mode panitia untuk check-in di gerbang.',
    app: ['kos', 'absensi', 'tiket'],
  },
  {
    id: 'bayar',
    judul: 'Bayar & bukti bayar',
    isi: 'QRIS, transfer, atau tunai (simulasi), lalu struk, nota, kuitansi, atau bukti bayar yang bisa dibuka lagi.',
    app: ['kasir', 'sekolah', 'antar', 'laundry', 'tiket', 'masjid', 'kos'],
    luas: 'lebar',
  },
  {
    id: 'sensor',
    judul: 'Kamera, lokasi, foto',
    isi: 'Pindai e-tiket di gerbang, cek radius gerai saat absen, dan lampirkan foto saat lapor kerusakan.',
    app: ['tiket', 'absensi', 'kos'],
  },
  {
    id: 'qr',
    judul: 'Kode QR',
    isi: 'Kartu member yang kodenya berganti tiap 60 detik dan e-tiket QR yang bisa dialihkan.',
    app: ['member', 'tiket'],
  },
];

const ALUR = [
  {
    j: 'Konsultasi',
    d: `Ceritakan usahamu dan siapa yang akan memakai aplikasinya lewat WhatsApp. Kita sepakati layar, fitur, harga, dan jadwalnya; ${PAKET.bayar.split(',')[0]}.`,
  },
  {
    j: 'Rancangan',
    d: 'Susunan layar dan alur tiap pengguna dirancang lebih dulu, mengikuti cara kerja usahamu.',
  },
  {
    j: 'Pembuatan & uji',
    d: `Aplikasi dibangun dengan ${PAKET.teknologi}, satu kode untuk Android, iOS, dan web, lalu diuji sebelum diserahkan.`,
  },
  {
    j: 'Serah file + kode',
    d: 'Setelah pelunasan, kamu menerima file aplikasi dan kode sumbernya. Rilis ke Play Store dan App Store kamu urus dengan akun developer milikmu.',
  },
];

const TANYA = [
  {
    q: 'Berapa biaya membuat aplikasi mobile seperti ini?',
    a: `Paket ${PAKET.nama}: ${PAKET.mulai} – ${PAKET.sampai}, dikerjakan ${PAKET.waktu}. Posisi harga di rentang itu mengikuti cakupan aplikasinya dan disepakati sebelum pengerjaan dimulai; invoice dikirim sebelum pembayaran.`,
  },
  {
    q: 'Apakah dibantu rilis ke Play Store?',
    a: 'Tidak. PintuWeb menyerahkan file aplikasi beserta kode sumbernya. Rilis ke Google Play Store dan Apple App Store diurus sendiri oleh klien dengan akun developer milik klien, jadi aplikasinya terdaftar atas nama usahamu sendiri.',
  },
  {
    q: 'Apa yang saya terima setelah aplikasi selesai?',
    a: 'File aplikasi dan kode sumbernya. Dengan kode sumber di tanganmu, aplikasinya bisa dikembangkan lagi kapan saja.',
  },
  {
    q: 'Apakah satu aplikasi bisa untuk Android dan iOS sekaligus?',
    a: `Bisa. Aplikasinya dibuat dengan ${PAKET.teknologi}: satu kode untuk Android, iOS, dan web. ${NAMA_JUMLAH} demo di halaman ini adalah versi web dari kode yang sama.`,
  },
  {
    q: 'Bagaimana cara bayarnya?',
    a: `${PAKET.bayar}. Pembayaran lewat ${METODE_BAYAR.slice(0, -1).join(', ')}, atau ${METODE_BAYAR.at(-1)}; nomor rekening atau alamat dompet tertulis di invoice.`,
  },
  {
    q: 'Apakah data di demo ini sungguhan?',
    a: 'Tidak. Semua usaha, nama, dan angka di demo rekaan, dan pembayarannya simulasi. Data contoh serta isianmu hanya tersimpan di perangkatmu sendiri.',
  },
  {
    q: 'Bisakah demonya dicoba di HP?',
    a: 'Bisa. Buka tautan demonya di peramban HP, aplikasinya tampil layar penuh. Di layar lebar, tiap demo tampil dalam bingkai ponsel dengan kode QR untuk dibuka di HP.',
  },
  {
    q: 'Apakah aplikasi saya butuh server?',
    a: 'Demo di sini berjalan tanpa server karena datanya disimpan di perangkat. Kalau aplikasimu perlu data bersama di banyak HP, misalnya pemilik dan penghuni melihat tagihan yang sama, kebutuhan itu dibahas saat konsultasi dan biayanya dicantumkan di penawaran.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function GlyphRak({ className = '' }) {
  // kisi ikon 2×2: tiga petak dan satu lingkaran
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="7.4" height="7.4" rx="2.3" fill="currentColor" />
      <circle cx="16.8" cy="7.2" r="3.7" fill="currentColor" />
      <rect x="3.5" y="13.1" width="7.4" height="7.4" rx="2.3" fill="currentColor" />
      <rect x="13.1" y="13.1" width="7.4" height="7.4" rx="2.3" fill="currentColor" />
    </svg>
  );
}

function Logo({ gelap = false }) {
  return (
    <>
      <span className="ikon grid h-9 w-9 shrink-0 place-items-center bg-limau text-tinta" aria-hidden="true">
        <GlyphRak className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.02rem] font-bold tracking-tight">PintuWeb</span>{' '}
        <span className={`mt-1 text-[10px] font-bold uppercase tracking-[0.16em] ${gelap ? 'text-limau' : 'text-tinta-3'}`}>Aplikasi Mobile</span>
      </span>
    </>
  );
}

function Cek() {
  return (
    <svg viewBox="0 0 16 16" className="mt-[0.3rem] h-3.5 w-3.5 shrink-0" aria-hidden="true" focusable="false">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Ikon({ a, className = '', sizes = '64px' }) {
  return (
    <span className={`ikon ${className}`} style={warna(a)} aria-hidden="true">
      <Image src={a.ikon} alt="" fill sizes={sizes} className="object-cover" />
    </span>
  );
}

// Layar beranda: enam ikon di kisi, empat di dok (seperti layar HP sungguhan). Ikon menaut ke kartunya.
const DOK = ['kasir', 'member', 'tiket', 'kos'];
const DI_KISI = aplikasi.filter((a) => !DOK.includes(a.slug));
const DI_DOK = DOK.map(bySlug);

/** Layar beranda ponsel di pahlawan: widget + kisi ikon + dok berisi kesepuluh aplikasi. */
function LayarBeranda() {
  return (
    <div className="hp">
      <div className="hp-layar wallpaper">
        <span className="hp-pulau" aria-hidden="true" />
        <div className="flex h-full flex-col px-[7%] pb-4 pt-[16%]">
          <div className="widget-kaca rounded-[1.35rem] p-4">
            <p className="flex items-center gap-1.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-limau">
              <GlyphRak className="h-3.5 w-3.5" /> Rak PintuWeb
            </p>
            <div className="mt-2 flex items-end justify-between gap-3">
              <p className="leading-none">
                <span className="font-display text-[2.9rem] font-bold tracking-tight">{JUMLAH}</span>
                <span className="mt-1 block text-[0.78rem] font-medium text-white/85">aplikasi demo</span>
              </p>
              <ul className="space-y-1 text-right text-[0.7rem] font-semibold text-white/85">
                {JENIS.map((j) => (
                  <li key={j.id}>{j.label} <span className="font-display text-white">{jumlahJenis(j.id)}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-5 grid grid-cols-4 gap-x-[6%] gap-y-3.5" aria-label="Ikon aplikasi di layar beranda">
            {DI_KISI.map((a) => (
              <li key={a.slug}>
                <a href={`#${a.slug}`} className="ikon-hp flex flex-col items-center gap-1.5 rounded-xl text-center">
                  <Ikon a={a} className="aspect-square w-full" sizes="(min-width: 1024px) 60px, 52px" />
                  <span className="block w-full truncate text-[0.64rem] font-semibold leading-tight text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.6)]">{a.nama}</span>
                  <span className="sr-only">, {a.kategori}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-auto text-center text-[0.66rem] font-medium text-white/80">Android · iOS · web</p>
          <ul className="widget-kaca mt-2.5 grid grid-cols-4 gap-x-[6%] rounded-[1.6rem] p-[5%]" aria-label="Ikon aplikasi di dok">
            {DI_DOK.map((a) => (
              <li key={a.slug}>
                <a href={`#${a.slug}`} className="ikon-hp block rounded-xl">
                  <Ikon a={a} className="aspect-square w-full" sizes="(min-width: 1024px) 60px, 52px" />
                  <span className="sr-only">{a.nama}, {a.kategori}</span>
                </a>
              </li>
            ))}
          </ul>
          <span className="mx-auto mt-2.5 block h-1 w-1/3 rounded-full bg-white/70" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function KartuAplikasi({ a, i }) {
  const lebarPonsel = a.besar ? 'clamp(5.4rem, 27cqi, 11rem)' : 'clamp(6rem, 34cqi, 9rem)';
  const sizes = a.besar ? '(min-width: 1024px) 176px, 100px' : '(min-width: 1024px) 144px, 128px';
  return (
    <li id={a.slug} data-jenis={a.jenis} className={`kartu scroll-mt-24 ${a.besar ? 'besar' : ''}`} style={warna(a)}>
      <article aria-labelledby={`nama-${a.slug}`} className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-garis bg-kertas shadow-[0_24px_50px_-36px_rgb(11_13_18/0.5)]">
        <div className="panggung flex items-end justify-center gap-[3.5cqi] px-4 pb-3 pt-7">
          {a.layar.map(([src, label]) => (
            <span key={src} className="ponsel" style={{ width: lebarPonsel }}>
              <span className="ponsel-layar">
                <Image src={src} alt={`${a.nama}, layar ${label}`} fill sizes={sizes} className="object-cover object-top" />
              </span>
            </span>
          ))}
          <span className="rak-kaca" aria-hidden="true" />
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
          <div className="flex items-center gap-3">
            <Ikon a={a} className="h-12 w-12 shrink-0" sizes="48px" />
            <div className="min-w-0">
              <h3 id={`nama-${a.slug}`} className="text-[1.45rem]">{a.nama}</h3>
              <p className="mt-0.5 text-sm font-medium text-tinta-3">{a.kategori}</p>
            </div>
            <p className="ms-auto shrink-0 self-start text-right text-[11px] font-bold uppercase leading-snug tracking-[0.12em] text-tinta-3">
              <span aria-hidden="true">No. {String(i + 1).padStart(2, '0')}</span><br />{JENIS.find((j) => j.id === a.jenis).label}
            </p>
          </div>

          {/* kartu besar: [pengantar | fitur] lalu [coba | fitur] di wadah lebar; kartu biasa: satu kolom */}
          <div className={`mt-4 flex-1 ${a.besar ? 'grid content-start gap-x-8 gap-y-5 @2xl:grid-cols-2' : 'flex flex-col gap-4'}`}>
            <div>
              <p className="font-display text-[1.12rem] font-semibold leading-snug">{a.tagline}</p>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-tinta-3">{a.latar}</p>
            </div>
            <ul className={`space-y-2.5 ${a.besar ? '@2xl:row-span-2' : ''}`}>
              {a.fitur.map(([j, d]) => (
                <li key={j} className="flex gap-2.5 text-[0.92rem] leading-snug text-tinta-2">
                  <span className="mt-[0.42rem] h-2 w-2 shrink-0 rounded-[3px] bg-(--m-bg)" aria-hidden="true" />
                  <span><strong className="font-semibold text-tinta">{j}</strong>: {d}</span>
                </li>
              ))}
            </ul>
            <div className={a.besar ? '' : 'mt-auto pt-1'}>
              <p id={`coba-${a.slug}`} className="text-sm font-semibold text-tinta-3">Coba langsung</p>
              <ul aria-labelledby={`coba-${a.slug}`} className="mt-2 flex flex-wrap gap-2">
                {a.halaman.map(([path, label]) => (
                  <li key={path}>
                    <a href={`${a.url}${path}`} target="_blank" rel="noopener noreferrer" className="chip">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`mt-5 grid gap-2.5 ${a.besar ? 'grid-cols-2 @2xl:flex @2xl:flex-wrap' : 'grid-cols-2'}`}>
            <a href={a.url} target="_blank" rel="noopener noreferrer" className="tombol tombol-merek px-3">Buka {a.nama}</a>
            <a href={wa(`Halo PintuWeb, saya tertarik aplikasi mobile seperti ${a.nama} (${a.kategori.toLowerCase()}). Boleh minta info?`)} target="_blank" rel="noopener noreferrer" className="tombol tombol-garis px-3">Pesan yang mirip</a>
          </div>
        </div>
      </article>
    </li>
  );
}

const LUAS = {
  besar: 'sm:col-span-2 lg:row-span-2',
  lebar: 'sm:col-span-2',
};

function Widget({ f }) {
  const daftar = f.app.map(bySlug);
  const semua = daftar.length === JUMLAH;
  return (
    <li className={`${LUAS[f.luas] || ''}`}>
      <article aria-labelledby={`fitur-${f.id}`} className={`widget widget-kaca flex h-full flex-col ${f.luas === 'besar' ? 'lg:p-8' : ''}`}>
        <p className="widget-kepala text-limau">
          <span aria-hidden="true">{String(f.app.length).padStart(2, '0')}</span>
          <span className="text-redup">{semua ? `dari ${JUMLAH} aplikasi` : 'aplikasi'}</span>
        </p>
        <h3 id={`fitur-${f.id}`} className={`mt-3 text-white ${f.luas === 'besar' ? 'text-[1.9rem] sm:text-[2.6rem]' : 'text-[1.3rem]'}`}>{f.judul}</h3>
        <p className={`mt-2 leading-relaxed text-redup ${f.luas === 'besar' ? 'max-w-md text-[1rem]' : 'text-[0.92rem]'}`}>{f.isi}</p>
        {f.id === 'platform' && (
          <div className="mt-7">
            {/* bagan: satu folder kode bercabang ke tiga hasil */}
            <div className="mx-auto w-fit rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-center">
              <p className="font-mono text-[0.8rem] text-limau">src/app/</p>
              <p className="mt-0.5 text-sm font-semibold text-white">satu kode {PAKET.teknologi}</p>
            </div>
            <div className="cabang mx-auto h-8 w-2/3" aria-hidden="true" />
            <ul className="grid grid-cols-3 gap-2.5" aria-label="Hasilnya">
              {PAKET.platform.map((p, i) => (
                <li key={p} className="rounded-2xl border border-white/10 bg-white/6 px-2 py-4 text-center">
                  <span className="block font-display text-lg font-semibold text-white sm:text-xl">{p}</span>
                  <span className="mt-0.5 block text-xs text-redup">{['untuk HP Android', 'untuk iPhone', 'demo di galeri ini'][i]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-auto pt-5">
          {semua ? (
            <p className="text-sm text-redup">Ada di semua demo.</p>
          ) : (
            <ul className="flex flex-wrap gap-1.5" aria-label={`Aplikasi dengan ${f.judul.toLowerCase()}`}>
              {daftar.map((a) => (
                <li key={a.slug}>
                  <a href={`#${a.slug}`} className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white/8 py-1 pe-3 ps-1 text-sm font-semibold text-white transition hover:bg-white/16">
                    <Ikon a={a} className="h-7 w-7 shrink-0 rounded-full" sizes="28px" />
                    {a.nama}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {semua && (
            <ul className={`mt-3 flex flex-wrap ${f.luas === 'besar' ? 'gap-2.5' : 'gap-1.5'}`} aria-hidden="true">
              {daftar.map((a) => <li key={a.slug}><Ikon a={a} className={f.luas === 'besar' ? 'h-11 w-11' : 'h-7 w-7'} sizes={f.luas === 'besar' ? '44px' : '28px'} /></li>)}
            </ul>
          )}
        </div>
      </article>
    </li>
  );
}

export default function PortalMobile() {
  return (
    <div id="atas" className="min-h-screen overflow-x-clip">
      <a href="#konten" className="lewati">Lewati ke konten</a>

      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-tinta text-xs text-layar">
        <ol className="wadah flex items-center gap-2 py-1.5">
          <li><a href={PINTUWEB} className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Aplikasi Mobile</li>
        </ol>
      </nav>

      <header className="sticky top-0 z-40 border-b border-garis bg-layar/85 backdrop-blur-xl">
        <div className="wadah flex items-center justify-between gap-3 py-2.5">
          <a href="#atas" className="flex items-center gap-2.5 rounded-lg">
            <Logo />
            <span className="sr-only">, ke atas halaman</span>
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 text-sm font-semibold text-tinta-2 md:flex">
            <a href="#aplikasi" className="transition hover:text-tinta">{NAMA_JUMLAH} aplikasi</a>
            <a href="#fitur" className="transition hover:text-tinta">Fitur</a>
            <a href="#alur" className="transition hover:text-tinta">Alur kerja</a>
            <a href="#harga" className="transition hover:text-tinta">Harga</a>
            <a href="#tanya" className="transition hover:text-tinta">Tanya jawab</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="tombol tombol-tinta min-h-10 shrink-0 px-4 text-sm">Pesan aplikasi</a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Pahlawan: layar beranda berisi sepuluh ikon */}
        <section aria-labelledby="judul-utama" className="relative">
          <div className="wadah grid gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-20 lg:pt-14">
            <div className="lg:col-span-7">
              <p className="label">Galeri aplikasi mobile · {JUMLAH} demo</p>
              <h1 id="judul-utama" className="mt-4 text-[2.5rem] sm:text-[3.6rem] lg:text-[4.1rem]">
                {NAMA_JUMLAH} aplikasi Android &amp; iOS yang bisa kamu coba sekarang.
              </h1>
              <p className="mt-5 max-w-xl text-[1.06rem] leading-relaxed text-tinta-2">
                Kasir warung, booking pangkas rambut, aplikasi orang tua murid, sampai jadwal salat masjid. Tiap aplikasi dibuat dengan {PAKET.teknologi}: satu kode untuk Android, iOS, dan web. Usahanya fiktif, datanya tersimpan di perangkatmu, jadi silakan coba sepuasnya.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#aplikasi" className="tombol tombol-tinta">Buka rak aplikasi</a>
                <a href="#harga" className="tombol tombol-garis">Harga &amp; alur kerja</a>
              </div>
              <dl className="mt-8 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-garis bg-garis text-sm">
                <div className="bg-kaca px-3.5 py-3"><dt className="text-tinta-3">Mulai</dt><dd className="mt-0.5 font-display text-[1.05rem] font-bold">{PAKET.mulai}</dd></div>
                <div className="bg-kaca px-3.5 py-3"><dt className="text-tinta-3">Pengerjaan</dt><dd className="mt-0.5 font-display text-[1.05rem] font-bold">{PAKET.waktu}</dd></div>
                <div className="bg-kaca px-3.5 py-3"><dt className="text-tinta-3">Diserahkan</dt><dd className="mt-0.5 font-display text-[1.05rem] font-bold">File + kode</dd></div>
              </dl>
            </div>
            <div className="lg:col-span-5">
              <LayarBeranda />
            </div>
          </div>
        </section>

        {/* Rak: satu kartu per aplikasi */}
        <section id="aplikasi" aria-labelledby="judul-rak" className="scroll-mt-16 border-t border-garis py-14 sm:py-20">
          <div className="wadah">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="label">Rak aplikasi</p>
                <h2 id="judul-rak" className="mt-3 text-[2.1rem] sm:text-5xl">{NAMA_JUMLAH} aplikasi, {NAMA_JUMLAH.toLowerCase()} pekerjaan yang dipermudah</h2>
                <p className="mt-4 max-w-2xl text-tinta-2">
                  Tiap kartu memuat layar asli aplikasinya. Ketuk <strong className="font-semibold text-tinta">Buka</strong> untuk mencobanya di tab baru, atau langsung ke salah satu layarnya. Semua usaha di sini fiktif.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-5">
                <Saring pilihan={SARINGAN.map(({ id, label, jumlah }) => ({ id, label, jumlah }))} />
              </div>
            </div>

            <ol id="rak" className="mt-10 grid grid-flow-row-dense gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {aplikasi.map((a, i) => <KartuAplikasi key={a.slug} a={a} i={i} />)}
            </ol>
          </div>
        </section>

        {/* Fitur: widget bento di atas wallpaper */}
        <section id="fitur" aria-labelledby="judul-fitur" className="gelap wallpaper scroll-mt-16 py-14 text-white sm:py-20">
          <div className="wadah">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="label">Fitur</p>
                <h2 id="judul-fitur" className="mt-3 text-[2.1rem] sm:text-5xl">Yang sudah bisa kamu sentuh di {NAMA_JUMLAH.toLowerCase()} demo</h2>
              </div>
              <p className="text-redup lg:col-span-5">
                Tiap widget menyebut aplikasi mana yang memilikinya. Ketuk namanya untuk melompat ke kartunya, lalu coba sendiri.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {FITUR.map((f) => <Widget key={f.id} f={f} />)}
            </ul>
          </div>
        </section>

        {/* Alur kerja: layar kunci dengan tumpukan notifikasi */}
        <section id="alur" aria-labelledby="judul-alur" className="scroll-mt-16 py-14 sm:py-20">
          <div className="wadah grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-5">
              <p className="label">Alur kerja</p>
              <h2 id="judul-alur" className="mt-3 text-[2.1rem] sm:text-5xl">Dari obrolan WhatsApp sampai file aplikasi di tanganmu</h2>
              <p className="mt-4 text-tinta-2">
                Empat langkah, dikerjakan {PAKET.waktu}. Kamu memegang kode sumbernya, dan aplikasinya dirilis dengan akun developer milikmu sendiri.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="tombol tombol-tinta mt-7">Mulai konsultasi</a>
            </div>
            <div className="lg:col-span-7">
              <div className="wallpaper gelap relative overflow-hidden rounded-[2.25rem] px-4 pb-6 pt-8 text-white sm:rounded-[2.75rem] sm:px-8 sm:pb-8 sm:pt-10">
                <p className="text-center text-sm font-semibold text-white/85">Lama pengerjaan</p>
                <p className="jam-kunci mt-2 text-center text-[5.6rem] sm:text-[8rem]">{PAKET.waktu.split(' ')[0]}</p>
                <p className="mt-2 text-center font-display text-lg font-semibold text-white/90">hari kerja</p>
                <ol className="mt-8 space-y-2.5">
                  {ALUR.map((a, i) => (
                    <li key={a.j} className="notif">
                      <div className="flex items-center gap-2.5">
                        <span className="ikon grid h-6 w-6 shrink-0 place-items-center rounded-[0.45rem] bg-limau text-tinta" aria-hidden="true"><GlyphRak className="h-3.5 w-3.5" /></span>
                        <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-tinta-3">PintuWeb</p>
                        <p className="ms-auto text-[0.78rem] font-medium text-tinta-3">Langkah {i + 1} dari {ALUR.length}</p>
                      </div>
                      <h3 className="mt-2 text-[1.12rem]">{a.j}</h3>
                      <p className="mt-1 text-[0.93rem] leading-snug text-tinta-2">{a.d}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Paket: lembar info ala toko aplikasi */}
        <section id="harga" aria-labelledby="judul-harga" className="scroll-mt-16 border-t border-garis py-14 sm:py-20">
          <div className="wadah">
            <div className="max-w-2xl">
              <p className="label">Paket &amp; harga</p>
              <h2 id="judul-harga" className="mt-3 text-[2.1rem] sm:text-5xl">Satu paket, dari aplikasi sederhana sampai yang lengkap</h2>
              <p className="mt-4 text-tinta-2">Harga berlaku per {HARGA_PER}. Posisi harga di rentang itu mengikuti cakupan aplikasinya dan disepakati sebelum pengerjaan dimulai.</p>
            </div>

            <article aria-labelledby="judul-paket" className="mt-10 overflow-hidden rounded-[2rem] border border-garis bg-kertas shadow-[0_30px_60px_-44px_rgb(11_13_18/0.55)]">
              <div className="flex flex-wrap items-center gap-5 p-5 sm:p-8">
                <span className="ikon grid h-20 w-20 shrink-0 place-items-center bg-limau text-tinta sm:h-24 sm:w-24" aria-hidden="true"><GlyphRak className="h-11 w-11 sm:h-12 sm:w-12" /></span>
                <div className="min-w-0 flex-1 basis-56">
                  <h3 id="judul-paket" className="text-[1.6rem] sm:text-[2rem]">{PAKET.nama}</h3>
                  <p className="mt-1 text-tinta-3">PintuWeb · dibuat dengan {PAKET.teknologi}</p>
                </div>
                <a href={wa(`Halo PintuWeb, saya tertarik paket "${PAKET.nama}". Boleh minta info lebih lanjut?`)} target="_blank" rel="noopener noreferrer" className="tombol tombol-limau w-full sm:w-auto">Tanya paket ini</a>
              </div>

              <dl className="strip-info border-y border-garis bg-kaca py-0 md:py-5">
                <div>
                  <dt className="label tracking-[0.1em]">Harga</dt>
                  <dd className="mt-1.5 font-display text-[1.35rem] font-bold leading-tight sm:text-[1.6rem]">{PAKET.mulai}</dd>
                  <dd className="text-sm text-tinta-3">sampai {PAKET.sampai}</dd>
                </div>
                <div>
                  <dt className="label tracking-[0.1em]">Pengerjaan</dt>
                  <dd className="mt-1.5 font-display text-[1.35rem] font-bold leading-tight sm:text-[1.6rem]">{PAKET.waktu.split(' ')[0]}</dd>
                  <dd className="text-sm text-tinta-3">hari kerja</dd>
                </div>
                <div>
                  <dt className="label tracking-[0.1em]">Platform</dt>
                  <dd className="mt-1.5 font-display text-[1.35rem] font-bold leading-tight sm:text-[1.6rem]">{PAKET.platform.length}</dd>
                  <dd className="text-sm text-tinta-3">{PAKET.platform.join(' · ')}</dd>
                </div>
                <div>
                  <dt className="label tracking-[0.1em]">Pembayaran</dt>
                  <dd className="mt-1.5 font-display text-[1.35rem] font-bold leading-tight sm:text-[1.6rem]">DP 50%</dd>
                  <dd className="text-sm text-tinta-3">lunas setelah jadi</dd>
                </div>
              </dl>

              <div className="grid gap-8 p-5 sm:p-8 md:grid-cols-3">
                <div>
                  <h4 className="text-lg">Yang kamu terima</h4>
                  <ul className="mt-3 space-y-2 text-[0.95rem] leading-snug text-tinta-2">
                    {PAKET.diserahkan.map((d) => <li key={d} className="flex gap-2.5"><span className="text-limau-tua"><Cek /></span><span>{d}</span></li>)}
                    <li className="flex gap-2.5"><span className="text-limau-tua"><Cek /></span><span>Satu kode untuk Android, iOS, dan web</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg">Yang kamu urus sendiri</h4>
                  <ul className="mt-3 space-y-2 text-[0.95rem] leading-snug text-tinta-2">
                    <li className="flex gap-2.5"><span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-tinta-3" /><span>Akun developer Google Play dan Apple atas nama usahamu</span></li>
                    <li className="flex gap-2.5"><span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-tinta-3" /><span>Rilis aplikasinya ke Play Store dan App Store</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg">Cara bayar</h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Metode pembayaran">
                    {METODE_BAYAR.map((m) => <li key={m} className="rounded-full border border-garis bg-kaca px-3 py-1 text-sm font-semibold text-tinta-2">{m}</li>)}
                  </ul>
                  <p className="mt-3 text-sm leading-relaxed text-tinta-3">{PAKET.bayar}. Nomor rekening atau alamat dompet tertulis di invoice.</p>
                </div>
              </div>
            </article>
            <p className="mt-6 text-sm text-tinta-3">
              Paket lain ada di <a href={`${PINTUWEB}/paket`} className="font-semibold text-tinta underline underline-offset-4">halaman Paket PintuWeb</a>, dan langkah pembayarannya di <a href={`${PINTUWEB}/pembayaran`} className="font-semibold text-tinta underline underline-offset-4">Cara Bayar</a>.
            </p>
          </div>
        </section>

        {/* Tanya jawab */}
        <section id="tanya" aria-labelledby="judul-tanya" className="scroll-mt-16 border-t border-garis bg-kertas py-14 sm:py-20">
          <div className="wadah max-w-3xl">
            <p className="label">Tanya jawab</p>
            <h2 id="judul-tanya" className="mt-3 text-[2.1rem] sm:text-5xl">Sebelum aplikasimu dibuat</h2>
            <div className="mt-8 divide-y divide-garis border-y border-garis">
              {TANYA.map((t, i) => (
                <details key={t.q} name="faq-mobile" open={i === 0} className="tanya group">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-display text-[1.05rem] font-semibold leading-snug">
                    {t.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-garis-tua text-lg leading-none transition group-open:rotate-45 group-open:border-tinta group-open:bg-tinta group-open:text-white" aria-hidden="true">+</span>
                  </summary>
                  <p className="pb-5 text-[0.96rem] leading-relaxed text-tinta-2">{t.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Ajakan */}
        <section aria-labelledby="judul-ajakan" className="gelap wallpaper text-white">
          <div className="wadah py-16 text-center sm:py-24">
            <ul className="mx-auto flex max-w-md flex-wrap justify-center gap-2.5" aria-hidden="true">
              {aplikasi.map((a) => <li key={a.slug}><Ikon a={a} className="h-11 w-11" sizes="44px" /></li>)}
              <li><span className="ikon grid h-11 w-11 place-items-center bg-limau font-display text-2xl font-bold text-tinta">+</span></li>
            </ul>
            <h2 id="judul-ajakan" className="mx-auto mt-8 max-w-2xl text-[2.1rem] sm:text-5xl">Aplikasi usahamu berikutnya di rak ini</h2>
            <p className="mx-auto mt-4 max-w-xl text-redup">
              Ceritakan siapa yang akan memakai aplikasinya dan pekerjaan apa yang ingin dipermudah. Kami bantu menentukan layarnya, lalu aplikasimu dikerjakan {PAKET.waktu}.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="tombol tombol-limau mt-8">Chat WhatsApp {WA_DISPLAY}</a>
            <p className="mt-3 text-sm text-redup">Jam kerja {JAM_KERJA}</p>
          </div>
        </section>
      </main>

      <footer className="gelap bg-malam pb-6 pt-10 text-redup">
        <div className="wadah grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2.5 text-white"><Logo gelap /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{NAMA_JUMLAH} demo aplikasi Android &amp; iOS buatan PintuWeb, dari kasir warung sampai aplikasi kos.</p>
          </div>
          <nav aria-labelledby="kaki-lanjut" className="text-sm">
            <p id="kaki-lanjut" className="label">Lanjut di PintuWeb</p>
            <ul className="mt-3 space-y-1">
              {LANJUT.map((l) => (
                <li key={l.href}><a href={l.href} className="inline-block py-1 transition hover:text-white">{l.label}</a></li>
              ))}
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block py-1 transition hover:text-white">WhatsApp <span className="whitespace-nowrap">{WA_DISPLAY}</span></a></li>
            </ul>
          </nav>
          <nav aria-labelledby="kaki-galeri" className="text-sm">
            <p id="kaki-galeri" className="label">Galeri lain</p>
            <ul className="mt-3 space-y-1">
              {GALERI_LAIN.map((g) => (
                <li key={g.path}><a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 transition hover:text-white">{g.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="wadah mt-10 border-t border-malam-garis pt-4 text-xs">© 2026 PintuWeb. Semua usaha di demo ini fiktif. Berlokasi di Tulungagung.</p>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </div>
  );
}
