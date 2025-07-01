import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Popup"; // Adjust path if needed

function PopupWrapper() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/popup/popup-state")
      .then(response => {
        if (response.data.popupEnabled) {
          setShowPopup(true);
        }
      })
      .catch(error => console.error("Error fetching popup state:", error));
  }, []);

  return (
    <>
      {showPopup && <Popup />}
    </>
  );
}

export default PopupWrapper;