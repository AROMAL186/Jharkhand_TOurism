
'use server';

// src/lib/data/feedback.ts
import { promises as fs } from 'fs';
import path from 'path';
import { sentimentAnalysis } from '@/ai/flows/sentiment-analysis';

// This is a mock implementation. In a real application, you would fetch this data from a database.
const feedbackFilePath = path.join(process.cwd(), 'src', 'lib', 'data', 'feedback.json');

async function getFeedbackData() {
  try {
    const fileContents = await fs.readFile(feedbackFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export async function getFeedbackWithSentiment() {
  const feedback = await getFeedbackData();
  
  const feedbackWithSentiment = await Promise.all(feedback.map(async (fb: any) => {
    const result = await sentimentAnalysis({ text: fb.feedback });
    return {
      ...fb,
      sentiment: result.sentiment,
    };
  }));

  return feedbackWithSentiment;
}
