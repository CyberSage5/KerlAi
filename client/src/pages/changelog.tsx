
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface ChangelogEntry {
  date: string;
  version: string;
  changes: {
    type: "feature" | "improvement" | "fix";
    description: string;
  }[];
}

const changelog: ChangelogEntry[] = [
  {
    date: "2024-02-11",
    version: "1.2.0",
    changes: [
      {
        type: "improvement",
        description: "Enhanced authentication system with proper GitHub token verification"
      },
      {
        type: "improvement",
        description: "Streamlined landing page with focused content"
      },
      {
        type: "feature",
        description: "Added beta tag to platform branding"
      },
      {
        type: "improvement",
        description: "Updated maintenance schedule with upcoming platform optimizations"
      }
    ]
  },
  {
    date: "2024-02-06",
    changes: [
      { type: "added", description: "Documentation preview functionality" },
      { type: "fixed", description: "Header layout and duplicate branding" },
      { type: "improved", description: "Dashboard navigation and user experience" }
    ]
  },
  {
    date: "February 8, 2024",
    version: "1.1.1",
    changes: [
      {
        type: "improvement",
        description: "Enhanced header with conditional auth state"
      },
      {
        type: "feature",
        description: "Added documentation preview templates"
      },
      {
        type: "improvement",
        description: "Added back navigation to changelog and status pages"
      },
      {
        type: "feature",
        description: "Added mock dashboard statistics and activity"
      }
    ]
  },
  {
    date: "February 8, 2024",
    version: "1.1.0",
    changes: [
      {
        type: "feature",
        description: "Added detailed repository metrics and analytics dashboard"
      },
      {
        type: "feature",
        description: "Implemented custom API documentation templates"
      },
      {
        type: "improvement",
        description: "Enhanced repository activity tracking with visual graphs"
      },
      {
        type: "improvement",
        description: "Added trend indicators to analytics metrics"
      }
    ]
  },
  {
    date: "February 8, 2024",
    version: "1.0.2",
    changes: [
      {
        type: "feature",
        description: "Enhanced GitHub integration with repository insights"
      },
      {
        type: "feature",
        description: "Custom API documentation templates support"
      },
      {
        type: "feature",
        description: "Advanced analytics dashboard with repository metrics"
      },
      {
        type: "improvement",
        description: "Refined UI/UX with consistent beta labeling"
      }
    ]
  },
  {
    date: "February 7, 2024",
    version: "1.0.1",
    changes: [
      {
        type: "feature",
        description: "Enhanced code review interface with AI suggestions"
      },
      {
        type: "feature",
        description: "Added API documentation generator with file upload support"
      },
      {
        type: "improvement",
        description: "Updated dashboard navigation with beta tag"
      },
      {
        type: "improvement",
        description: "Implemented 'Coming Soon' team collaboration feature"
      }
    ]
  },
  {
    date: "February 6, 2024",
    version: "1.0.0",
    changes: [
      {
        type: "feature",
        description: "Initial release of Kerl platform"
      },
      {
        type: "feature",
        description: "GitHub OAuth integration for seamless authentication"
      },
      {
        type: "feature",
        description: "AI-powered code review bot"
      },
      {
        type: "feature",
        description: "Interactive API documentation generator"
      },
      {
        type: "feature",
        description: "User dashboard with repository management"
      }
    ]
  },
  {
    date: "February 5, 2024",
    version: "0.9.0-beta",
    changes: [
      {
        type: "feature",
        description: "Beta release of the platform"
      },
      {
        type: "improvement",
        description: "Enhanced UI/UX with modern design system"
      },
      {
        type: "improvement",
        description: "Optimized API documentation generation"
      },
      {
        type: "fix",
        description: "Fixed GitHub OAuth token refresh issues"
      },
      {
        type: "fix",
        description: "Resolved API playground response handling"
      }
    ]
  },
  {
    date: "February 1, 2024",
    version: "0.8.0-alpha",
    changes: [
      {
        type: "feature",
        description: "Alpha testing phase initiated"
      },
      {
        type: "feature",
        description: "Basic GitHub integration implemented"
      },
      {
        type: "improvement",
        description: "Initial AI model training for code reviews"
      },
      {
        type: "fix",
        description: "Multiple UI responsiveness issues"
      }
    ]
  }
];

const badgeVariants = {
  feature: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  improvement: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  fix: "bg-red-500/10 text-red-500 hover:bg-red-500/20"
};

export default function Changelog() {
  const [, setLocation] = useLocation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Changelog</h1>
          <Button variant="outline" onClick={() => setLocation("/")}>
            Back to Home
          </Button>
        </div>

        <div className="space-y-6">
          {changelog.map((entry) => (
            <Card key={entry.version}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Version {entry.version}</CardTitle>
                  <span className="text-sm text-muted-foreground">{entry.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {entry.changes.map((change, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Badge className={badgeVariants[change.type]}>
                        {change.type}
                      </Badge>
                      <p>{change.description}</p>
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
