import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const Carousel = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Fade-in effect on load
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay to ensure smooth appearance
  }, []);

  return (
    <div
      className={`relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-b-3xl overflow-hidden transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for text */}
      <div className="flex flex-col bg-black/30 relative h-full font-roboto">
        <div className="flex flex-col relative justify-center items-start pl-20 pt-10">
          <p className="border-l-8 border-blue-900 text-white text-4xl md:text-7xl font-bold uppercase pl-4">
            {image.title}</p>
            <p className='border-l-8 border-blue-900 text-white text-2xl md:text-4xl font- uppercase pl-4 md:pt-2 tracking-widest'>
              {image.intro} <br/>
              <span className='font-semibold italic text-2xl md:text-4xl'>{image.specialnote}</span>
            </p>
        </div>
        <div className="flex justify-center pt-10">
          <p className='text-white text-lg md:text-2xl font-thin text-center uppercase tracking-widest border-b-2 border-amber-400 pb-0'>{image.description}</p>
          </div>
      </div>
    </div>
  );
};

// Define prop types for validation
Carousel.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    specialnote: PropTypes.string.isRequired,
  }).isRequired,
};

export default Carousel;
