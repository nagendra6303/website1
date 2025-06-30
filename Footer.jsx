import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Important
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-700 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title and Tagline */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-pink-600 mb-2">ShopStyle</h3>
          <p className="text-sm">
            Bringing fashion to your doorstep with elegance and ease.
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-10 text-sm text-gray-600">
          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-pink-600 mb-3">Contact Us</h4>
            <p><span className="font-medium">Email:</span> <a href="mailto:support@shopstyle.com" className="text-pink-500 underline">support@shopstyle.com</a></p>
            <p><span className="font-medium">Phone:</span> +91 98765 43210</p>
            <p><span className="font-medium">Address:</span><br />
              123 Fashion Street,<br />
              Hyderabad, Telangana, India
            </p>
            <p><span className="font-medium">Hours:</span> Mon - Sat: 9AM - 7PM</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-pink-600 mb-3">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
              <li><Link to="/men" className="hover:text-pink-600">Men</Link></li>
              <li><Link to="/women" className="hover:text-pink-600">women</Link></li>
              <li><Link to="/kids" className="hover:text-pink-600">kids</Link></li>
            </ul>
          </div>

          {/* Social Media & App Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-pink-600 mb-3">Follow Us</h4>
            <div className="flex justify-center gap-6 text-pink-600 text-xl mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-pink-800"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-800"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-pink-800"><FaTwitter /></a>
            </div>

            {/* App Store Links */}
            <div className="mt-6 space-y-3">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10 mx-auto sm:h-12"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 mx-auto sm:h-12"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-xs text-center text-gray-500 border-t pt-4">
          &copy; {new Date().getFullYear()} ShopStyle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
