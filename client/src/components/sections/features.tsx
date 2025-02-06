import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, FileText, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "AI Code Review Bot",
    description: "Get instant feedback on your pull requests with our AI-powered code review bot",
    icon: Bot
  },
  {
    title: "Interactive API Documentation",
    description: "Generate beautiful, interactive API documentation from OpenAPI specs",
    icon: FileText
  },
  {
    title: "Automated Best Practices",
    description: "Enforce coding standards and best practices across your team",
    icon: Zap
  },
  {
    title: "Security & Linting Checks",
    description: "Identify security vulnerabilities and code quality issues early",
    icon: Shield
  }
];

export default function Features() {
  return (
    <div id="features" className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Features that Empower Your Development
          </h2>
          <p className="text-muted-foreground">
            Everything you need to build better software, faster
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
