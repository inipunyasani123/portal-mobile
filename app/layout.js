import './globals.css';
import { Funnel_Display, Funnel_Sans } from 'next/font/google';
import { aplikasi } from './components/aplikasi-data';
import { URL_PORTAL, PINTUWEB } from './components/pintuweb';

// Funnel Display untuk judul, Funnel Sans untuk teks (keduanya OFL, dari Google Fonts lewat next/font).
const display = Funnel_Display({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-funnel-display', display: 'swap' });
const sans = Funnel_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-funnel-sans', display: 'swap' });

// Merek di hasil pencarian & pratinjau tautan = PintuWeb. Jumlah demo dihitung dari data, bukan ditulis tangan.
const TITLE = `Contoh Aplikasi Mobile: ${aplikasi.length} Demo Siap Coba | PintuWeb`;
const DESCRIPTION = 'Sepuluh demo aplikasi Android & iOS: kasir, booking salon, orang tua murid, member kafe, pesan-antar, laundry, absensi, tiket, masjid, dan kos.';

// CollectionPage + daftar demonya (ItemList) + jejak. Data dari aplikasi-data, jadi ikut bertambah sendiri.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL_PORTAL,
  inLanguage: 'id-ID',
  isPartOf: { '@type': 'WebSite', name: 'PintuWeb', url: PINTUWEB },
  publisher: { '@type': 'Organization', name: 'PintuWeb', url: PINTUWEB },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: aplikasi.length,
    itemListElement: aplikasi.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: `${a.nama} — ${a.kategori}`, url: a.url })),
  },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'PintuWeb', item: PINTUWEB }, { '@type': 'ListItem', position: 2, name: 'Aplikasi Mobile', item: URL_PORTAL }] },
};

export const metadata = {
  metadataBase: new URL(URL_PORTAL),
  title: { default: TITLE, template: '%s | PintuWeb' },
  description: DESCRIPTION,
  applicationName: 'PintuWeb',
  keywords: ['contoh aplikasi mobile', 'demo aplikasi android', 'jasa pembuatan aplikasi android', 'jasa pembuatan aplikasi ios', 'aplikasi react native', 'aplikasi untuk umkm'],
  authors: [{ name: 'PintuWeb', url: PINTUWEB }],
  creator: 'PintuWeb',
  publisher: 'PintuWeb',
  alternates: { canonical: URL_PORTAL },
  openGraph: { type: 'website', locale: 'id_ID', url: URL_PORTAL, siteName: 'PintuWeb', title: TITLE, description: DESCRIPTION, images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Layar beranda ponsel berisi ikon sepuluh aplikasi demo PintuWeb' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export const viewport = { themeColor: '#eceef2', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
