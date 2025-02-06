
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { GitBranch, GitPullRequest, Check, X } from "lucide-react";

export default function CodeReviews() {
  const { toast } = useToast();
  const [code, setCode] = useState("");
  const [review, setReview] = useState(null);

  const handleReview = () => {
    if (!code.trim()) {
      toast({
        title: "Error",
        description: "Please enter some code to review",
        variant: "destructive"
      });
      return;
    }

    // Mock review response
    const mockReview = {
      score: 8.5,
      suggestions: [
        "Consider adding input validation",
        "Function could be split into smaller units",
        "Add type annotations for better clarity"
      ],
      improvements: [
        "Use meaningful variable names",
        "Add error handling",
        "Include function documentation"
      ]
    };

    setReview(mockReview);
    toast({
      title: "Review Complete",
      description: "AI has analyzed your code"
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Code Reviews</h1>
        <p className="text-muted-foreground">Get instant AI-powered code reviews</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitPullRequest className="h-5 w-5" />
              Submit Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea 
              className="min-h-[300px] mb-4"
              placeholder="Paste your code here..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button onClick={handleReview}>
              Start Review
            </Button>
          </CardContent>
        </Card>

        {review && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" />
                Review Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Code Quality Score</p>
                  <div className="text-2xl font-bold text-primary">{review.score}/10</div>
                </div>
                <div>
                  <p className="font-medium mb-2">Suggestions</p>
                  <ul className="space-y-2">
                    {review.suggestions.map((suggestion, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <X className="h-4 w-4 text-destructive" />
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Recommended Improvements</p>
                  <ul className="space-y-2">
                    {review.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
