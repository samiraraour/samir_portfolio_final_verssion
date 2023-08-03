import React from 'react';
import './Footer.css';  // make sure you've included this
import Link from 'next/link';

function Footer() {
  return (
    <div className="footer">
      <Link className="footer-link" href="https://www.linkedin.com/in/samir-araour-68852822b/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
      <Link className="footer-link" href="https://github.com/samiraraour" target="_blank" rel="noopener noreferrer">GitHub</Link>
    </div>
  );
}

export default Footer;
