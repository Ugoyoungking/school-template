import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ChatInterface } from '@/components/chat/ChatInterface';

export default function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ChatInterface />
        </div>
      </main>
      <Footer />
    </div>
  );
}
