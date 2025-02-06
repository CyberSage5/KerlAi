import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <Card>
        <CardContent className="prose prose-gray dark:prose-invert pt-6">
          <h2>Agreement to Terms</h2>
          <p>By accessing or using Kerl, you agree to be bound by these terms and conditions.</p>
          
          <h3>Use License</h3>
          <ul>
            <li>You may use Kerl for your development workflow</li>
            <li>You must not use Kerl for any illegal purposes</li>
            <li>You are responsible for maintaining the security of your account</li>
          </ul>
          
          <h3>Service Availability</h3>
          <p>While we strive for 100% uptime, we cannot guarantee uninterrupted access to our services. Check our status page for real-time updates.</p>
          
          <h3>Intellectual Property</h3>
          <p>Your code remains your property. We only access and analyze code to provide our services.</p>
          
          <h3>Updates to Terms</h3>
          <p>We may update these terms from time to time. Continued use of Kerl after changes constitutes acceptance of new terms.</p>
        </CardContent>
      </Card>
    </div>
  );
}
