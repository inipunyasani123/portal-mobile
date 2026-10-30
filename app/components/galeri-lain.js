'use client';

import { useEffect, useId, useRef, useState } from 'react';

/** Tombol "Galeri lain" di bilah jejak: membuka daftar galeri PintuWeb lainnya. Esc menutup dan mengembalikan fokus. */
export default function GaleriLain({ daftar, pintuweb }) {
  const [buka, setBuka] = useState(false);
  const wadah = useRef(null);
  const tombol = useRef(null);
  const id = useId();

  useEffect(() => {
    if (!buka) return;
    const luar = (e) => { if (wadah.current && !wadah.current.contains(e.target)) setBuka(false); };
    const tutup = (e) => { if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); } };
    document.addEventListener('pointerdown', luar);
    document.addEventListener('keydown', tutup);
    return () => { document.removeEventListener('pointerdown', luar); document.removeEventListener('keydown', tutup); };
  }, [buka]);

  return (
    <div
      ref={wadah}
      className="relative ms-auto"
      onBlur={(e) => { if (buka && !e.currentTarget.contains(e.relatedTarget)) setBuka(false); }}
    >
      <button
        ref={tombol}
        type="button"
        aria-expanded={buka}
        aria-controls={id}
        onClick={() => setBuka((b) => !b)}
        className="galeri-tombol"
      >
        Galeri lain
        <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${buka ? 'rotate-180' : ''}`} aria-hidden="true" focusable="false">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div id={id} hidden={!buka} className="galeri-panel">
        <p className="px-3 pb-1 pt-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-redup">Galeri PintuWeb lainnya</p>
        <ul>
          {daftar.map((g) => (
            <li key={g.path}>
              <a href={`${pintuweb}/${g.path}`} className="galeri-tautan">{g.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
