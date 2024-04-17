import React from 'react';

export default function Home() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-extrabold text-gray-900">Got a Idea? We've got the skills. Let's team up</h1>
          <h4 className="mt-2 text-center text-sm text-gray-600">Tell us more about yourself</h4>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="input-group">
              <label htmlFor="first-name" className="sr-only">First Name</label>
              <input id="first-name" name="first_name" type="text" autoComplete="given-name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="First Name" />
            </div>
            <div className="input-group">
              <label htmlFor="last-name" className="sr-only">Last Name</label>
              <input id="last-name" name="last_name" type="text" autoComplete="family-name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Last Name" />
            </div>
            <div className="input-group">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email address" />
            </div>
            <div className="input-group">
              <label htmlFor="mobile-number" className="sr-only">Mobile Number</label>
              <input id="mobile-number" name="mobile_number" type="tel" autoComplete="tel" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Mobile Number" />
            </div>
            <div className="input-group">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" cols="30" rows="10" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Write about your idea or message"></textarea>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
