import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { Baby, School, GraduationCap, Star } from 'lucide-react';

const programs = [
  {
    id: 'program-nursery',
    icon: <Baby className="w-8 h-8 text-primary" />,
    title: 'Nursery',
    description: 'Nurturing young minds in a playful and supportive learning environment.',
  },
  {
    id: 'program-primary',
    icon: <School className="w-8 h-8 text-primary" />,
    title: 'Primary School',
    description: 'Building strong foundations in core subjects for future academic success.',
  },
  {
    id: 'program-secondary',
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: 'Secondary School',
    description: 'Preparing students for higher education and their chosen career paths.',
  },
  {
    id: 'program-specialized',
    icon: <Star className="w-8 h-8 text-primary" />,
    title: 'Specialized Programs',
    description: 'Offering advanced studies in STEM, arts, and athletics for gifted students.',
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Programs & Academics</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a comprehensive curriculum designed to meet the diverse needs of our students at every stage of their education.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {programs.map((program) => {
            const programImage = getImage(program.id);
            return (
              <Card key={program.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {programImage && (
                  <div className="aspect-w-4 aspect-h-3">
                     <Image
                      src={programImage.imageUrl}
                      alt={programImage.description}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                      data-ai-hint={programImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    {program.icon} {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{program.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
