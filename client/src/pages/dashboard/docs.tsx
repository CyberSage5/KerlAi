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
        modern: `
          <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">User API</h1>
            <div class="space-y-4">
              <div class="p-4 border rounded">
                <h2 class="text-lg font-semibold">GET /api/users</h2>
                <p class="text-muted-foreground">Retrieve a list of users</p>
              </div>
            </div>
          </div>
        `,
        detailed: `
          <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">API Reference</h1>
            <div class="space-y-6">
              <div class="p-6 border rounded">
                <h2 class="text-xl font-bold mb-2">Authentication</h2>
                <p class="mb-4">Bearer token required for all endpoints</p>
                <pre class="bg-muted p-2 rounded">Authorization: Bearer {token}</pre>
              </div>
            </div>
          </div>
        `,
        swagger: `
          <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">Swagger UI</h1>
            <div class="space-y-4">
              <div class="bg-[#f8f9fa] p-4 rounded">
                <h3 class="font-mono">GET /api/v1/users</h3>
                <div class="mt-2 space-y-2">
                  <div class="flex gap-2">
                    <span class="text-green-600">200</span>
                    <span>Success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
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
        </CardContent>
      </Card>
    </div>
  );
}