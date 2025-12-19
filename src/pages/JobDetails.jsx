import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiMapPin, FiDollarSign, FiClock, FiUser } from 'react-icons/fi';
import { jobsAPI, applicationsAPI } from '../services/api';
import Loader from '../components/Loader';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const response = await jobsAPI.getJobById(id);
      setJob(response.data);
    } catch (error) {
      setError('Failed to fetch job details');
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async () => {
    if (!token) {
      navigate('/login');
      return;
    }

    setApplying(true);
    setError('');
    setSuccess('');

    try {
      await applicationsAPI.applyForJob(id);
      setSuccess('Application submitted successfully!');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to apply for job');
    } finally {
      setApplying(false);
    }
  };

  if (loading) return <Loader />;

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-500">Job not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
            <p className="text-xl text-blue-600 font-medium">{job.company}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            {job.type}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <FiMapPin className="mr-2" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FiDollarSign className="mr-2" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FiClock className="mr-2" />
            <span>Posted {new Date(job.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {job.description}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {job.requirements}
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 border-t">
          <div className="flex items-center text-gray-600">
            <FiUser className="mr-2" />
            <span>Posted by {job.createdBy?.name}</span>
          </div>
          
          {token && user.role === 'user' && (
            <button
              onClick={handleApply}
              disabled={applying || success}
              className={`px-6 py-3 rounded-lg font-medium ${
                success 
                  ? 'bg-green-600 text-white cursor-not-allowed' 
                  : 'btn-primary'
              }`}
            >
              {applying ? 'Applying...' : success ? 'Applied!' : 'Apply Now'}
            </button>
          )}
          
          {!token && (
            <button
              onClick={() => navigate('/login')}
              className="btn-primary"
            >
              Login to Apply
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;