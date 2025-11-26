import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Request a Demo</h2>
            <p className="text-muted-foreground text-lg">
              Interested in seeing how CampusConnect can transform your school's digital presence? Fill out the form to schedule a free, no-obligation demo with one of our specialists. We're excited to show you what's possible.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">What to expect:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>A personalized tour of the platform's features.</li>
                <li>Answers to your specific questions.</li>
                <li>A discussion about your school's unique needs.</li>
                <li>No pressure, just a friendly conversation.</li>
              </ul>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
