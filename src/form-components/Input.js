import React from 'react'
import PropTypes from 'prop-types'

const Input = React.forwardRef(({ type = 'text', placeholder, name, value, error, onChange}, ref) => {
    return (
        <div className="flex flex-col">
           {error && <div className="bg-red-200 px-3 py-1 uppercase text-xs text-red-900 font-bold"> {error.message} </div>}
           <input
            className={error ? "form border border-red-200" : "form border-2 border-gray-200 "}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            ref={ref}
            onChange={onChange}
            autoComplete="off" />
            
        </div>
    )
})

Input.propTypes = {
    type: PropTypes.string,
    placeholder:PropTypes.string,
    name:PropTypes.string.isRequired,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.object]),
    error: PropTypes.oneOfType([ PropTypes.string, PropTypes.object])
}

export default Input

