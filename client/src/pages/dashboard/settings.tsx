
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Settings, Bell, Shield, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated"
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your preferences</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Notifications</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="review-notifications">Code Review Alerts</Label>
            <Switch id="review-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="security-notifications">Security Alerts</Label>
            <Switch id="security-notifications" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Github className="h-5 w-5 text-primary" />
            <CardTitle>GitHub Integration</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Button onClick={() => toast({
            title: "Coming Soon",
            description: "GitHub integration will be available soon"
          })}>
            Connect GitHub
          </Button>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Save Changes
      </Button>
    </div>
  );
}
