import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';

export function AboutSection() {
  const aboutImage = getImage('about-school');
  return (
    <section id="about" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Our School</h2>
            <p className="text-muted-foreground text-lg">
              At Springfield High, we are dedicated to fostering an environment of academic excellence and personal growth. Our mission is to inspire a lifelong love of learning in every student.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-xl">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide a high-quality, comprehensive, and meaningful education for all students. Each student will be expected to succeed within the bounds of their abilities and chosen educational goals.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Our Values</h3>
                <p className="text-muted-foreground">
                  We value respect, integrity, and community. We believe in creating a safe and supportive space where students feel empowered to explore their potential and become responsible citizens.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
