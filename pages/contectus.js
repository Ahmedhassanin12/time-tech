import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { AiOutlineMobile } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';

const ContectUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  
  const { name, email, message, phone } = formData;
  return (
    <section className="contect-us">
      <div className="contect-image">
        <h2>Contect Us</h2>
      </div>
      <div className="info">
        <p className="text">
          Time Technology for Industrial Solutions owns an internationally
          accredited service center from the Frecon International Group, and the
          Industrial Control Authority as an official authority for accrediting
          industrial and engineering maintenance centers and ABB and Schneider
          companies. It also has elite experts, engineers and technicians in the
          field of:
        </p>
        <div className="message-us">
          <div className="message">
            <div className="icon">
              <FiSend />
            </div>
            <p> NO.2030 Street Barakat – El Merag – Maadi , Cairo ,Egypt</p>
          </div>
          <div className="message">
            <div className="icon">
              <AiOutlineMobile />
            </div>
            <p> (+2) 01006563389 01092484381</p>
          </div>
          <div className="message">
            <div className="icon">
              <BiMessageDetail />
            </div>
            <p> M.Elhilaly@IST-Grp.com</p>
          </div>
        </div>
      </div>
      <div className="map"></div>
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => handelChange(e)}
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => handelChange(e)}
          />
        </div>
        <div className="app__flex">
          <input
            type="tel"
            name="tel"
            placeholder="Your phone"
            value={phone}
            onChange={(e) => handelChange(e)}
          />
        </div>
        <div className="app__flex">
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={(e) => handelChange(e)}
          ></textarea>
        </div>
        <button type="button" className="p-text" >
         Send
        </button>
      </div>
    </section>
  );
};

export default ContectUs;
