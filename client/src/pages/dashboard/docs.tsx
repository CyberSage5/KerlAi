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

  const [templates, setTemplates] = useState([
    { id: "modern", name: "Modern", description: "Clean, minimalist documentation style", isCustom: false },
    { id: "detailed", name: "Detailed", description: "Comprehensive documentation with examples", isCustom: false },
    { id: "swagger", name: "Swagger UI", description: "Traditional Swagger/OpenAPI layout", isCustom: false }
  ]);

  const [showTemplateForm, setShowTemplateForm] = useState(false);
  const [newTemplate, setNewTemplate] = useState({ name: "", description: "" });

  const saveTemplate = () => {
    const template = {
      id: `custom-${Date.now()}`,
      name: newTemplate.name,
      description: newTemplate.description,
      isCustom: true
    };
    setTemplates([...templates, template]);
    setShowTemplateForm(false);
    setNewTemplate({ name: "", description: "" });
    toast({
      title: "Template Saved",
      description: "Your custom template has been created"
    });
  };

  const [previewContent, setPreviewContent] = useState<string | null>(null);

  const generateDocs = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);

      const mockPreviews = {
        modern: `# Modern API Documentation\n\n## Endpoints\n\n### GET /api/users\nRetrieve a list of users.`,
        detailed: `# Detailed API Reference\n\n## Authentication\nAll endpoints require Bearer token authentication.`,
        swagger: `openapi: 3.0.0\ninfo:\n  title: API Documentation\n  version: 1.0.0\npaths:\n  /api/users:\n    get:\n      summary: Get users`
      };

      setPreviewContent(mockPreviews[selectedTemplate as keyof typeof mockPreviews]);
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
          {previewContent && (
            <pre>{previewContent}</pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
}