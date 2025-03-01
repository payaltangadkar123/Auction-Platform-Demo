import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries or support.</p>
      </section>

      <section className="contact-info">
        <div className="info-card">
          <h2>Customer Support</h2>
          <p>Email: support@auctionplatform.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="info-card">
          <h2>Business Inquiries</h2>
          <p>Email: business@auctionplatform.com</p>
          <p>Phone: +987 654 3210</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <textarea placeholder="Your Message" className="textarea-field"></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
