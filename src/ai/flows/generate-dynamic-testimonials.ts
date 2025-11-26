'use server';

/**
 * @fileOverview A flow to dynamically generate compelling testimonials using AI.
 *
 * - generateTestimonials - A function that generates testimonials.
 * - GenerateTestimonialsInput - The input type for the generateTestimonials function.
 * - GenerateTestimonialsOutput - The return type for the generateTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTestimonialsInputSchema = z.object({
  schoolName: z.string().describe('The name of the school.'),
  numberOfTestimonials: z
    .number()
    .min(1)
    .max(5)
    .default(3)
    .describe('The number of testimonials to generate.'),
});
export type GenerateTestimonialsInput = z.infer<typeof GenerateTestimonialsInputSchema>;

const GenerateTestimonialsOutputSchema = z.object({
  testimonials: z.array(z.string()).describe('An array of generated testimonials.'),
});
export type GenerateTestimonialsOutput = z.infer<typeof GenerateTestimonialsOutputSchema>;

export async function generateTestimonials(input: GenerateTestimonialsInput): Promise<GenerateTestimonialsOutput> {
  return generateTestimonialsFlow(input);
}

const generateTestimonialsPrompt = ai.definePrompt({
  name: 'generateTestimonialsPrompt',
  input: {schema: GenerateTestimonialsInputSchema},
  output: {schema: GenerateTestimonialsOutputSchema},
  prompt: `You are a marketing expert specializing in generating compelling testimonials for schools.
  Generate {{numberOfTestimonials}} testimonials for {{schoolName}} that highlight its positive aspects and build trust with potential parents.
  Each testimonial should be a short, concise, and impactful quote from a satisfied parent or student.
  The testimonials should be varied, reflecting different aspects of the school experience such as academic excellence, supportive environment, extracurricular activities, and parent-teacher communication.

  Example Testimonials:
  - "The supportive environment at {{schoolName}} has helped my child thrive academically and socially."
  - "We are so impressed with the dedicated teachers and the engaging curriculum at {{schoolName}}."
  - "{{schoolName}} has exceeded our expectations in providing a well-rounded education for our children."

  Ensure that the generated testimonials sound authentic and genuine.

  Output the testimonials in the following JSON format:
  {
    "testimonials": [
      "Testimonial 1",
      "Testimonial 2",
      ...
    ]
  }`,
});

const generateTestimonialsFlow = ai.defineFlow(
  {
    name: 'generateTestimonialsFlow',
    inputSchema: GenerateTestimonialsInputSchema,
    outputSchema: GenerateTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await generateTestimonialsPrompt(input);
    return output!;
  }
);
