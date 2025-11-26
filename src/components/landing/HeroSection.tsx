import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const heroImage = getImage('hero-background');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <Card className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-foreground font-headline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Springfield High School
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-foreground">
              Modern Website for a Modern School
            </p>
            <p className="mt-4 max-w-lg mx-auto text-muted-foreground">
              Empowering students and connecting communities with a seamless digital experience.
            </p>
            <div className="mt-8">
              <Link href="#contact">
                <Button size="lg">
                  Request a Free Demo <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
