import { Landmark } from 'lucide-react';

export default function AppLogo() {
  return (
    <div className="flex items-center gap-2 font-bold text-lg font-headline">
      <div className="p-1.5 bg-primary/20 text-primary rounded-lg">
        <Landmark className="h-5 w-5" />
      </div>
      <span className="text-foreground">Jharkhand Explorer</span>
    </div>
  );
}
