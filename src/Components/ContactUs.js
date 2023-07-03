import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from './images/contact/contact-illustration.gif';
import './styles/ContactUs.css';

function ContactUs() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .sendForm('service_i5rqd9s', 'template_woezm9d', form.current, 'Y1lAR7WJoilJOhm0F')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className='contactUsTop'></div>
    <div className="contact-container">
      <div className="contact-gif-container p-4">
        <img src={contact} alt="no gif" className="contact-gif" />
      </div>
      <div className="contact-form-container">
        <div className="mt-5 mx-3 pt-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >
            <label htmlFor="mailid" className="form-label">Email</label>
            <input type="email" name="mailid" id="mailid" className="form-input" />
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" name="subject" id="subject" className="form-input" />
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              id="message"
              className="form-textarea"
            />
            <input
              type="submit"
              value="Send"
              className="form-submit"
            />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
