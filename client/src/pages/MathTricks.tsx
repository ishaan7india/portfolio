import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
}

export default function MathTricks() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Quick Mental Math: Squaring Numbers Ending in 5",
      date: "March 15, 2025",
      readTime: "3 min read",
      category: "Mental Math",
      excerpt: "Learn the simple trick to instantly square any two-digit number ending in 5. This technique will help you solve problems faster in competitive exams."
    },
    {
      id: 2,
      title: "The Russian Peasant Multiplication Method",
      date: "March 10, 2025",
      readTime: "5 min read",
      category: "Multiplication Tricks",
      excerpt: "Discover an ancient multiplication technique that only requires you to know how to double numbers and add them together."
    },
    {
      id: 3,
      title: "Divisibility Rules for Numbers 1-12",
      date: "March 5, 2025",
      readTime: "4 min read",
      category: "Number Theory",
      excerpt: "Master all the divisibility rules to quickly determine if a number is divisible by another without performing actual division."
    },
    {
      id: 4,
      title: "Vedic Mathematics: Fast Multiplication Techniques",
      date: "February 28, 2025",
      readTime: "6 min read",
      category: "Vedic Math",
      excerpt: "Explore the Nikhilam method for multiplying numbers close to powers of 10, making calculations incredibly fast."
    },
    {
      id: 5,
      title: "Percentage Calculations Made Easy",
      date: "February 20, 2025",
      readTime: "4 min read",
      category: "Percentages",
      excerpt: "Learn shortcuts to calculate percentages mentally, perfect for solving olympiad problems under time pressure."
    },
    {
      id: 6,
      title: "The Magic of Number 9: Patterns and Tricks",
      date: "February 15, 2025",
      readTime: "3 min read",
      category: "Number Patterns",
      excerpt: "Uncover the fascinating patterns in multiples of 9 and how to use them for quick mental calculations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        <div className="py-16 md:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-chart-2 via-primary to-chart-2 bg-clip-text text-transparent mb-4" data-testid="text-math-tricks-title">
              Math Tips & Tricks
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical techniques and shortcuts from a Mathematics Olympiad champion
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="p-8 hover-elevate active-elevate-2 transition-all cursor-pointer group"
                  data-testid={`card-blog-post-${post.id}`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/40" data-testid={`badge-category-${post.id}`}>
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span data-testid={`text-date-${post.id}`}>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span data-testid={`text-readtime-${post.id}`}>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors" data-testid={`text-title-${post.id}`}>
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-excerpt-${post.id}`}>
                      {post.excerpt}
                    </p>

                    <div className="pt-2">
                      <span className="text-primary font-semibold group-hover:underline inline-flex items-center gap-2" data-testid={`link-read-more-${post.id}`}>
                        Read full article
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
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
