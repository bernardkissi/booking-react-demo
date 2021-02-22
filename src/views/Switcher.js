import React from 'react'
import PropTypes from 'prop-types'

const Switcher = ({step, stepChanger}) => {
    
    return (
        <div className="w-auto mx-2 md:w-2/3 md:mx-auto bg-white rounded-full my-8 px-2 py-1">
              <div className="hidden lg:flex items-center justify-between">
                <button
                    className={step === 1 ? "wizard-btn wizard-active-btn":"wizard-btn text-gray-400" || 
                    step > 1 ? "wizard-btn wizard-success-btn font-bold":""}>
                    Search Booking 
                </button>
                <button
                    className={step === 2 ? "wizard-btn wizard-active-btn":"wizard-btn text-gray-400" || 
                    step > 2 ? "wizard-btn wizard-success-btn font-bold":""}>
                    Complete details
                </button>
                <button
                    className={step === 3 ? "wizard-btn wizard-active-btn":"wizard-btn text-gray-400"}>
                    Confirm Flight
                </button>
              </div>
              <div className="lg:hidden flex items-center justify-between">
                <button className="wizard-btn wizard-active-btn">Booking</button>
                <button className="wizard-btn">Fill Details</button>
                <button className="wizard-btn pr-3">Confirm</button>
              </div>
        </div>
    )
}
Switcher.propTypes = {
    step: PropTypes.number.isRequired
}

export default Switcher
