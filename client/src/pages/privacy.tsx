import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <Card>
        <CardContent className="prose prose-gray dark:prose-invert pt-6">
          <h2>Your Privacy Matters</h2>
          <p>At Kerl, we take your privacy seriously. This policy outlines how we collect, use, and protect your data.</p>
          
          <h3>Information We Collect</h3>
          <ul>
            <li>GitHub account information (when you sign in with GitHub)</li>
            <li>Repository access permissions</li>
            <li>Code review data and API documentation</li>
          </ul>
          
          <h3>How We Use Your Data</h3>
          <p>We use your data to:</p>
          <ul>
            <li>Provide automated code reviews</li>
            <li>Generate API documentation</li>
            <li>Improve our services</li>
          </ul>
          
          <h3>Data Protection</h3>
          <p>We implement industry-standard security measures to protect your data. Your code and documentation are encrypted both in transit and at rest.</p>
          
          <h3>Contact Us</h3>
          <p>If you have any questions about our privacy policy, please contact us at privacy@kerl.dev</p>
        </CardContent>
      </Card>
    </div>
  );
}
