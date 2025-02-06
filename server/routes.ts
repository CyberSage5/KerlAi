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
    // Mock authenticated user
    const user = await storage.getUser(1);
    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    res.json(user);
  });

  const httpServer = createServer(app);
  return httpServer;
}
