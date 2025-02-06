
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function Team() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Team</h1>
        <p className="text-muted-foreground">Manage your team members</p>
      </div>

      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <Users className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
          <p className="text-muted-foreground">
            Team management features will be available soon
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
