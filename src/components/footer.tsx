"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from './logo';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This check is to prevent a hydration mismatch.
    // The server will render the initial state, and the client will update it after mounting.
    if (currentYear !== new Date().getFullYear()) {
      setCurrentYear(new Date().getFullYear());
    }
  }, [currentYear]);

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <Link href="/" className="flex items-center gap-3 font-bold text-3xl text-primary">
          <Logo className="h-16 w-16" />
          Noaah
        </Link>
        <div className='text-center'>
            <p className='font-semibold'>Noaah Tech Private Limited.</p>
            <p className="text-sm text-muted-foreground">
            &copy; {currentYear} All rights reserved.
            </p>
        </div>
        <nav className="flex gap-4">
          <Link href="http://www.noaahtechprofile.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            www.noaahtechprofile.com
          </Link>
        </nav>
      </div>
    </footer>
  );
}
