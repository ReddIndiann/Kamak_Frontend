import React from 'react';
import Header from './Components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
     
<Header/>
      <main className="container mx-auto px-4 py-12 flex">
        <div className=" ml-52">
          <h1 className="text-9xl font-bold mb-6">
            Unlock exponential growth with our <br />
            <span className="text-orange-500"> Bulk SMS </span><br />
            tools
          </h1>
          <div className="mb-6 ">
            <input type="email" placeholder="Your email goes in here" className="w-1/3 p-2 border rounded-l-md" />
            <button className="bg-black text-white p-2 rounded-r-md">Get Started</button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Boost Sales</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Maximize audience engagement</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Repeat purchases</span>
            </div>
          </div>
        </div>
       
      </main>
    </div>
  );
}

export default App;