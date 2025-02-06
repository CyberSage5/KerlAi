
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Activity, Users, GitPullRequest, GitBranch, Star } from "lucide-react";

export function AnalyticsDashboard() {
  const stats = [
    {
      title: "Total Reviews",
      value: "124",
      description: "Code reviews completed",
      icon: GitPullRequest
    },
    {
      title: "Active Users",
      value: "45",
      description: "Team members",
      icon: Users
    },
    {
      title: "Review Time",
      value: "15m",
      description: "Average review time",
      icon: Activity
    },
    {
      title: "Active Repos",
      value: "12",
      description: "Connected repositories",
      icon: GitBranch
    },
    {
      title: "Stars",
      value: "256",
      description: "Total repository stars",
      icon: Star
    },
    {
      title: "Suggestions",
      value: "894",
      description: "AI suggestions made",
      icon: BarChart
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
