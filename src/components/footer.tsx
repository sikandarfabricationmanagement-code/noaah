import { Logo } from '@/components/logo';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm">
              Leading the future of uPVC technology for sustainable and modern living.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold">Products</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#products" className="hover:text-primary">uPVC Profiles</Link></li>
                <li><Link href="#products" className="hover:text-primary">Windows</Link></li>
                <li><Link href="#products" className="hover:text-primary">Doors</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
                <li><Link href="#certifications" className="hover:text-primary">Certifications</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Connect</h3>
              <div className="mt-4 flex space-x-4">
                <Link href="#" aria-label="Twitter" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="Facebook" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Noaah Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
