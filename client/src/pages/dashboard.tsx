import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, GitBranch, FileText, Code2, Settings } from "lucide-react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const { data: user, isLoading } = useQuery({
    queryKey: ["/api/user"],
  });

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const quickActions = [
    {
      title: "Connect Repository",
      icon: GitBranch,
      description: "Add a new GitHub repository for code reviews",
      action: () => setLocation("/dashboard/repository")
    },
    {
      title: "Create API Documentation",
      icon: FileText,
      description: "Generate documentation from OpenAPI specs",
      action: () => toast({
        title: "Coming Soon",
        description: "This feature is not available in the demo"
      })
    },
    {
      title: "Start Code Review",
      icon: Code2,
      description: "Begin a new AI-powered code review",
      action: () => toast({
        title: "Coming Soon",
        description: "This feature is not available in the demo"
      })
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.username}</h1>
          <p className="text-muted-foreground mt-1">
            Here's an overview of your development workflow
          </p>
        </div>
        <Button variant="outline" onClick={() => setLocation("/dashboard/settings")}>
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:border-primary/50 transition-colors cursor-pointer" onClick={action.action}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <action.icon className="h-5 w-5 text-primary" />
                <CardTitle>{action.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{action.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <GitBranch className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Code Review Completed</p>
                  <p className="text-sm text-muted-foreground">auth-service/login.ts - 10 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">API Documentation Generated</p>
                  <p className="text-sm text-muted-foreground">user-service - 1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Total Reviews</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span>API Docs Generated</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Active Repositories</span>
                <span className="font-medium">5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}