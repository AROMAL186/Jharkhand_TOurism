
"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { multilingualChatbot } from '@/ai/flows/multilingual-chatbot';
import { MessageCircle, Bot, User, Send, X } from 'lucide-react';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(prev => !prev);
    if (messages.length === 0) {
        // Add a welcome message on first open
        setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'bot', text: "Welcome! How can I help you plan your trip to Jharkhand today?" }]);
        }, 300);
    }
  };

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await multilingualChatbot({ query: input });
      const botMessage: Message = { sender: 'bot', text: result.response };
      setMessages(prev => [...prev, botMessage]);

      // Handle navigation if a path is returned
      if (result.path) {
        setTimeout(() => {
            router.push(result.path!);
            setIsOpen(false); // Close chatbot on navigation
        }, 1000); // Wait a second before redirecting
      }

    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = { sender: 'bot', text: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Auto-scroll to the bottom of the messages
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button onClick={handleToggle} className="rounded-full w-16 h-16 shadow-lg">
          <MessageCircle size={32} />
        </Button>
      ) : (
        <Card className="w-80 md:w-96 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary text-primary-foreground">
            <div className="flex items-center space-x-2">
              <Bot size={24} />
              <CardTitle className="text-lg">Jharkhand Tour Planner</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={handleToggle} className="text-primary-foreground hover:bg-primary/90">
                <X size={24} />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-80 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-start space-x-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                     {msg.sender === 'bot' && <Bot className="w-6 h-6 flex-shrink-0 text-primary" />} 
                     <div className={`p-3 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-secondary text-secondary-foreground' : 'bg-muted'}`}>
                        <p className="text-sm">{msg.text}</p>
                    </div>
                    {msg.sender === 'user' && <User className="w-6 h-6 flex-shrink-0" />}
                  </div>
                ))}
                {isLoading && (
                    <div className="flex items-center space-x-2">
                        <Bot className="w-6 h-6 flex-shrink-0 text-primary animate-pulse" />
                        <div className="p-3 rounded-lg bg-muted max-w-xs">
                            <p className="text-sm">Thinking...</p>
                        </div>
                    </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                />
                <Button onClick={handleSend} disabled={isLoading} aria-label="Send Message">
                  <Send size={20}/>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
