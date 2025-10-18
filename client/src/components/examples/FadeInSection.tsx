import FadeInSection from '../FadeInSection';
import { Card } from "@/components/ui/card";

export default function FadeInSectionExample() {
  return (
    <div className="bg-background p-8 space-y-8">
      <div className="h-screen flex items-center justify-center bg-card">
        <h2 className="text-4xl font-serif">Scroll down to see fade-in effect</h2>
      </div>
      <FadeInSection>
        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-4">First Section</h3>
          <p className="text-muted-foreground">This content fades in when scrolled into view</p>
        </Card>
      </FadeInSection>
      <FadeInSection>
        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-4">Second Section</h3>
          <p className="text-muted-foreground">This content also fades in independently</p>
        </Card>
      </FadeInSection>
    </div>
  );
}
