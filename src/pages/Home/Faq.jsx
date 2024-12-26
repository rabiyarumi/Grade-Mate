import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
      question: "How do I create an assignment?",
      answer:
        "Simply navigate to the 'Create Assignment' section, fill out the details, and submit. Your friends will be notified immediately.",
    },
    {
      question: "Can I grade assignments submitted by others?",
      answer:
        "Yes! You can review and grade assignments submitted by your friends through the 'Grade Assignments' section.",
    },
    {
      question: "How do I track my progress?",
      answer:
        "Go to the 'Dashboard' to see detailed progress, including completed assignments and grades received.",
    },
    {
      question: "Is this application mobile-friendly?",
      answer:
        "Absolutely! Our application is designed to work seamlessly on both desktop and mobile devices for easy accessibility.",
    },
    {
      question: "Can I invite new users to the platform?",
      answer:
        "Currently, all registered users are automatically friends. However, you can share the registration link with your friends to invite them to join.",
    },
  ];
const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return (
        <section className="py-12 md:w-[85%] mx-auto">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-8"
        >
          Frequently <span className="text-accent"> Asked Questions</span>
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border rounded-lg p-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <motion.p
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600 overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Faq;