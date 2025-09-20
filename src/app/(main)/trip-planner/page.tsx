import { TripPlannerForm } from '@/components/trip-planner-form';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ClipboardList } from 'lucide-react';

export default function TripPlannerPage() {
  return (
    <div className="container mx-auto max-w-4xl">
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
             <ClipboardList className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Personalized Trip Planner</CardTitle>
          <CardDescription className="text-lg">
            Let our AI craft the perfect Jharkhand adventure just for you.
          </CardDescription>
        </CardHeader>
      </Card>
      <TripPlannerForm />
    </div>
  );
}
