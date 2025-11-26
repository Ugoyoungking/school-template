'use client';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type ChatMessageProps = {
  role: 'user' | 'model';
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={cn('flex items-start gap-3', isUser ? 'justify-end' : 'justify-start')}>
      {!isUser && (
        <div className="bg-primary/10 p-2 rounded-full">
          <Bot className="text-primary w-6 h-6" />
        </div>
      )}
      <div
        className={cn(
          'p-3 rounded-lg max-w-[80%]',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
        )}
      >
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
      {isUser && (
        <div className="bg-muted p-2 rounded-full">
          <User className="text-foreground w-6 h-6" />
        </div>
      )}
    </div>
  );
}
