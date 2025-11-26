import Link from 'next/link';
import { School, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { href: '#', icon: <Facebook className="h-5 w-5" /> },
  { href: '#', icon: <Twitter className="h-5 w-5" /> },
  { href: '#', icon: <Instagram className="h-5 w-5" /> },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <School className="h-7 w-7 text-primary" />
              <span className="font-headline">CampusConnect</span>
            </Link>
            <p className="text-muted-foreground">
              Modern Website for a Modern School.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 123 Education Lane, Springfield, USA
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> contact@springfield.edu
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> (123) 456-7890
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Springfield High School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
