import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiUser, FiFileText, FiSettings } from 'react-icons/fi';
import { applicationsAPI } from '../services/api';
import Loader from '../components/Loader';
import ProfileForm from '../components/ProfileForm';

const UserDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

  const fetchAppliedJobs = async () => {
    try {
      const response = await applicationsAPI.getMyApplications();
      setAppliedJobs(response.data);
    } catch (error) {
      setError('Failed to fetch applied jobs');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiUser className="text-2xl text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user.name}!</h1>
                <p className="text-gray-600">Manage your job applications and profile</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 rounded ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                Profile
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <>
            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Link 
                to="/jobs" 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiBriefcase className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Browse Jobs</h3>
                    <p className="text-gray-600">Find new opportunities</p>
                  </div>
                </div>
              </Link>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FiFileText className="text-xl text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Applications</h3>
                    <p className="text-gray-600">{appliedJobs.length} jobs applied</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('profile')}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FiSettings className="text-xl text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Profile</h3>
                    <p className="text-gray-600">Update your info</p>
                  </div>
                </div>
              </button>
            </div>
          </>
        )}

        {activeTab === 'dashboard' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">My Applications</h2>
            
            {loading ? (
              <Loader />
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            ) : appliedJobs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">You haven't applied to any jobs yet.</p>
                <Link to="/jobs" className="btn-primary">
                  Browse Jobs
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {appliedJobs.map((job) => (
                  <div key={job._id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.company}</p>
                        <p className="text-gray-600 flex items-center mt-1">
                          <FiBriefcase className="mr-1" />
                          {job.location} • {job.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                          Applied
                        </span>
                        <p className="text-gray-500 text-sm mt-1">
                          {new Date(job.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'profile' && (
          <ProfileForm user={user} />
        )}
      </div>
    </div>
  );
};

export default UserDashboard;