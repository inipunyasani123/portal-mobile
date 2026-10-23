import Link from 'next/link';
import { JUMLAH } from './components/aplikasi-data';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main id="konten" className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <div className="hp w-[13rem]" aria-hidden="true">
        <div className="hp-layar wallpaper aspect-[390/600]">
          <span className="hp-pulau" />
          <div className="grid h-full place-items-center content-center gap-3 px-6">
            <span className="ikon grid h-16 w-16 place-items-center border-2 border-dashed border-white/40 bg-transparent font-display text-3xl font-bold text-white/80">?</span>
            <p className="font-display text-5xl font-bold leading-none text-white">404</p>
            <p className="text-xs font-semibold text-white/80">Aplikasi tidak terpasang</p>
          </div>
        </div>
      </div>
      <h1 className="mt-10 text-4xl sm:text-5xl">Layar ini kosong</h1>
      <p className="mt-4 max-w-md text-tinta-2">Halaman yang kamu cari tidak ada di rak ini. {JUMLAH} aplikasi demo menunggu di layar beranda.</p>
      <Link href="/" className="tombol tombol-tinta mt-8">Kembali ke rak aplikasi</Link>
    </main>
  );
}
