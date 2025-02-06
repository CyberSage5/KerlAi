import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function Dashboard() {
  const { toast } = useToast();
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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Welcome, {user?.username}</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Code Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => toast({
                title: "Coming Soon",
                description: "This feature is not available in the demo"
              })}
            >
              Review Code
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => toast({
                title: "Coming Soon",
                description: "This feature is not available in the demo"
              })}
            >
              Generate Docs
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => toast({
                title: "Coming Soon",
                description: "This feature is not available in the demo"
              })}
            >
              Manage Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
