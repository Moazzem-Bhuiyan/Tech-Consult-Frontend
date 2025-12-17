import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navber from '@/component/shared/Navber/Navber';
import { Footer } from '@/component/shared/Footer/Footer';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'PL Tech  Website',
    template: '%s | PL Tech  Website',
  },
  description:
    ' This is a Pec Electrical Website by using this platfrom you can book electrical services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className=" absolute z-[9999] !w-full">
          <Toaster position="top-right" richColors />
          <Navber />
        </div>
        <main className="min-h-[100vh] !z-0 w-full top-0 relative">{children}</main>
        <div className="">
          <Footer />
        </div>
        <div></div>
      </body>
    </html>
  );
}
