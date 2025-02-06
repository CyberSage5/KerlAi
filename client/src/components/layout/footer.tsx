import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <Separator />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Kerl</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered development assistant for modern teams
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Documentation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-sm text-muted-foreground">
          © 2024 Kerl. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
