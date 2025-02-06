
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { GitBranch, GitPullRequest } from "lucide-react";

export default function CodeReviews() {
  const { toast } = useToast();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Code Reviews</h1>
        <p className="text-muted-foreground">Manage and track your code reviews</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Recent Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground">No recent reviews</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitPullRequest className="h-5 w-5" />
              Start New Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => toast({
                title: "Coming Soon",
                description: "This feature will be available soon"
              })}
            >
              New Review
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
