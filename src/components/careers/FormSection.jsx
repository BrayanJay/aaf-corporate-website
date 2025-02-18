import img from '../../media/careersPage/person.png';

function FormSection() {
  return (
    <div className='flex flex-col items-center gap-5 drop-shadow-lg'>
      <div className='grid grid-cols-1 lg:grid-cols-3 w-full'>
      <div className='lg:hidden md:flex justify-end pl-5 drop-shadow-lg'>
          <img className="w-full h-auto" src={img} alt="Person" />
      </div>
        <div className='flex flex-col m-5'>
          <form>
            <div className="space-y-8">
              <div className="border-b border-gray-900/10 pb-2">
                <div className="flex flex-col space-y-2">
                  <div className="col-span-full">
                    <label htmlFor="fullname" className="block text-sm font-semibold leading-6 text-primary">
                      Full Name<span className='font-bold text-red'>*</span>
                    </label>
                    <div className="">
                      <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary">
                        <input
                          type="text"
                          name="fullname"
                          id="fullname"
                          autoComplete="fullname"
                          className="block w-full border-0 bg-transparent py-1.5 pl-3 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="nic" className="block text-sm font-semibold leading-6 text-primary">
                      NIC<span className='font-bold text-red'>*</span>
                    </label>
                    <div className="">
                      <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary">
                        <input
                          type="text"
                          name="nic"
                          id="nic"
                          autoComplete="nic"
                          className="block w-full border-0 bg-transparent py-1.5 pl-3 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Enter NIC"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="mobile-number" className="block text-sm font-semibold leading-6 text-primary">
                      Mobile Number<span className='font-bold text-red'>*</span>
                    </label>
                    <div className="">
                      <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary">
                        <input
                          type="text"
                          name="mobile-number"
                          id="mobile-number"
                          autoComplete="mobile-number"
                          className="block w-full border-0 bg-transparent py-1.5 pl-3 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Enter Mobile Number Ex:- 07xxxxxxxx"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-primary">
                      Email<span className='font-bold text-red'>*</span>
                    </label>
                    <div className="">
                      <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full border-0 bg-transparent py-1.5 pl-3 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="file-upload" className="block text-sm font-semibold leading-6 text-primary">
                      Upload Resume / CV File<span className='font-bold text-red'>*</span>
                    </label>
                    <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
                      <div className="text-center">
                        <svg className="mx-auto h-10 w-10 text-secondary/50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                        </svg>
                        <div className="flex text-sm leading-3 text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer font-semibold text-secondary focus-within:outline-none hover:text-primary transition-all duration-500 ease-in-out">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">.pdf or only up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-center gap-x-6">
              <button type="submit" className="rounded-2xl w-full bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all duration-500 ease-in-out">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='lg:col-span-2 hidden lg:flex justify-end pl-10 drop-shadow-lg'>
          <img className="w-auto h-custom-height" src={img} alt="Person" />
        </div>
      </div>
    </div>
  );
}

export default FormSection;
