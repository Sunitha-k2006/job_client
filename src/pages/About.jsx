const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About JobPortal</h1>
        <p className="text-xl text-gray-600">Connecting talent with opportunity</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            We bridge the gap between talented professionals and innovative companies. 
            Our platform makes job searching simple, efficient, and successful.
          </p>
          <p className="text-gray-600">
            Whether you're a job seeker looking for your next opportunity or an employer 
            seeking top talent, we provide the tools and resources you need.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Easy application process with resume upload
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Direct connection with employers
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Wide range of job opportunities
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              User-friendly dashboard to track applications
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">Join thousands of professionals who found their dream job through our platform.</p>
        <div className="space-x-4">
          <a href="/register" className="btn-primary">Sign Up Today</a>
          <a href="/jobs" className="btn-secondary">Browse Jobs</a>
        </div>
      </div>
    </div>
  );
};

export default About;