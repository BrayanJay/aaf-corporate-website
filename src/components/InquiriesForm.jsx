import React, { useState } from 'react';

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateData = ({ username, email, mobile }) => {
  const errorObj = {};

  if (!username) errorObj.username = "Please provide the username";

  if (!email) {
    errorObj.email = "Please provide the email";
  } else if (!isValidEmail(email)) {
    errorObj.email = "Please provide a valid email address..";
  }

  if (!mobile) {
    errorObj.mobile = "Please provide the mobile number";
  }

  return errorObj;
};

const InquiriesForm = () => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObj = validateData(formData);
    setFormErrors(errorObj);
    if (Object.keys(errorObj).length === 0) alert("Successful");
  };

  const handleClear = () => {
    setFormData({});
    setFormErrors({});
  };

  const inputClasses = (field) => (
    `block w-full sm:text-sm px-3 py-2 bg-white border border-slate-300 shadow-sm rounded-md
    placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    ${formErrors[field] ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500" : ""}`
  );

  const fieldErrorClasses = (field) => (
    `mt-2 ${formErrors[field] ? "visible" : "invisible"} text-pink-600 text-sm`
  );

  return (
    <div className='justify-center relative bg-bgdesign bg-cover text-roboto'>
      <div className='absolute inset-0 bg-white/80 bg-cover'></div>
      <div className='relative pl-40 pr-40 z-10' data-aos="fade-up"> {/* Added pl-40 and pr-40 here */}
        <h1 className='border-l-4 border-amber-400 pl-5 pr-5 text-4xl font-semibold text-blue-700'> Get in Touch with Us Today </h1>
        <p className='border-l-4 border-amber-400 pl-5 pr-5 pt-1 text-xl font-md text-blue-500 italic'>Bringing Financial Solutions Closer to You</p>
      </div>
      <div className="z-10 relative max-w-lg p-4 md:max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="md:flex md:gap-4">
          <div className="md:w-1/2">
            <div className="mb-4">
              <label htmlFor="username" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                Username
              </label>
              <input type="text" name="username" id="username" className={inputClasses("username")} placeholder="username.." value={formData.username || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("username")}>{formErrors.username}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                Mobile Number
              </label>
              <input type="text" name="mobile" id="mobile" className={inputClasses("mobile")} placeholder="mobile number.." value={formData.mobile || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("mobile")}>{formErrors.mobile}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                Email
              </label>
              <input type="email" name="email" id="email" className={inputClasses("email")} placeholder="you@example.com" value={formData.email || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("email")}>{formErrors.email}</p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="mb-4">
              <label htmlFor="message" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea name="message" id="message" className={inputClasses("message")} placeholder="message.." rows="6" value={formData.message || ''} onChange={handleChange} 
                style={{ height: 'calc(3 * 3.5rem + 2rem)' }} // Adjust the height here
              />
              <p className={fieldErrorClasses("message")}>{formErrors.message}</p>
            </div>
          </div>
        </form>

        <div className="text-right mt-4 flex justify-end gap-5">
          <button onClick={handleClear} type="button" className="bg-gray-500 hover:bg-gray-600 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            Clear
          </button>
          <button onClick={handleSubmit} className="bg-sky-500 hover:bg-sky-600 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiriesForm;
