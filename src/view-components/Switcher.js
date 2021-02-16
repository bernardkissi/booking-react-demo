import React from 'react'

const Switcher = () => {
    return (
        <div className="w-auto mx-2 md:w-2/3 md:mx-auto bg-white rounded-full my-8 px-2 py-1">
              <div className="hidden lg:flex items-center justify-between">
                <button className="outline-none focus:bg-blue-700 hover:bg-blue-600 bg-blue-500 rounded-full py-4 px-4 uppercase font-medium">Search Booking</button>
                <button className="wizard-btn ">Complete details</button>
                <button className="wizard-btn pr-6">Confirm Flight</button>
              </div>
              <div className="lg:hidden flex items-center justify-between">
                <button className="bg-blue-500 rounded-full py-4 px-4 uppercase text-sm font-medium">Booking</button>
                <button className="wizard-btn">Fill Details</button>
                <button className="wizard-btn pr-3">Confirm</button>
              </div>
        </div>
    )
}

export default Switcher
