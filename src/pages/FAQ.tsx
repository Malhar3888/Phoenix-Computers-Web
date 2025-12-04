import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer a wide range of IT courses including Python Full Stack, Java Full Stack, MERN Stack, Data Science, Machine Learning, Web Designing, Tally Prime + GST, Computer Basics, Advanced Excel, Graphic Designing, and more. Visit our Courses page for the complete list.",
  },
  {
    question: "What is the duration of the courses?",
    answer: "Course duration varies from 1 month (for basic courses like Computer Basics) to 6 months (for comprehensive courses like Python Full Stack or Data Science). Each course page has detailed duration information.",
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, we provide 100% placement assistance to all our students. We have tie-ups with leading IT companies and regularly conduct placement drives. Our placement rate is over 95%.",
  },
  {
    question: "What are the batch timings?",
    answer: "We offer flexible batch timings including Morning batches (9 AM - 12 PM), Afternoon batches (2 PM - 5 PM), and Evening batches (6 PM - 9 PM). Weekend batches are also available for working professionals.",
  },
  {
    question: "Do you provide certificates?",
    answer: "Yes, upon successful completion of any course, students receive an industry-recognized certificate from Phoenix Computers. Some courses also prepare you for international certifications.",
  },
  {
    question: "What is the fee structure?",
    answer: "Fee varies based on the course duration and complexity. We offer affordable pricing with easy installment options. Contact us or visit our office for detailed fee information.",
  },
  {
    question: "Can I attend a demo class before enrolling?",
    answer: "Yes, we encourage prospective students to attend a free demo class before enrolling. This helps you understand our teaching methodology and decide if the course is right for you.",
  },
  {
    question: "Do you provide internship opportunities?",
    answer: "Yes, we have dedicated internship programs where students can work on live projects. This gives them real-world experience and enhances their portfolio.",
  },
  {
    question: "What is the teaching methodology?",
    answer: "We follow a 100% practical-oriented approach. Our methodology includes hands-on projects, real-world case studies, live coding sessions, and regular assessments to ensure effective learning.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer: "Absolutely! We have courses for all levels - from complete beginners to advanced learners. Our Computer Basics course is perfect for those new to computers, while advanced courses are available for experienced learners.",
  },
];

const FAQ = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our courses and institute
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? Feel free to contact us!
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-primary to-purple-600">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
