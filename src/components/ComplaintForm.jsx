import { useState } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import Loader from './Loader'; // Import the Loader component
import PropTypes from 'prop-types';

//To validate email contains '@' sign
const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//To validate mobile number contains 10 digits
const isValidMobileNumber = (mobileNumber) => {
  return String(mobileNumber).match(/^\d{10}$/);
};

//Common validation for user inputs
const validateData = ({ name, address, addressCity, email, mobile, employeeName, department, branch, title }) => {
  const errorObj = {};
  if (!name) errorObj.name = "Please provide your name";
  if (!email) {
    errorObj.email = "Please provide your email";
  } else if (!isValidEmail(email)) {
    errorObj.email = "Please provide a valid email address";
  }
  if (!mobile) {
    errorObj.mobile = "Please provide your mobile number";
  }
  else if (!isValidMobileNumber(mobile)){
    errorObj.mobile = "Please provide a valid mobile number with 10 digits."
  }
  if (!employeeName) errorObj.employeeName = "Please provide employee's name";
  if (!department) errorObj.department = "Please provide department name";
  if (!branch) errorObj.branch = "Please provide branch name";
  if (!title) errorObj.title = "Please select a title";
  if (!address) errorObj.address = "Please provide your address";
  if (!addressCity) errorObj.addressCity = "Please your nearest city";
  return errorObj;
};



const ComplaintForm = () => {
  const { t } = useTranslation();
  const inquiryForm = t("inquiryForm", { returnObjects: true });

  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  //This popup component use to display status of the submited complaint
  const Popup = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-40">
        <div className="bg-white p-6 rounded-lg text-center">
          <p>{message}</p>
          <button aria-label='Close Button' onClick={onClose} className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md">
            {inquiryForm.close_btn}
          </button>
        </div>
      </div>
    );
  };

  // Props validation
Popup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //To handle data navigation using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObj = validateData(formData);
    setFormErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      setIsLoading(true); // Show loader
      emailjs
        .send(
          "service_x5osrbi", // Replace with your EmailJS Service ID
          "template_j39up1n", // Replace with your EmailJS Template ID
          {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            message: formData.message,
            employeeName: formData.employeeName,
            department: formData.department,
            branch: formData.branch,
            address: formData.address,
            addressCity: formData.addressCity,
          },
          "XFV9q5aHEd81dBg34" // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            setPopupMessage(inquiryForm.response_pass, response); // Success message
            setShowPopup(true); // Show popup
            setFormData({ type: "Inquiry" }); // Clear the form data
          },
          (err) => {
            setPopupMessage(inquiryForm.response_fail); // Failure message
            setShowPopup(true); // Show popup
            console.error("FAILED...", err);
          }
        )
        .finally(() => {
          setIsLoading(false); // Hide loader
        });
    }
  };

  //Clear button process
  const handleClear = () => {
    setFormData({ type: "Inquiry" });
    setFormErrors({});
  };

  //Common Style for fields
  const inputClasses = (field) => (
    `block w-full sm:text-sm px-3 py-2 bg-white border border-slate-300 shadow-sm rounded-md
    placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    ${formErrors[field] ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500" : ""}`
  );

  //Common style for error handling
  const fieldErrorClasses = (field) => (
    `mt-2 ${formErrors[field] ? "visible" : "invisible"} text-pink-600 text-sm`
  );

  return (
    <div id='main-container' className='justify-center relative bg-bgdesign bg-cover text-roboto px-10 py-10 lg:px-40'>
      {/* Background Fading layer */}
      <div className='absolute inset-0 bg-white/80 bg-cover'></div>
      {/* Header section */}
      <div className='relative z-10' data-aos="fade-up">
        <h1 className='border-l-4 border-amber-400 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-700'> {inquiryForm.title} </h1>
      </div>
      
      {/* Body section */}
      <div className="z-10 relative max-w-lg p-4 md:max-w-4xl mx-auto" data-aos="zoom-in">
        <form onSubmit={handleSubmit} className="md:flex lg:flex-col md:gap-4">

        {/*Customer Details Section */}
        <div className='text-xs md:text-base lg:text-xl text-blue-700 font-medium'>{inquiryForm.customer_details}</div>
          <div className='flex flex-row gap-10'>
 
          <div className="md:w-1/2">

          <div className="mb-4">
            <label htmlFor="title" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.titleLabel} {/* Add this key in the `inquiryForm` JSON for "Title" */}
            </label>
            <select
                name="title"
                id="title"
                className={`${inputClasses("title")}`} 
                value={formData.title || ''} 
                onChange={handleChange}
            >
                <option value="" disabled>{inquiryForm.titlePlaceholder}</option> {/* Add a placeholder in your translations */}
                {inquiryForm.titleOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
            <p className={fieldErrorClasses("title")}>{formErrors.title}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label2}
              </label>
              <input type="text" name="mobile" id="mobile" className={inputClasses("mobile")} placeholder={inquiryForm.field2} value={formData.mobile || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("mobile")}>{formErrors.mobile}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label8}
              </label>
              <input type="text" name="address" id="address" className={inputClasses("address")} placeholder={inquiryForm.field8} value={formData.address || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("address")}>{formErrors.address}</p>
            </div>

          </div>

          <div className="md:w-1/2">
        
          <div className="mb-4">
              <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label1}
              </label>
              <input type="text" name="name" id="name" className={inputClasses("name")} placeholder={inquiryForm.field1} value={formData.name || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("name")}>{formErrors.name}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label3}
              </label>
              <input type="email" name="email" id="email" className={inputClasses("email")} placeholder={inquiryForm.field3} value={formData.email || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("email")}>{formErrors.email}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="addressCity" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label9}
              </label>
              <input type="text" name="addressCity" id="addressCity" className={inputClasses("addressCity")} placeholder={inquiryForm.field9} value={formData.addressCity || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("addressCity")}>{formErrors.addressCity}</p>
            </div>

          </div>
          </div>
            

            {/*Employee Section */}
        <div className='text-xs md:text-base lg:text-xl text-blue-700 font-medium'>{inquiryForm.employee_details}</div>

          <div className='flex flex-row gap-10'>

            <div className="md:w-1/2">

             <div className="mb-4">
              <label htmlFor="employeeName" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label5}
              </label>
              <input type="text" name="employeeName" id="employeeName" className={inputClasses("employeeName")} placeholder={inquiryForm.field5} value={formData.employeeName || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("employeeName")}>{formErrors.employeeName}</p>
            </div>

            <div className="mb-4">
                <label htmlFor="branch" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                    {inquiryForm.label7}
                </label>
                <input type="text" name="branch" id="branch" className={inputClasses("branch")} placeholder={inquiryForm.field7} value={formData.branch || ''} onChange={handleChange} />
                <p className={fieldErrorClasses("branch")}>{formErrors.branch}</p>
            </div>

            </div>

            <div className="md:w-1/2">

                <div className="mb-4">
                <label htmlFor="department" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                    {inquiryForm.label6}
                </label>
                <input type="text" name="department" id="department" className={inputClasses("department")} placeholder={inquiryForm.field6} value={formData.department || ''} onChange={handleChange} />
                <p className={fieldErrorClasses("department")}>{formErrors.department}</p>
                </div>

            </div>

            </div>

          <div className="mb-4">
              <label htmlFor="message" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label4}
              </label>
              <textarea name="message" id="message" className={inputClasses("message")} placeholder={inquiryForm.field4} rows="6" value={formData.message || ''} onChange={handleChange} 
                style={{ height: 'calc(3 * 3.5rem + 2rem)' }} // Adjust the height here
              />
              <p className={fieldErrorClasses("message")}>{formErrors.message}</p>
            </div>

        </form>

        <div className="text-right mt-4 flex justify-end gap-5">
          <button onClick={handleClear} type="button" className="bg-gray-500 hover:bg-gray-600 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            {inquiryForm.button1}
          </button>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            {inquiryForm.button2}
          </button>
        </div>

      </div>

      {isLoading && <Loader duration={2000}/>}
      {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}
    </div>
  );
};


export default ComplaintForm;
