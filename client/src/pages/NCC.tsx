import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Image } from "lucide-react";

export default function NCC() {
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `NCC Memory ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="py-16 md:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-chart-2 via-primary to-chart-2 bg-clip-text text-transparent mb-4" data-testid="text-ncc-title">
              NCC Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Memories and moments from National Cadet Corps
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden hover-elevate active-elevate-2 transition-all group"
                  data-testid={`card-gallery-${item.id}`}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-card to-card/50 flex items-center justify-center relative">
                    <Image className="w-16 h-16 text-muted-foreground/30" />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-card-foreground text-center" data-testid={`text-gallery-${item.id}-title`}>
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground text-center mt-1">
                      Click to view full image
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
