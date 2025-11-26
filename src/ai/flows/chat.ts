'use server';
/**
 * @fileOverview A simple chat flow.
 *
 * - chat - A function that handles the chat process.
 * - ChatInput - The input type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ChatInputSchema = z.object({
  message: z.string(),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
      text: z.string(),
    })),
  })).optional(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export async function chat(input: ChatInput): Promise<string> {
  const llm = ai.model('googleai/gemini-2.5-flash');

  const history = input.history || [];

  const response = await ai.generate({
    model: llm,
    prompt: input.message,
    history,
  });

  return response.text;
}
