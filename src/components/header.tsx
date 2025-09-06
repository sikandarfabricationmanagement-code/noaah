"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Menu } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from './logo';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/features", label: "Features" },
  { href: "/certificates", label: "Certificate" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-3xl text-primary">
          <Logo className="h-16 w-16" />
          Noaah
        </Link>
        
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button variant="ghost" asChild key={link.href}>
              <Link href={link.href} className="relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
              </Link>
            </Button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
            <Button asChild>
                <Link href="/Brochure.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Brochure

              
                </Link>
            </Button>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="flex items-center gap-3 font-bold text-3xl text-primary" onClick={() => setIsMenuOpen(false)}>
                  <Logo className="h-16 w-16" />
                  Noaah
                </Link>
              </div>
              <nav className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Button className="w-full" asChild>
                    <Link href="/Brochure.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Download Brochure
                    </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
