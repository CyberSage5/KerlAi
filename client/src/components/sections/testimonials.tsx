import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Lead Developer at TechCorp",
    avatar: "SC",
    content: "Kerl has transformed our code review process. The AI insights are incredibly helpful and save us hours every week."
  },
  {
    name: "James Wilson",
    role: "CTO at StartupX",
    avatar: "JW",
    content: "The API documentation generator is a game-changer. Our docs are always up-to-date and look amazing."
  },
  {
    name: "Maria Garcia",
    role: "Engineering Manager",
    avatar: "MG",
    content: "We've seen a significant improvement in code quality since implementing Kerl. The automated best practices are invaluable."
  }
];

export default function Testimonials() {
  return (
    <div className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Loved by Developers</h2>
          <p className="text-muted-foreground">
            See what our users have to say about Kerl
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
