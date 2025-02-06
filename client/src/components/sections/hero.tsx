import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6">
            AI-powered Code Review & API Documentation
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Streamline your development workflow with automated code reviews,
            interactive API documentation, and AI-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setLocation("/dashboard")}
              className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
            >
              Try Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('features');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
