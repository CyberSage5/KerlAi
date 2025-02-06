import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express): Server {
  app.post("/api/auth/github", async (req, res) => {
    const { code } = req.body;
    // Mock GitHub OAuth for demo
    const mockUser = {
      id: 1,
      username: "demo_user",
      gitHubId: "123456",
      email: "demo@example.com",
      avatarUrl: "https://github.com/ghost.png",
      isOnboarded: false
    };
    
    res.json(mockUser);
  });

  app.get("/api/user", async (req, res) => {
    const authToken = req.headers.authorization?.split(' ')[1];
    
    if (!authToken) {
      return res.status(401).json({ message: "No authentication token provided" });
    }

    try {
      // Verify the GitHub token
      const response = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!response.ok) {
        return res.status(401).json({ message: "Invalid authentication token" });
      }

      const githubUser = await response.json();
      
      // Get or create user in our system
      const user = await storage.getUserByGithubId(githubUser.id) || {
        id: Date.now(),
        username: githubUser.login,
        gitHubId: githubUser.id.toString(),
        email: githubUser.email,
        avatarUrl: githubUser.avatar_url,
        isOnboarded: false
      };

      res.json(user);
    } catch (error) {
      console.error('Authentication error:', error);
      res.status(500).json({ message: "Authentication failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
