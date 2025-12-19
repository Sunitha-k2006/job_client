import { Link } from 'react-router-dom';
import { FiMapPin, FiDollarSign, FiClock } from 'react-icons/fi';
import { useState } from 'react';
import ApplicationForm from './ApplicationForm';

const JobCard = ({ job }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApplySuccess = () => {
    setShowApplicationForm(false);
    alert('Application submitted successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
          <p className="text-lg text-blue-600 font-medium">{job.company}</p>
        </div>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {job.type}
        </span>
      </div>
      
      <div className="flex items-center text-gray-600 mb-2">
        <FiMapPin className="mr-2" />
        <span>{job.location}</span>
      </div>
      
      <div className="flex items-center text-gray-600 mb-4">
        <FiDollarSign className="mr-2" />
        <span>{job.salary}</span>
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-3">
        {job.description.substring(0, 150)}...
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500 text-sm">
          <FiClock className="mr-1" />
          <span>{new Date(job.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowApplicationForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Apply Now
          </button>
          <Link 
            to={`/jobs/${job._id}`}
            className="btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
      
      {showApplicationForm && (
        <ApplicationForm 
          job={job}
          onClose={() => setShowApplicationForm(false)}
          onSuccess={handleApplySuccess}
        />
      )}
    </div>
  );
};

export default JobCard;