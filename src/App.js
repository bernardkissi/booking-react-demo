import React from 'react'
// import SearchForm from './forms/SearchForm'
import UserDetails from './forms/UserDetails'

function App() {
  return (
    <div>
      <header className="relative flex flex-1 bg-blue-800 flex-col h-96 text-white">
        <div className="container mx-auto max-w-5xl py-8">
          <div className="text-center">
            <h3 className="uppercase text-xl font-bold pb-12">flydemo Airline</h3>
            <h2 className="text-4xl font-light text-center">Please fill details and complete booking</h2>
            {/* <p className=" py-3 mx-auto max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio delectus corporis labore veniam aliquid.</p> */}
          </div>
          <div className="w-auto mx-2 md:w-2/3 md:mx-auto bg-white rounded-full my-8 px-2 py-1">
              <div className="hidden lg:flex items-center justify-between">
                <button className="bg-blue-500 rounded-full py-4 px-4 uppercase font-medium">Search Booking</button>
                <button className="wizard-btn ">Complete details</button>
                <button className="wizard-btn pr-6">Confirm Flight</button>
              </div>
              <div className="lg:hidden flex items-center justify-between">
                <button className="bg-blue-500 rounded-full py-4 px-4 uppercase text-sm font-medium">Booking</button>
                <button className="wizard-btn">Fill Details</button>
                <button className="wizard-btn pr-3">Confirm</button>
              </div>
          </div>
        </div> 
      </header>
      <section className="container mx-auto max-w-5xl flex justify-center">
         <div className="absolute flex flex-col bg-white -mt-16 md:-mt-20 w-11/12 md:w-2/3 lg:mx-0 lg:w-1/2 shadow-md rounded"> 
          <div className="border-b-2 border-gray-200 border-dashed bg-gray-100 rounded-t">
            <div className="flex flex-col px-6 md:flex-row md:items-center md:justify-between lg:px-12 py-8">
            <div className="mb-4 lg:mb-0">
                  <h3 className="text-base font-bold text-blue-500">PASSENGER</h3>
                  <h3 className="text-xl lg:text-2xl font-normal text-gray-600">WELCOME, MISS TRICIE</h3>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-blue-500">FLIGHT NUMBER</h3>
                  <h4 className="font-normal text-gray-600 text-xl">KLOPK57</h4>
                </div>
            </div>
          </div>
          <div className="flex flex-col px-6 md:px-8 lg:px-12 py-8">
            {/* <SearchForm /> */}
            <UserDetails />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
