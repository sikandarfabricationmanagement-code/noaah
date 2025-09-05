'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Download, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Features' },
  { href: '#certificate', label: 'Certificate' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
             <Button className="hidden sm:flex">
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background">
                  <div className="p-4">
                  <Link href="/" className="mb-8 inline-block">
                    <Logo />
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <SheetTrigger asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </SheetTrigger>
                    ))}
                  </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
