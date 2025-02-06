import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, GitBranch, FileText, AlertCircle } from "lucide-react";

export default function Repository() {
  const { toast } = useToast();
  const { data: repository, isLoading } = useQuery({
    queryKey: ["/api/repository/1"], // Mock repository ID
  });

  if (isLoading) {
    return (
      <div className="h-[200px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Mock data for demonstration
  const mockRepository = {
    name: "example-repo",
    description: "An example repository to showcase Kerl's features",
    codeReviews: [],
    apiDocs: [],
    issues: []
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{mockRepository.name}</h1>
        <p className="text-muted-foreground">{mockRepository.description}</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            <CardTitle>Code Reviews</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {mockRepository.codeReviews.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">No code reviews yet</p>
              <Button onClick={() => toast({
                title: "Coming Soon",
                description: "Code review feature will be available soon"
              })}>
                Start Code Review
              </Button>
            </div>
          ) : (
            <div>Code review list will go here</div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <CardTitle>API Documentation</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {mockRepository.apiDocs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">No API documentation yet</p>
              <Button onClick={() => toast({
                title: "Coming Soon",
                description: "API documentation feature will be available soon"
              })}>
                Generate API Docs
              </Button>
            </div>
          ) : (
            <div>API documentation list will go here</div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            <CardTitle>Issues</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {mockRepository.issues.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">No issues found</p>
              <Button onClick={() => toast({
                title: "Coming Soon",
                description: "Issue tracking feature will be available soon"
              })}>
                Create Issue
              </Button>
            </div>
          ) : (
            <div>Issues list will go here</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
