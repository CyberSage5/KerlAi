
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  LayoutDashboard,
  Code2,
  FileText,
  Settings,
  Users,
  BarChart,
  Home,
  GitBranch
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: GitBranch, label: "Code Reviews", href: "/dashboard/reviews" },
  { icon: FileText, label: "API Docs", href: "/dashboard/docs" },
  { icon: Users, label: "Team", href: "/dashboard/team" },
  { icon: BarChart, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" }
];

export default function Sidebar() {
  const [location, setLocation] = useLocation();

  return (
    <div className="w-64 border-r h-screen bg-muted/50">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6">Dashboard</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2",
                  location === item.href && "bg-muted"
                )}
                onClick={() => setLocation(item.href)}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

// Only keeping CodeReviewPage and UserSettings placeholders
function CodeReviewPage() {
  return <div>Code Review Page Content</div>;
}

function UserSettings() {
  return <div>User Settings Content</div>;
}
