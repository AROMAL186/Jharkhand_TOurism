"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send, Smile, Frown, Meh, Lightbulb, Badge } from 'lucide-react';
import { analyzeSentiment, SentimentAnalysisOutput } from '@/ai/flows/ai-sentiment-analysis';

const formSchema = z.object({
  feedback: z.string().min(10, 'Please provide at least 10 characters of feedback.'),
});

const SentimentIcon = ({ sentiment }: { sentiment: string }) => {
    switch (sentiment.toLowerCase()) {
        case 'positive':
            return <Smile className="h-10 w-10 text-green-500" />;
        case 'negative':
            return <Frown className="h-10 w-10 text-red-500" />;
        default:
            return <Meh className="h-10 w-10 text-yellow-500" />;
    }
}

export function FeedbackForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SentimentAnalysisOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await analyzeSentiment(values);
      setResult(response);
    } catch (e) {
      setError('Failed to analyze feedback. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Card className="mt-8">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Feedback</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your experience, what you liked, and what could be improved."
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                Submit Feedback
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="mt-8 border-destructive">
            <CardHeader>
                <CardTitle className="text-destructive">Error</CardTitle>
                <CardDescription>{error}</CardDescription>
            </CardHeader>
        </Card>
      )}

      {result && (
        <div className="mt-8 space-y-6">
            <h2 className="text-3xl font-bold text-center font-headline">Feedback Analysis</h2>
             <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <SentimentIcon sentiment={result.sentiment} />
                        <div>
                            <CardTitle>Overall Sentiment</CardTitle>
                            <p className="text-3xl font-bold capitalize">{result.sentiment}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2">Positive Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                            {result.positiveKeywords.length > 0 ? result.positiveKeywords.map(kw => (
                                <Badge key={kw} variant="default" className="bg-green-100 text-green-800">{kw}</Badge>
                            )) : <p className="text-sm text-muted-foreground">None identified.</p>}
                        </div>
                    </div>
                     <div>
                        <h4 className="font-semibold mb-2">Negative Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                            {result.negativeKeywords.length > 0 ? result.negativeKeywords.map(kw => (
                                <Badge key={kw} variant="destructive" className="bg-red-100 text-red-800">{kw}</Badge>
                            )) : <p className="text-sm text-muted-foreground">None identified.</p>}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Lightbulb className="text-primary"/> Suggestions for Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{result.suggestions}</p>
                </CardContent>
            </Card>
        </div>
      )}
    </>
  );
}
