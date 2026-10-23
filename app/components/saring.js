'use client';

import { useEffect, useState } from 'react';

/**
 * Kontrol bersegmen untuk menyaring rak aplikasi per jenis. Tanpa JS semua kartu tetap tampil: komponen ini hanya
 * mengisi data-saring di <ol id="rak">, dan CSS di globals.css menyembunyikan kartu yang jenisnya lain.
 * Kalau pengunjung melompat ke kartu yang sedang tersembunyi (ikon di layar beranda), saringan kembali ke Semua.
 */
export default function Saring({ pilihan }) {
  const [aktif, setAktif] = useState('semua');

  useEffect(() => {
    const rak = document.getElementById('rak');
    if (rak) rak.dataset.saring = aktif;
  }, [aktif]);

  useEffect(() => {
    const cek = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      const el = id && document.getElementById(id);
      if (el && el.closest('#rak') && el.offsetParent === null) {
        setAktif('semua');
        requestAnimationFrame(() => el.scrollIntoView());
      }
    };
    window.addEventListener('hashchange', cek);
    return () => window.removeEventListener('hashchange', cek);
  }, []);

  const terpilih = pilihan.find((p) => p.id === aktif);

  return (
    <div>
      <div role="group" aria-label="Saring aplikasi menurut jenis" className="segmen">
        {pilihan.map((p) => (
          <button key={p.id} type="button" aria-pressed={aktif === p.id} onClick={() => setAktif(p.id)}>
            {p.label}<span className="jml">{p.jumlah}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {aktif === 'semua' ? '' : `Menampilkan ${terpilih.jumlah} aplikasi jenis ${terpilih.label}.`}
      </p>
    </div>
  );
}
