import React from 'react'
import PropTypes from 'prop-types'

function Select({name, value, choices, errors, refs}) {
    return (
        <div>
           <select className={errors ? "form border-red-400" : "form border-gray-200"}
            name={name}
            value={value}
            ref={refs}
        >
        {choices.map((choice, index) => (
            <option key={index} value={choice.value}>{choice.label}</option>
        ))}
        </select>
        {errors[name] && <div className="text-red-400">{errors[name].message}</div>} 
        </div>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string 
    })).isRequired,
    error: PropTypes.oneOfType([ PropTypes.string, PropTypes.object])
}

export default Select

