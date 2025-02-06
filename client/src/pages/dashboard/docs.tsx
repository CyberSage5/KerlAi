
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function APIDocs() {
  const [file, setFile] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [docs, setDocs] = useState(null);
  const { toast } = useToast();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      toast({
        title: "File uploaded",
        description: "Your API specification file is ready for processing"
      });
    }
  };

  const generateDocs = () => {
    setIsGenerating(true);
    // Mock API documentation generation
    setTimeout(() => {
      setDocs({
        title: "Sample API Documentation",
        version: "1.0.0",
        endpoints: [
          {
            method: "GET",
            path: "/api/users",
            description: "Retrieve all users",
            parameters: [],
            responses: [
              { code: 200, description: "Success" }
            ]
          },
          {
            method: "POST",
            path: "/api/users",
            description: "Create a new user",
            parameters: [
              { name: "name", type: "string", required: true },
              { name: "email", type: "string", required: true }
            ],
            responses: [
              { code: 201, description: "Created" },
              { code: 400, description: "Bad Request" }
            ]
          }
        ]
      });
      setIsGenerating(false);
      toast({
        title: "Documentation Generated",
        description: "AI has processed your API specification"
      });
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
        <p className="text-muted-foreground">Generate beautiful API documentation</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload API Specification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <input
                type="file"
                accept=".json,.yaml,.yml"
                onChange={handleFileUpload}
                className="hidden"
                id="api-spec"
              />
              <label htmlFor="api-spec">
                <Button variant="outline" className="w-full" asChild>
                  <div>Choose OpenAPI/Swagger File</div>
                </Button>
              </label>
              {file && (
                <div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Selected file: {file.name}
                  </p>
                  <Button 
                    onClick={generateDocs}
                    disabled={isGenerating}
                  >
                    {isGenerating ? "Generating..." : "Generate Documentation"}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {docs && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Generated Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">{docs.title}</h3>
                  <p className="text-sm text-muted-foreground">Version {docs.version}</p>
                </div>
                <div className="space-y-4">
                  {docs.endpoints.map((endpoint, i) => (
                    <div key={i} className="border p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary/10 rounded text-primary text-sm font-medium">
                          {endpoint.method}
                        </span>
                        <code className="text-sm">{endpoint.path}</code>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{endpoint.description}</p>
                      {endpoint.parameters.length > 0 && (
                        <div className="mb-2">
                          <p className="text-sm font-medium mb-1">Parameters:</p>
                          <ul className="text-sm text-muted-foreground">
                            {endpoint.parameters.map((param, j) => (
                              <li key={j}>
                                {param.name} ({param.type}){param.required ? ' - required' : ''}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
