import { TestimonialCarousel } from './TestimonialCarousel';

export function TestimonialsSection() {
  const testimonials = [
    "The supportive environment at Springfield High has helped my child thrive academically and socially.",
    "We are so impressed with the dedicated teachers and the engaging curriculum at Springfield High.",
    "Springfield High has exceeded our expectations in providing a well-rounded education for our children.",
    "My daughter loves the extracurricular activities, especially the science club and the art classes.",
    "The communication between parents and teachers is excellent. We always feel informed and involved."
  ];

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
