import React, { useState } from 'react';
import './FAQ.css';
import { useMediaQuery } from 'react-responsive';

const FAQ = ({ data, isMobile }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`faq ${isMobile ? 'mobile' : ''}`}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <div className="question-container">
            <div className="question">{item.question}</div>
            <div className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#9662;</div>
          </div>
          {activeIndex === index && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

const Wrapper = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const faqData = [
    {
      question: 'Who can attend?',
      answer: 'The conference is free and open to all students interested in technology, networking, and empowerment, with a focus on celebrating and supporting women in the tech field.'
    },
    {
      question: 'Where do I submit my resume?',
      answer: (
        <>
          Make sure to submit your resumes {' '}
          <a href="https://airtable.com/appV4sA3sAl1l8icn/pagDCFk7gE0DnHcMw/form" target="_blank" rel="noopener noreferrer">
            HERE!
          </a>
        </>
      )
    },
    {
      question: 'Do I need experience to participate?',
      answer: 'Not at all! You do not have to have any experience in technology or be a tech major to attend and enjoy WiTCON. WiTCON will have engaging workshops and empowering panels that will be beneficial for all future professionals interested in learning!'
    },
    {
      question: 'Do I have to stay at the event the entire time?',
      answer: 'You are free to attend the parts of the event that most interest you. But make sure to arrive by 1pm to secure your spot! After 1pm, we will open up to attendees on the waitlist and we cannot guarantee you entrance.'
    },      
    
    {
      question: 'What do I need to bring to the conference?',
  answer: (
    <ul>
      <li>- Official Identification</li>
      <li>- Note-taking Materials</li>
      <li>- Resume/Business Cards</li>
      <li>- Charged Electronic Devices</li>
      <li>- Comfortable Attire and Footwear</li>
      <li>- A Positive Attitude!</li>
    </ul>
  )
},
    {
      question: 'Who is organizing WiTCON24?',
      answer: (
        <>
          WiTCON 2024 is organized by{' '}
          <a href="https://wics.cs.fiu.edu/" target="_blank" rel="noopener noreferrer">
            Women in Computer Science FIU
          </a>
        </>
      )
    },
    {
      question: 'How can I stay updated about WiTCON?',
      answer: (
        <>
          For the latest updates, keep an eye on your email after registering, and follow our social media!{' '}
          <a href="https://linktr.ee/wicsfiu" target="_blank" rel="noopener noreferrer">
            https://linktr.ee/wicsfiu
          </a>
        </>
      )
    },
  ];

  return (
    <div className={`wrapper ${isMobile ? 'mobile' : ''}`}>
      <h2>F.A.Q</h2>
      <span className='line'></span>
      <FAQ data={faqData} isMobile={isMobile} />
    </div>
  );
};

export default Wrapper;
