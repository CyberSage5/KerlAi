import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Header() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleGitHubLogin = async () => {
    setIsLoading(true);
    try {
      // Mock GitHub OAuth flow
      const response = await fetch("/api/auth/github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: "mock_code" })
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Logged in successfully"
        });
        setLocation("/dashboard");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log in",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl text-primary cursor-pointer" onClick={() => setLocation("/")}>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Kerl
              <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">beta</span>
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={handleGitHubLogin}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <FaGithub className="h-4 w-4" />
            )}
            {isLoading ? "Signing in..." : "Sign in with GitHub"}
          </Button>
        </div>
      </div>
    </header>
  );
}