import React from 'react';
import FooterList from '../components/FooterList';
import { footerLists } from '../static';
import SocialIcons from '../components/SocialIcons';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const { list1 } = footerLists;
  return (
    <footer>
      <div className="brand">
        <Link href="/" className="icon">
          <Image
            src="/logo3.png"
            alt="Picture of the author"
            width={100}
            height={100}
            quality={100}
          />
        </Link>

        <SocialIcons />
      </div>
      <FooterList title={list1.title} links={list1.links} />
      <FooterList title={list1.title} links={list1.links} />
      <FooterList title={list1.title} links={list1.links} />
    </footer>
  );
};

export default Footer;
