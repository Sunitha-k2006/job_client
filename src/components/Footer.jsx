import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">JobPortal</h3>
            <p className="text-gray-300 text-sm mb-4">
              Connecting talent with opportunity. Find your dream job or hire the best candidates.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 JobPortal. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/jobs" className="text-gray-300 hover:text-white">Browse Jobs</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register" className="text-gray-300 hover:text-white">Create Account</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-white">Sign In</Link></li>
              <li><Link to="/user-dashboard" className="text-gray-300 hover:text-white">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 info@jobportal.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 New York, NY 10001</p>
              <p>🕒 Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;