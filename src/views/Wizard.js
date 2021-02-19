import React, {useState} from 'react'
import { connect } from 'react-redux'
import SearchForm from '../forms/SearchForm'
import UserDetails from '../forms/UserDetails'
import { changeStep, fetchBookings } from '../store/reducers/usersSlice'
import Switcher from '../views/Switcher'

const Wizard = ({user, steps, stepChange, error, bookings, status}) => {
    const [ headings] = useState(
        [   '',
            'Welcome to your flight check-in',
            'Please fill details and complete booking',
            'Please confirm details for your flight'
        ]
    )
    return (
        <div>
            <header className="relative flex flex-1 bg-blue-800 flex-col h-96 text-white">
                <div className="container mx-auto max-w-5xl py-8">
                <div className="text-center">
                    <h3 className="uppercase text-xl font-bold pb-12">flydemo Airline</h3>
                    <h2 className="text-4xl font-light text-center">
                      {headings[steps]}
                    </h2>
                </div>
                <Switcher step={steps} stepChanger={stepChange}/>
                </div> 
            </header>
            <section className="container mx-auto max-w-5xl flex justify-center">
                <div className="absolute flex flex-col bg-white -mt-16 md:-mt-20 w-11/12 md:w-2/3 lg:mx-0 lg:w-1/2 shadow-md rounded"> 
                <div className="border-b-2 border-gray-200 border-dashed bg-gray-100 rounded-t">
                    <div className="flex flex-col px-6 md:flex-row md:items-center md:justify-between lg:px-12 py-4">
                        {steps <= 1 && <div className="mb-4 lg:mb-0">
                            <h3 className="text-base font-bold text-red-500 md:text-blue-500 ">FLIGHT BOOKING </h3>
                            <h3 className="text-xl font-normal text-gray-600">CHECK YOUR FLIGHT</h3>
                        </div>}
                        {steps > 1 && <div className="mb-4 lg:mb-0">
                            <h3 className="text-base font-bold text-blue-500">PASSENGER</h3>
                            <h3 className="text-xl font-normal uppercase text-gray-600">WELCOME, MISS {user.booking.user.lastName}</h3>
                        </div>}
                        {steps > 1 && <div className="flex flex-col">
                            <h3 className="text-base font-bold text-blue-500">FLIGHT NUMBER</h3>
                            <h4 className="font-normal text-gray-600 text-xl">{user.booking.flight}</h4>
                        </div>}
                    </div>
                </div>
                <div className="flex flex-col px-6 md:px-8 lg:px-12 py-8">
                    { steps === 1 && <SearchForm  
                        search={bookings} 
                        // stepChange={stepChange} 
                        status={status}
                        // step={steps}
                        error={error}
                        />
                    }
                    { steps === 2 && <UserDetails /> }
                    { steps === 3 && <div> hey check!! </div> }
                </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { user, steps, error, status } = state
    return { user , steps, error, status }
}

const mapDispatchToProps = dispatch => {
    return {
      stepChange: step => dispatch(changeStep(step)),
      bookings: (passenger) => dispatch(fetchBookings(passenger))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard)
