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
      </div>
    </div>
  );
}
