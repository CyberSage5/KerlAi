
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Activity, Users, GitPullRequest, GitBranch, Star, Code, AlertCircle, CheckCircle } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

export function AnalyticsDashboard() {
  const stats = [
    {
      title: "Total Reviews",
      value: "124",
      description: "Code reviews completed",
      icon: GitPullRequest,
      trend: "+12% from last month"
    },
    {
      title: "Code Quality",
      value: "92%",
      description: "Average code quality score",
      icon: CheckCircle,
      trend: "+5% from last month"
    },
    {
      title: "Active Repos",
      value: "12",
      description: "Connected repositories",
      icon: GitBranch,
      trend: "+2 new this month"
    },
    {
      title: "Issues Found",
      value: "45",
      description: "Potential issues detected",
      icon: AlertCircle,
      trend: "-15% from last month"
    },
    {
      title: "Lines of Code",
      value: "25.4K",
      description: "Total across repositories",
      icon: Code,
      trend: "+2.1K this month"
    },
    {
      title: "AI Suggestions",
      value: "894",
      description: "Improvements proposed",
      icon: BarChart,
      trend: "+124 this week"
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
              <p className="text-xs text-green-500 mt-1">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Repository Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[200px]" config={{}}>
            <LineChart data={[
              { day: "Mon", commits: 10 },
              { day: "Tue", commits: 25 },
              { day: "Wed", commits: 15 },
              { day: "Thu", commits: 30 },
              { day: "Fri", commits: 20 },
              { day: "Sat", commits: 35 },
              { day: "Sun", commits: 45 }
            ]}>
              <XAxis dataKey="day" />
              <YAxis />
              <Line type="monotone" dataKey="commits" stroke="#8884d8" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
