import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TestComponent = () => {
  const { id } = useParams(); // Retrieve the dynamic id from the URL
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://localhost:3000/data/read/profiles/${id}`);
        if (!response.ok) {
          throw new Error('Profile not found');
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-blue-500">Loading...</div>;
  }

  if (error || !profile) {
    return <div className="text-center py-20 text-red-500">Profile not found.</div>;
  }

  return (
    <div id="top" className="lg:py-10">
      <div className='px-10 lg:px-40'>
        <div className='md:grid md:grid-flow-row md:grid-cols-4 gap-5'>
          {/* Profile Image */}
          <div>
            <img
              className='hidden lg:block rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-blue-900/80 drop-shadow-2xl'
              src={profile.src}
              alt={profile.name}
            />
          </div>

          {/* Profile Details */}
          <div className='text-end md:col-span-3'>
            <div>
              {/* Name and Title */}
              <div className="text-4xl md:text-6xl font-black text-blue-700 py-10 lg:py-0">
                <h1 className='pr-5 border-r-4 border-blue-500'>
                  “ <span className="text-xl md:text-2xl lg:text-4xl font-black text-blue-700 pt-2">
                  {profile.name}
                </span>
                </h1>
                <h3 className="text-xs md:text-sm lg:text-xl font-black text-blue-500 pr-5 border-r-4 border-blue-500">
                {profile.designation}
              </h3>
              </div>

              {/* Profile Image - below larger screens */}
              <div className='flex justify-center items-center'>
                <img
                  className='max-w-56 lg:hidden rounded-tl-3xl rounded-br-3xl shadow-2xl drop-shadow-2xl'
                  src={profile.src}
                  alt={profile.name}
                />
              </div>
            </div>

            {/* Description */}
            <div className='flex flex-col text-sm font-medium py-5 gap-y-5 text-black/50 lg:pl-10 text-center lg:text-left'>
              {profile.description.map((desc, index) => (
                <span key={index}>{desc}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
