import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const PersonalProfile = ({ type }) => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let response;
        if (type === "bod") {
          response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/profile/getProfiles/bod`);
        } else if (type === "coop") {
          response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/profile/getProfiles/coop`);
        }

        // Find the specific profile by ID
        const profiles = response.data || [];
        const specificProfile = profiles.find(p => p.id === parseInt(profileId));
        
        if (specificProfile) {
          setProfile(specificProfile);
        } else {
          setError('Profile not found.');
        }

      } catch (err) {
        console.log(err.message); // Log the response to check the data
        setError('Profile not found.');
      } finally {
        setLoading(false);
      }
    };

    if (profileId) {
    fetchProfile();
    } else {
      setError('No profile ID provided.');
      setLoading(false);
    }

  }, [profileId, type, i18n.language]);

  if (loading) return <div className="text-center py-20 text-blue-500">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!profile) return null;

  return (
    <div id="top" className="lg:py-10">
      <div className='px-10 lg:px-40'>
        <div className='md:grid md:grid-flow-row md:grid-cols-4 gap-5'>
          {/* Profile Image */}
          <div>
            <img
              className='hidden lg:block rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-blue-900/80 drop-shadow-2xl'
              src={`${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/${type}/${profile.profile_picture}.webp`}
              alt={profile?.[`name_${i18n.language}`]}
            />
          </div>

          {/* Profile Details */}
          <div className='text-end md:col-span-3'>
            <div>
              <div className="text-4xl md:text-6xl font-black text-blue-700 py-10 lg:py-0">
                <h1 className='pr-5 border-r-4 border-blue-500'>
                  “ <span className="text-xl md:text-2xl lg:text-4xl font-black text-blue-700 pt-2">
                    {profile?.[`name_${i18n.language}`]}
                  </span>
                </h1>
                <h3 className="text-xs md:text-sm lg:text-xl font-black text-blue-500 pr-5 border-r-4 border-blue-500">
                  {profile?.[`designation_${i18n.language}`]}
                </h3>
              </div>

              {/* Profile Image - below larger screens */}
              <div className='flex justify-center items-center'>
                <img
                  className='max-w-56 lg:hidden rounded-tl-3xl rounded-br-3xl shadow-2xl drop-shadow-2xl'
                  src={`${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/${type}/${profile.profile_picture}.webp`}
                  alt={profile?.[`name_${i18n.language}`]}
                />
              </div>
            </div>

            {/* Description */}
            <div className='flex flex-col text-sm font-medium py-5 gap-y-5 text-black/50 lg:pl-10 text-center lg:text-left'>
              {profile?.[`description_${i18n.language}`] && 
                (Array.isArray(profile[`description_${i18n.language}`]) 
                  ? profile[`description_${i18n.language}`].map((desc, index) => (
                      <span key={index}>{desc}</span>
                    ))
                  : JSON.parse(profile[`description_${i18n.language}`]).map((desc, index) => (
                      <span key={index}>{desc}</span>
                    ))
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop validation
PersonalProfile.propTypes = {
  type: PropTypes.string.isRequired, // type should be a string and is required
};

export default PersonalProfile;
