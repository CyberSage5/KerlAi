import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const [, setLocation] = useLocation();

  const handleGitHubLogin = async () => {
    // Mock GitHub OAuth flow
    const response = await fetch("/api/auth/github", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: "mock_code" })
    });
    
    if (response.ok) {
      setLocation("/dashboard");
    }
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-2xl text-primary">Kerl</div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={handleGitHubLogin}
            className="flex items-center gap-2"
          >
            <FaGithub className="h-4 w-4" />
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </header>
  );
}
