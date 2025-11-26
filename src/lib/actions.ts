'use server';

import { z } from 'zod';
import { chat, ChatInput } from '@/ai/flows/chat';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

type FormState = {
  message?: string;
  error?: string;
};

export async function submitContactForm(
  values: z.infer<typeof formSchema>
): Promise<FormState> {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return {
      error: 'Invalid form data provided.',
    };
  }

  try {
    // Here you would integrate with a service like Resend, Formspree, etc.
    // For this demo, we'll just log the data to the console.
    console.log('New contact form submission:');
    console.log('Name:', parsed.data.name);
    console.log('Email:', parsed.data.email);
    console.log('Phone:', parsed.data.phone);
    console.log('Message:', parsed.data.message);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate a potential error
    // if (Math.random() > 0.5) {
    //   throw new Error("Failed to send message. Please try again later.");
    // }

    return {
      message: 'Form submitted successfully!',
    };
  } catch (e) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }
    return {
      error: 'An unknown error occurred.',
    };
  }
}

export async function submitChatMessage(
  values: ChatInput
): Promise<{ reply: string } | { error: string }> {
  try {
    const reply = await chat(values);
    return { reply };
  } catch (e) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }
    return {
      error: 'An unknown error occurred while processing your message.',
    };
  }
}
