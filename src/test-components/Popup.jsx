import { useState, useEffect } from 'react';
import axios from 'axios';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [hasChecked, setHasChecked] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/popup/test-popup-status')
            .then(response => {
                if (response.data.exists && !sessionStorage.getItem('popupShown')) {
                    setShowPopup(true);
                    sessionStorage.setItem('popupShown', 'true');
                }
                setHasChecked(true);
            })
            .catch(error => {
                console.error('Error fetching popup status:', error);
            });
    }, []);

    const closePopup = () => setShowPopup(false);

    if (!hasChecked || !showPopup) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closePopup}>
            <div
                className="relative bg-white rounded-lg p-4 max-w-[1000px] max-h-[1000px] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={closePopup}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
                >
                    &times;
                </button>
                <img
                    src="http://localhost:5000/media/uploads/popup.webp"
                    alt="Popup"
                    className="object-contain max-w-full max-h-full"
                />
            </div>
        </div>
    );
};

export default Popup;
