import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { HiMenuAlt2 } from 'react-icons/hi';
import SocialIcons from '../components/SocialIcons';
const Header = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <header className="header">
      <Link href="/" className="icon-sm">
        <Image
          src="/timetechnology.png"
          alt="Picture of the author"
          width={60}
          height={60}
          quality={100}
        />
      </Link>
      <div className={`header_content ${show ? 'show slide-right' : 'hide'}`}>
        <div className="close" onClick={() => setShow(false)}>
          <IoIosCloseCircleOutline />
        </div>
        <div className="contact_navbar">
          <SocialIcons />
          <Link href="/" className="icon">
            <Image
              src="/timetechnology.png"
              alt="Picture of the author"
              width={100}
              height={100}
              quality={100}
            />
          </Link>
          <div className="contact_links">
            <div className="link_icons">
              <FiMail />
              <a href="maito:name@timetechnology.com">
                name@timetechnology.com
              </a>
            </div>
            <div className="link_icons">
              <BsTelephone />
              <a href="tel:+201006563389">(+2)01006563389</a>
            </div>
          </div>
        </div>
        <nav className="header_navbar">
          <ul>
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/Services">Services</Link>
            </li>
            <li>
              <Link href="/Products">Products</Link>
            </li>
            <li>
              <Link href="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contectus">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="toggle_menu" onClick={() => setShow(true)}>
        <HiMenuAlt2 />
      </div>
    </header>
  );
};

export default Header;
