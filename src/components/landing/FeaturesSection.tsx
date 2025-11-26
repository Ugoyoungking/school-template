import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ClipboardList, CalendarDays, Users, MapPin, BookOpen, Images } from 'lucide-react';

const features = [
  {
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    title: 'Online Admission',
    description: 'A streamlined, paperless admission process for parents.',
  },
  {
    icon: <CalendarDays className="w-8 h-8 text-primary" />,
    title: 'Events & Announcements',
    description: 'Stay updated with the latest school news and events.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Student Portal',
    description: 'Access grades, attendance, and resources in one place.',
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: 'Contact & Location',
    description: 'Easily find our campus and get in touch with staff.',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: 'Academic Departments',
    description: 'Explore our diverse range of academic programs.',
  },
  {
    icon: <Images className="w-8 h-8 text-primary" />,
    title: 'Photo Gallery',
    description: 'See our vibrant school life through photos and videos.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Key Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform provides everything a modern school needs to thrive online and connect with its community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2">{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
