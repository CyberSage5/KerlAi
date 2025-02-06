import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI code review work?",
    answer: "Our AI-powered code review bot automatically analyzes pull requests for code quality, best practices, and potential issues. It provides detailed feedback and suggestions directly in your PR."
  },
  {
    question: "Can I use Kerl with private repositories?",
    answer: "Yes! Kerl works with both public and private repositories. Your code security is our top priority, and we follow industry best practices for data protection."
  },
  {
    question: "What programming languages are supported?",
    answer: "Kerl supports all major programming languages including JavaScript, TypeScript, Python, Java, Go, and more. Our AI model is trained on a diverse set of codebases."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply sign up with your GitHub account, authorize Kerl to access your repositories, and you're ready to go. Our onboarding process will guide you through the setup."
  }
];

export default function FAQ() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Got questions? We've got answers
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
