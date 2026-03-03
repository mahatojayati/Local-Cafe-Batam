import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Local Cafe Batam',
  description: 'A cozy halal cafe offering a mix of Western and Indonesian fast food, great coffee, and a relaxing atmosphere.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-[#FAF9F6] text-[#2C2C2C] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
