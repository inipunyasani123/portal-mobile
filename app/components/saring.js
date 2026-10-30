'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/** Glif kecil per kelompok usaha, digambar sendiri (garis, ujung bulat, mengikuti gaya ikon portal). */
const GLIF = {
  semua: <><rect x="4" y="4" width="6.5" height="6.5" rx="2" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="2" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="2" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2" /></>,
  toko: <><path d="M4 9.5 5.6 4.5h12.8L20 9.5" /><path d="M4.5 9.5v10h15v-10" /><path d="M4 9.5c0 1.7 1.3 2.7 2.7 2.7s2.6-1 2.6-2.7c0 1.7 1.3 2.7 2.7 2.7s2.6-1 2.6-2.7c0 1.7 1.2 2.7 2.7 2.7s2.7-1 2.7-2.7" /></>,
  jasa: <><circle cx="7" cy="17" r="2.6" /><circle cx="7" cy="7" r="2.6" /><path d="M9 8.7 20 17.5M9 15.3 20 6.5" /></>,
  pendidikan: <><path d="M12 4 2.5 9 12 14l9.5-5z" /><path d="M6.5 11.6v4.4c0 1.3 2.5 2.8 5.5 2.8s5.5-1.5 5.5-2.8v-4.4" /></>,
  kantor: <><rect x="5" y="3.5" width="9" height="17" rx="1.5" /><path d="M14 9.5h5v11h-5M8.5 7.5h2M8.5 11h2M8.5 14.5h2" /></>,
  acara: <><path d="M3.5 8V6a1.5 1.5 0 0 1 1.5-1.5h14A1.5 1.5 0 0 1 20.5 6v2a2.2 2.2 0 0 0 0 4.4V15a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 15v-2.6A2.2 2.2 0 0 0 3.5 8z" transform="translate(0 1.75)" /><path d="M14.5 8v8" strokeDasharray="1.8 2.4" /></>,
};

function Glif({ id }) {
  return (
    <svg viewBox="0 0 24 24" className="glif" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {GLIF[id] || GLIF.semua}
    </svg>
  );
}

const reduksi = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Saringan rak aplikasi menurut jenis usaha penggunanya. Tanpa JS semua kartu tetap tampil: komponen ini hanya
 * mengisi data-saring di <ol id="rak">, dan CSS di globals.css menyembunyikan kartu kelompok lain.
 * Tautan langsung #slug (dari strip ponsel, ikon, atau alamat): saringan kembali ke Semua bila kartunya
 * tersembunyi, halaman bergulir ke kartu itu, lalu kartu disorot sekitar dua detik.
 */
export default function Saring({ pilihan, slugs }) {
  const [aktif, setAktif] = useState('semua');
  const [diumumkan, setDiumumkan] = useState('');
  const pertama = useRef(true);
  const timer = useRef(null);

  useEffect(() => {
    const rak = document.getElementById('rak');
    if (rak) rak.dataset.saring = aktif;
    // jangan umumkan saat halaman baru dibuka
    if (pertama.current) { pertama.current = false; return; }
    const p = pilihan.find((x) => x.id === aktif);
    setDiumumkan(aktif === 'semua' ? `Menampilkan semua ${p.jumlah} aplikasi.` : `Menampilkan ${p.jumlah} aplikasi untuk ${p.label}.`);
  }, [aktif, pilihan]);

  const sorot = useCallback(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id || !slugs.includes(id)) return;
    const el = document.getElementById(id);
    if (!el || !el.closest('#rak')) return;
    const rak = document.getElementById('rak');
    if (rak && rak.dataset.saring !== 'semua') {
      rak.dataset.saring = 'semua';
      setAktif('semua');
    }
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: reduksi() ? 'auto' : 'smooth', block: 'start' });
      document.querySelectorAll('#rak > li.sorot').forEach((x) => x.classList.remove('sorot'));
      el.classList.add('sorot');
      clearTimeout(timer.current);
      timer.current = setTimeout(() => el.classList.remove('sorot'), 2200);
    });
  }, [slugs]);

  useEffect(() => {
    // setelah hidrasi: alamat yang dibuka langsung dengan #slug
    if (location.hash) sorot();
    window.addEventListener('hashchange', sorot);
    return () => { window.removeEventListener('hashchange', sorot); clearTimeout(timer.current); };
  }, [sorot]);

  const p = pilihan.find((x) => x.id === aktif);

  return (
    <div>
      <div role="group" aria-label="Saring aplikasi menurut jenis usaha" className="segmen">
        {pilihan.map((x) => (
          <button key={x.id} type="button" aria-pressed={aktif === x.id} onClick={() => setAktif(x.id)}>
            <Glif id={x.id} />
            <span>{x.label}</span><span className="jml">{x.jumlah}</span>
          </button>
        ))}
      </div>
      <p className="mt-2.5 text-sm text-tinta-3" aria-hidden="true">
        {aktif === 'semua' ? `Menampilkan semua ${p.jumlah} aplikasi` : `${p.jumlah} aplikasi untuk ${p.label}: ${p.ket}`}
      </p>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{diumumkan}</p>
    </div>
  );
}
