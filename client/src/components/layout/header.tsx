import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Loader2, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { data: user, isLoading: userLoading } = useQuery({ queryKey: ["/api/user"] });

  const handleGitHubLogin = async () => {
    setIsLoading(true);
    try {
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

  const handleLogout = () => {
    toast({
      title: "Success",
      description: "Logged out successfully"
    });
    setLocation("/");
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl text-primary cursor-pointer flex items-center gap-2" onClick={() => setLocation("/")}>
            <h2 className="text-lg font-semibold">KerlAI</h2>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Beta</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!user && location.pathname !== "/dashboard" && (
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
          )}
          {user && (
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}