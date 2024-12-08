import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is CarBNB and how does it work?",
    answer: "CarBNB is a platform that connects parking space owners with drivers who need parking. You can easily search, compare, and book parking spots in your desired location."
  },
  {
    question: "How do I use search filters?",
    answer: "You can filter parking spots by location, price range, amenities, and availability. Simply use the filter options on the search page to find your perfect spot."
  },
  {
    question: "Do I need to meet my Host?",
    answer: "In most cases, no. Many parking spots offer self-service access. However, some hosts might need to meet you to provide access cards or keys."
  },
  {
    question: "What if I need to cancel due to a problem with the listing or Host?",
    answer: "You can cancel your booking through your account. Our cancellation policy varies depending on the timing and circumstances."
  },
  {
    question: "Need more information?",
    answer: "Contact our 24/7 support team for any additional questions or concerns. We're here to help!"
  }
];

export const FAQ = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Your questions, answered</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};