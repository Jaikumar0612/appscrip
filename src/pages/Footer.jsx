import React from 'react';
import '../Styles/Footer.css';
import {InstagramIcon, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="contact-info">
          <p>CONTACT US</p>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <p>CURRENCY</p>
          <div className='usd-icon'>
          <img src="/usd.svg" alt="" width={20} height={20} />
          <p>+USD</p>
          </div>
          <h6>Transactions will be completed in Euros...</h6>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="links">
          <div className="about-links">
            <h5>mettā muse</h5>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="quick-links">
            <h5>QUICK LINKS</h5>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="social-payment">
            <h5>FOLLOW US</h5>
          <div className="social-media">
            <a href="#"><InstagramIcon /></a>
            <a href="#"><Linkedin /></a>
          </div>
          <div className="payment-methods">
            <h5>mettā muse ACCEPTS</h5>
            <div className="payment-icons">
              <img src="/googlepay.png" alt="Google Pay" />
              <img src="/paypal.jpg" alt="PayPal" />
              <img src="/Mastercard.png" alt="Mastercard" />
              <img src="/amex.jpg" alt="Amex" />
              <img src="/applepay.webp" alt="Apple Pay" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
