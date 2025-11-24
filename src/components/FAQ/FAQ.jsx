'use client';
import React from "react";
import { motion } from "motion/react";

const faqs = [
  {
    question: "What is Jobify?",
    answer: "Jobify is a Dhaka-born platform to post, discover, claim, and complete tasks in real time."
  },
  {
    question: "How do I post a task?",
    answer: "Log in, click 'Post Task,' fill title, description, budget, deadline, then publish."
  },
  {
    question: "Can anyone claim my task?",
    answer: "Yes, but you must approve the claim before they start."
  },
  {
    question: "Is Jobify free to use?",
    answer: "Yes, posting and claiming tasks is completely free with no hidden fees."
  },
  {
    question: "How do I get paid after completing a task?",
    answer: "Payment is handled directly between you and the poster outside the platform."
  }
];

const FAQ = () => {
  return (
    <section className="my-30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col justify-center items-center mb-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#244034] mb-2`}
          >
            FAQ
          </h2>

          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>


        <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            className="collapse collapse-plus bg-[#244034] rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-semibold text-white peer-checked:text-[#D2F34C]">
              {item.question}
            </div>
            <div className="collapse-content text-gray-400">
              <p>{item.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FAQ;