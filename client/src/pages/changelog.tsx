import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Changelog</h1>

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