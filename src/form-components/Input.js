import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
    return (
        <div>
           <input
            className={props.errors ? "form border-red-400" : "form border-gray-200"}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            ref={props.ref}
            autoComplete="off" />
        {props.errors[props.name] && <div>{props.errors[props.name].message}</div>} 
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

