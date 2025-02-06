import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileText, Upload, Layout } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function APIDocs() {
  const { toast } = useToast();
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [isGenerating, setIsGenerating] = useState(false);

  const templates = [
    { id: "modern", name: "Modern", description: "Clean, minimalist documentation style" },
    { id: "detailed", name: "Detailed", description: "Comprehensive documentation with examples" },
    { id: "swagger", name: "Swagger UI", description: "Traditional Swagger/OpenAPI layout" }
  ];

  const generateDocs = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Documentation Generated",
        description: `Generated using ${templates.find(t => t.id === selectedTemplate)?.name} template`
      });
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
        <p className="text-muted-foreground">Generate beautiful API documentation</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Choose Template</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
            <SelectTrigger>
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              {templates.map(template => (
                <SelectItem key={template.id} value={template.id}>
                  {template.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="grid gap-4 md:grid-cols-3">
            {templates.map(template => (
              <Card key={template.id} className={`cursor-pointer ${selectedTemplate === template.id ? 'border-primary' : ''}`}>
                <CardHeader>
                  <Layout className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button onClick={generateDocs} disabled={isGenerating}>
            <FileText className="mr-2 h-4 w-4" />
            Generate Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}