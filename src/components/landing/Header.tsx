'use client';
import { School, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Header() {
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
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <School className="h-6 w-6 text-primary" />
          <span className="font-headline">CampusConnect</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/chat">
            <Button variant="outline">
              <Bot className="mr-2" />
              AI Chat
            </Button>
          </Link>
          <Link href="#contact">
            <Button>Request a Free Demo</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
