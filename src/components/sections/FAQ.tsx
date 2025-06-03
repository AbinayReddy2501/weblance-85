
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A basic website typically takes 2-4 weeks, while more complex applications can take 8-16 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance packages. All our projects include initial support, and we provide ongoing maintenance plans to keep your digital assets secure and up-to-date.'
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer: 'Absolutely! We work closely with your existing brand guidelines and can help enhance them if needed. Our goal is to create digital experiences that perfectly align with your brand identity.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Node.js, Python, and mobile development for iOS and Android. We always choose the best technology stack for your specific project needs.'
    },
    {
      question: 'Do you offer e-commerce solutions?',
      answer: 'Yes, we develop comprehensive e-commerce solutions including custom shopping carts, payment integration, inventory management, and multi-platform compatibility. We work with various e-commerce platforms and can build custom solutions.'
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow strict quality assurance processes including code reviews, testing protocols, and client feedback loops. Every project goes through multiple rounds of testing before delivery to ensure it meets our high standards.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers. Here are some of the most common questions we receive from our clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
