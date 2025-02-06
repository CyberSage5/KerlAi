import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Github, Upload, Play } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const features = [
  {
    title: "Upload OpenAPI Specs",
    description: "Simply upload your OpenAPI/Swagger specification files (.json or .yaml) to generate beautiful, interactive documentation.",
    icon: Upload
  },
  {
    title: "GitHub Integration",
    description: "Connect your GitHub repository to automatically sync and update documentation when your API changes.",
    icon: Github
  },
  {
    title: "Interactive Testing",
    description: "Test your API endpoints directly from the documentation with our built-in API playground.",
    icon: Play
  },
  {
    title: "Custom Themes",
    description: "Customize the look and feel of your API documentation to match your brand identity.",
    icon: FileText
  }
];

export default function Documentation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create beautiful, interactive API documentation that stays in sync with your code.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
                Get Started
              </Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
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

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of developers who are already using Kerl to create better API documentation.
            </p>
            <Button variant="outline" size="lg">
              View Documentation Demo
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
