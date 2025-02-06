import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals and small projects",
    features: [
      "Basic AI code reviews",
      "1 API documentation project",
      "Community support",
      "GitHub integration",
      "Basic security checks"
    ]
  },
  {
    name: "Pro",
    price: "$15",
    description: "Ideal for professional developers and growing teams",
    features: [
      "Unlimited API docs",
      "Advanced AI reviews",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
      "Advanced security checks",
      "Custom API themes",
      "Usage analytics"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom SLA",
      "Advanced security",
      "Training & onboarding",
      "Custom feature development",
      "Compliance assistance",
      "Priority feature requests"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that's right for you. All plans include core features with varying levels of support and capabilities.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mt-2">{plan.price}</div>
                  {plan.price !== "Custom" && <div className="text-sm text-muted-foreground">/month</div>}
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
