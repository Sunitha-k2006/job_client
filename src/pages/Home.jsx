import { Link } from 'react-router-dom';
import { FiSearch, FiBriefcase, FiUsers } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with top employers and discover opportunities that match your skills and aspirations.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/jobs" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
              Browse Jobs
            </Link>
            <Link to="/register" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose HireMe?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make job searching simple and effective with our comprehensive platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSearch className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Job Search</h3>
              <p className="text-gray-600">
                Find relevant jobs quickly with our advanced search and filtering options.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBriefcase className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Opportunities</h3>
              <p className="text-gray-600">
                Access jobs from top companies across various industries and experience levels.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Network</h3>
              <p className="text-gray-600">
                Connect with employers and build your professional network for career growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of job seekers who have found their perfect match through our platform.
          </p>
          <Link to="/register" className="btn-primary text-lg px-8 py-3">
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;