
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function APIDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
        <p className="text-muted-foreground">Manage your API documentation</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Documentation Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No documentation yet</h3>
            <p className="text-muted-foreground mb-4">
              Start by creating your first API documentation
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Documentation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
