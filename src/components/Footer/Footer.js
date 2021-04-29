import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="content" id="contact-me">
      <ul className="references">
        <li>
          Email:
          <a href="mailto:mcolumbusua21@gmail.com"> mcolumbusua21@gmail.com</a>
        </li>
        <li>
          Phone Number:<a href="tel:847-800-3148">(847)800-3148</a>
        </li>
        <li>
          GitHub:
          <a href="https://github.com/mcolumbusua21" target="_blank"> 
            @MarkColumbus
          </a>
        </li>
        <li id="linkedin"> 
          LinkedIn:
          <a href="https://www.linkedin.com/in/MarkColumbus85"> Mark Columbus</a>
        </li>
        <li>
          Resume:<a href="css/images/Resume.pdf"> Mark Columbus</a>
        </li>
      </ul>
      <a className="footer" href="#top">Back to top</a>
    </div>
   
  );
}

export default Footer;
