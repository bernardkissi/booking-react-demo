import React from 'react'
import PropTypes from 'prop-types'

const Switcher = ({step, stepChanger}) => {
    
    return (
        <div className="w-auto mx-2 md:w-2/3 md:mx-auto bg-white rounded-full my-8 px-2 py-1">
              <div className="hidden lg:flex items-center justify-between">
                <button onClick={() => stepChanger(1)}
                    className={step === 1 ? "wizard-btn wizard-active-btn":"wizard-btn"}>
                    Search Booking
                </button>
                <button onClick={() => stepChanger(2)}
                    className={step === 2 ? "wizard-btn wizard-active-btn":"wizard-btn"}>
                    Complete details
                </button>
                <button onClick={() => stepChanger(3)}
                    className={step === 3 ? "wizard-btn wizard-active-btn":"wizard-btn"}>
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
