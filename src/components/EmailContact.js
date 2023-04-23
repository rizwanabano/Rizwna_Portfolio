import React, { useState } from 'react';
import "./FormStyles.css"

const ContactForm=() =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `mailto:Rizwana.ShaherBano@triosstudent.com?subject=${encodeURIComponent('New Contact Form Submission')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
  };

  return (
    <div className="ContactUsForm">
    <form onSubmit={handleSubmit}>
      <label>
        Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      
      <label>
        Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      
      <label>
        Message:</label>
        <textarea rows="6"placeholder="Type your Message here" value={message} onChange={(event) => setMessage(event.target.value)} />
      
      <button type="submit" className="btn">Send</button>
    </form>
    </div>
  );
}

export default ContactForm;
