'use client';
import { useState, useRef, useEffect, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Bot, User, Send, Loader } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from './ChatMessage';
import { submitChatMessage } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

type Message = {
  role: 'user' | 'model';
  content: string;
};

type HistoryItem = {
  role: 'user' | 'model';
  content: { text: string }[];
}

const formSchema = z.object({
  message: z.string().min(1, { message: 'Message cannot be empty.' }),
});

export function ChatInterface() {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hello! I'm an AI assistant for Springfield High. How can I help you today?" },
  ]);
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const userMessage: Message = { role: 'user', content: values.message };
    setMessages((prev) => [...prev, userMessage]);
    form.reset();

    startTransition(async () => {
        const history: HistoryItem[] = messages.map(m => ({
            role: m.role,
            content: [{ text: m.content }]
        }))

        const result = await submitChatMessage({ message: values.message, history });
      
        if ('reply' in result) {
            const modelMessage: Message = { role: 'model', content: result.reply };
            setMessages((prev) => [...prev, modelMessage]);
        } else {
            toast({
                variant: 'destructive',
                title: 'An error occurred',
                description: result.error,
            });
            // remove user message on error
            setMessages(prev => prev.slice(0, prev.length -1));
        }
    });
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-2xl h-[70vh] flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Bot />
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full p-6" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} role={message.role} content={message.content} />
            ))}
            {isPending && (
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bot className="text-primary w-6 h-6 animate-pulse" />
                </div>
                <div className="bg-muted p-3 rounded-lg flex items-center">
                    <Loader className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-start gap-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Ask about programs, admissions, or events..." {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" disabled={isPending}>
              <Send />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </Form>
      </CardFooter>
    </Card>
  );
}
