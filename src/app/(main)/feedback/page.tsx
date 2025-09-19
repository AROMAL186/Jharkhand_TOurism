import { FeedbackForm } from '@/components/feedback-form';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function FeedbackPage() {
  return (
    <div className="container mx-auto max-w-4xl">
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
             <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Share Your Feedback</CardTitle>
          <CardDescription className="text-lg">
            Help us improve tourism in Jharkhand. Your opinion matters!
          </CardDescription>
        </CardHeader>
      </Card>
      <FeedbackForm />
    </div>
  );
}
