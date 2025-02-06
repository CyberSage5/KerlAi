import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, AlertTriangle, AlertOctagon } from "lucide-react";

type ServiceStatus = "operational" | "degraded" | "outage";

interface Service {
  name: string;
  status: ServiceStatus;
  description: string;
}

const services: Record<string, Service[]> = {
  "Core Services": [
    {
      name: "Authentication & GitHub OAuth",
      status: "operational",
      description: "User authentication and GitHub integration"
    },
    {
      name: "Guest Mode Access",
      status: "operational",
      description: "Manual file upload functionality"
    }
  ],
  "AI Services": [
    {
      name: "Code Review Bot",
      status: "operational",
      description: "AI-powered code analysis"
    },
    {
      name: "API Documentation",
      status: "operational",
      description: "Documentation generation and sync"
    }
  ],
  "Infrastructure": [
    {
      name: "Frontend",
      status: "operational",
      description: "Web interface and UI components"
    },
    {
      name: "Backend API",
      status: "operational",
      description: "API processing and business logic"
    },
    {
      name: "Database",
      status: "operational",
      description: "Data storage and retrieval"
    }
  ],
  "Developer Tools": [
    {
      name: "GitHub Webhook Processing",
      status: "operational",
      description: "Pull request detection and processing"
    },
    {
      name: "Linting & Security Checks",
      status: "operational",
      description: "Code quality and security analysis"
    }
  ],
  "Documentation Services": [
    {
      name: "OpenAPI Processing",
      status: "operational",
      description: "API specification parsing and validation"
    },
    {
      name: "Documentation Sync",
      status: "operational",
      description: "Auto-updating from GitHub repositories"
    }
  ]
};

function StatusBadge({ status }: { status: ServiceStatus }) {
  const config = {
    operational: { color: "bg-green-500", icon: Circle, text: "Operational" },
    degraded: { color: "bg-yellow-500", icon: AlertTriangle, text: "Degraded" },
    outage: { color: "bg-red-500", icon: AlertOctagon, text: "Outage" }
  };

  const { color, icon: Icon, text } = config[status];

  return (
    <Badge variant="outline" className="flex items-center gap-1">
      <Icon className={`h-3 w-3 ${color} rounded-full`} />
      {text}
    </Badge>
  );
}

export default function Status() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">System Status</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overall System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Circle className="h-4 w-4 text-green-500" />
              <span className="font-medium">All Systems Operational</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {Object.entries(services).map(([category, serviceList]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceList.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                      <StatusBadge status={service.status} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Recent Incidents</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">API Documentation Service Degraded Performance</h3>
                <Badge variant="outline" className="text-yellow-500">Resolved</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Feb 7, 2024 - High latency in API documentation generation was observed and resolved within 45 minutes.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">System Upgrade</h3>
                <Badge variant="outline" className="text-green-500">Completed</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Feb 6, 2024 - Scheduled maintenance to improve AI model performance and system reliability.</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-12 mb-6">Scheduled Maintenance</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">No scheduled maintenance at this time.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}