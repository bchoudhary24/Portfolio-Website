import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form 
        className="contact-form"
        action="https://formsubmit.co/cbhumika199@gmail.com" 
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;