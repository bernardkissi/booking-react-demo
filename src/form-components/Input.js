import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type = 'text', placeholder, name, value, errors, refs}) => {
    return (
        <div>
           <input
            className={errors ? "form border-red-400" : "form border-gray-200"}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            ref={refs}
            autoComplete="off" />
            {errors && <div>{errors.name.message}</div>} 
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder:PropTypes.string,
    name:PropTypes.string.isRequired,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.object]),
    errors: PropTypes.oneOfType([ PropTypes.string, PropTypes.object])
}

export default Input

