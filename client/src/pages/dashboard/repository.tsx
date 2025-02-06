import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, GitBranch, FileText, AlertCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Repository() {
  const { toast } = useToast();
  const [reviewCode, setReviewCode] = useState("");
  const { data: repository, isLoading } = useQuery({
    queryKey: ["/api/repository/1"],
  });

  const handleReview = async () => {
    if (!reviewCode.trim()) {
      toast({
        title: "Error",
        description: "Please enter some code to review",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Starting Review",
      description: "AI is analyzing your code..."
    });

    // TODO: Implement API call
  };

  if (isLoading) {
    return (
      <div className="h-[200px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Code Review</h1>
        <p className="text-muted-foreground">Get instant feedback on your code</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            <CardTitle>Submit Code for Review</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            value={reviewCode}
            onChange={(e) => setReviewCode(e.target.value)}
            placeholder="Paste your code here..."
            className="min-h-[200px] mb-4"
          />
          <Button onClick={handleReview}>
            Start Review
          </Button>
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
          <Button onClick={() => toast({
            title: "Generating Documentation",
            description: "Starting OpenAPI documentation generation..."
          })}>
            Generate API Docs
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}