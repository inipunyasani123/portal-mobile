'use client';

import { useEffect, useState } from 'react';

/**
 * Bilah aksi lengket di bawah layar ponsel (< 768 px): muncul setelah pahlawan terlewat, hilang saat footer
 * terlihat. Saat tersembunyi ia tidak bisa difokus (visibility: hidden).
 */
export default function BilahAksi({ hrefWa }) {
  const [lewat, setLewat] = useState(false);
  const [footer, setFooter] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('pahlawan');
    const kaki = document.getElementById('kaki');
    if (!hero || !kaki) return;
    const a = new IntersectionObserver(([e]) => setLewat(!e.isIntersecting && e.boundingClientRect.bottom < 0), { threshold: 0 });
    const b = new IntersectionObserver(([e]) => setFooter(e.isIntersecting), { threshold: 0 });
    a.observe(hero); b.observe(kaki);
    return () => { a.disconnect(); b.disconnect(); };
  }, []);

  const tampil = lewat && !footer;
  return (
    <div className={`bilah-aksi md:hidden ${tampil ? 'tampil' : ''}`} role="region" aria-label="Aksi cepat">
      <a href="#aplikasi" className="tombol tombol-garis min-h-11 flex-1 px-3 text-[0.95rem]">Lihat demo</a>
      <a href={hrefWa} target="_blank" rel="noopener noreferrer" className="tombol tombol-limau min-h-11 flex-[1.35] px-3 text-[0.95rem]">Pesan via WhatsApp</a>
    </div>
  );
}
