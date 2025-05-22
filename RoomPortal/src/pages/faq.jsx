import React, { useState } from 'react';

const faqs = [
  {
    question: 'How can I contact the landlord?',
    answer:
      'Once you find a room listing that interests you, you’ll see the contact details of the landlord provided on the room page. Use that information to get in touch directly.',
  },
  {
    question: 'Is registration required to browse rooms?',
    answer:
      'No, you can browse rooms without registering. However, you need to register and log in to save favorites, see rooms details, or message landlords.',
  },
{
  question: 'How do I post a room for rent?',
  answer:
    'To post a room for rent, please contact the RoomSeeker Portal team through our Contact Us page. We will guide you through the listing process and get your room added to the platform.',
},
  {
    question: 'Is RoomSeeker Portal free to use?',
    answer:
      'Yes! Browsing and posting rooms is currently free of charge. We aim to make room-hunting simple and accessible for everyone.',
  },
{
  question: 'Can I save rooms to view later?',
  answer:
    'Yes. After logging in, you can bookmark rooms you’re interested in and access them anytime from your profile or dashboard.',
},
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='max-w-4xl mx-auto py-12 px-4'>
      <h1 className='text-4xl font-bold text-center text-blue-900 mb-6'>Frequently Asked Questions</h1>
      <p className='text-center text-gray-600 mb-10'>
        Still have questions? <a href='/contact' className='text-blue-700 underline hover:text-blue-900'>Contact us</a> and we'll be happy to help.
      </p>

      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='border rounded-lg shadow-sm bg-white p-4 transition duration-300 ease-in-out'
          >
            <button
              onClick={() => toggleFAQ(index)}
              className='flex justify-between w-full text-left font-medium text-gray-800 text-lg'
            >
              {faq.question}
              <span className='text-xl'>
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <p className='mt-2 text-gray-600'>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
