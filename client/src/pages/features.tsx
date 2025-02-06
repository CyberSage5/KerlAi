import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, FileText, Shield, Zap } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const features = [
  {
    title: "AI Code Review Bot",
    description: "Get instant feedback on your pull requests with our AI-powered code review bot. Our advanced AI analyzes code quality, suggests improvements, and catches potential issues before they reach production.",
    icon: Bot
  },
  {
    title: "Interactive API Documentation",
    description: "Generate beautiful, interactive API documentation from OpenAPI specs. Keep your documentation always up-to-date with automatic syncing from your GitHub repositories.",
    icon: FileText
  },
  {
    title: "Automated Best Practices",
    description: "Enforce coding standards and best practices across your team. Our AI ensures consistency and quality in your codebase through automated checks and suggestions.",
    icon: Zap
  },
  {
    title: "Security & Linting Checks",
    description: "Identify security vulnerabilities and code quality issues early in the development process. Integrate with popular tools like ESLint, Pylint, and Snyk.",
    icon: Shield
  }
];

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Features that Empower Your Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build better software, faster. Discover how Kerl can transform your development workflow.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
