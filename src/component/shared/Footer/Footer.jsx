'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Twitter, Facebook, Instagram, Send } from 'lucide-react';
import logo from '@/assets/Logo/logo.png';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="w-[90%] !mx-auto !px-6 !py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {/* Company Info */}
          <div className="!space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src={logo} alt="logo" className="h-12 w-12" />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  <span className="text-[#4A9FD8]">PL</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400">Tech</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              PL Tech is your trusted partner for all database services, delivering quality and
              reliability.
            </p>
            <div className="flex gap-3">
              <Button
                size="icon"
                className="h-10 w-10 rounded-full bg-gradient-to-r from-[#156A7E] to-[#26C0E4] hover:bg-[#FF6B35]/90"
                asChild
              >
                <Link href="https://twitter.com" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="icon"
                className="h-10 w-10 rounded-full bg-gradient-to-r from-[#156A7E] to-[#26C0E4] hover:bg-[#FF6B35]/90"
                asChild
              >
                <Link href="https://facebook.com" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="icon"
                className="h-10 w-10 rounded-full bg-gradient-to-r from-[#156A7E] to-[#26C0E4] hover:bg-[#FF6B35]/90"
                asChild
              >
                <Link href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="!mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="!space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 transition-colors hover:text-[#FF6B35]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 transition-colors hover:text-[#FF6B35]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="text-sm text-gray-300 transition-colors hover:text-[#FF6B35]"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/gallery"
                  className="text-sm text-gray-300 transition-colors hover:text-[#FF6B35]"
                >
                  Gallery
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="!mb-6 text-lg font-semibold">Services</h3>
            <ul className="!space-y-3">
              <li>
                <Link
                  href="/services/residential"
                  className="text-sm text-gray-300 transition-colors hover:text-[#FF6B35]"
                >
                  Residential Wiring
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-sm text-gray-300 transition-colors hover:text-[#FF6B35]"
                >
                  Commercial Electric
                </Link>
              </li>
              <li>
                <Link
                  href="/services/emergency"
                  className="text-sm text-gray-300 transition-colors hover:text-[#FF6B35]"
                >
                  Emergency Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/solar"
                  className="text-sm text-gray-300 transition-colors hover:text-[#FF6B35]"
                >
                  Solar Installation
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Subscribe */}
          <div>
            <h3 className="!mb-6 text-lg font-semibold">Subscribe</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="company.com"
                  className="h-12 rounded-lg border-gray-700 bg-white !pr-12 text-gray-900 placeholder:text-gray-500"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-10 w-10 rounded-md bg-gradient-to-r from-[#156A7E] to-[#26C0E4] "
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="!mt-12 border-t border-gray-800 !pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>Copyright © 2025 PL TECH</p>
            {/* <div className="flex gap-6">
              <Link href="/terms" className="transition-colors hover:text-white">
                Term of use
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
