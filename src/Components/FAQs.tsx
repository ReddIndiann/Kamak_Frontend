import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

const FAQAccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className="w-full text-left p-4 bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors hover:bg-gray-50"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-700">{item.question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>
    <div
      className={`transition-all duration-200 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100 pt-4 px-4' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      <p className="text-gray-600">{item.answer}</p>
    </div>
  </div>
);

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How does K.ALERT work?',
      answer: 'K.ALERT allows you to send instant SMS messages to groups and saved contacts with ease. Simply select your contacts and compose your message to get started.'
    },
    {
      id: 'faq-2',
      question: 'Can I send bulk messages?',
      answer: 'Yes! K.ALERT is designed for bulk messaging, enabling you to reach multiple recipients simultaneously without hassle.'
    },
    {
      id: 'faq-3',
      question: 'Is there a limit on message length?',
      answer: 'Each SMS message can contain up to 160 characters. For longer messages, K.ALERT automatically splits them into multiple parts.'
    },
    {
      id: 'faq-4',
      question: 'Can I schedule messages?',
      answer: 'Absolutely! You can schedule your messages to be sent at a specific date and time, ensuring timely delivery to your audience.'
    },
    {
      id: 'faq-5',
      question: 'What kind of notifications can I send?',
      answer: 'You can send various types of notifications, including alerts, reminders, promotions, and more, all tailored to your needs.'
    },
    {
      id: 'faq-6',
      question: 'Is my data secure?',
      answer: 'Yes, K.ALERT prioritizes your data security and privacy. We implement industry-standard measures to protect your information.'
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"/>
      </div>
      
      <div className="space-y-4">
        {faqData.map((item) => (
          <FAQAccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onClick={() => setOpenId(openId === item.id ? '' : item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
