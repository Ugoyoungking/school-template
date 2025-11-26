'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type TestimonialCarouselProps = {
  testimonials: string[];
};

const parentNames = ["Sarah L.", "Michael B.", "Jessica P.", "David C.", "Emily R."];

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="h-full flex flex-col justify-between p-6">
                <CardContent className="p-0">
                  <p className="italic text-muted-foreground">"{testimonial}"</p>
                </CardContent>
                <div className="flex items-center gap-4 mt-6">
                  <Avatar>
                    <AvatarImage src={`https://picsum.photos/seed/avatar${index}/40/40`} />
                    <AvatarFallback>{parentNames[index % parentNames.length].charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{parentNames[index % parentNames.length]}</p>
                    <p className="text-sm text-muted-foreground">A Happy Parent</p>
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
