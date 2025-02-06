import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic AI code reviews",
      "1 API documentation",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "$15",
    features: [
      "Unlimited API docs",
      "Advanced AI reviews",
      "Priority support",
      "Team collaboration",
      "Custom integrations"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom SLA",
      "Advanced security",
      "Training & onboarding"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">
            Choose the plan that's right for you
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="text-3xl font-bold">{plan.price}</div>
                {plan.price !== "Custom" && <div className="text-sm text-muted-foreground">/month</div>}
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
