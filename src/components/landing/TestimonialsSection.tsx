import { generateTestimonials } from '@/ai/flows/generate-dynamic-testimonials';
import { TestimonialCarousel } from './TestimonialCarousel';

export async function TestimonialsSection() {
  const { testimonials } = await generateTestimonials({
    schoolName: 'Springfield High School',
    numberOfTestimonials: 5,
  });

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Parents Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from members of our community about their experience at Springfield High.
          </p>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
