import React from 'react'
import PropTypes from 'prop-types'

const Select = React.forwardRef(({name, value, choices, error, onChange}, ref)=> {
    return (
        <div className="flex flex-col">
           {error && <div className="bg-red-200 px-3 py-1 uppercase text-xs text-red-900 font-bold"> {error.message} </div>}
           <select className={error ? "form border-red-400" : "form border-gray-200"}
            name={name}
            value={value}
            ref={ref}
            onChange={onChange}
            >
            {choices.map((choice, index) => (
                <option key={index} value={choice.value}>{choice.label}</option>
            ))}
            </select>
        </div>
    )
})

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

