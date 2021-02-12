import React from 'react'
import PropTypes from 'prop-types'

function Select(props) {
    return (
        <div>
           <select className={props.error ? "form border-red-400" : "form border-gray-200"}
            name={props.name}
            value={props.value}
            ref={props.ref}
        >
        {props.choices.map((choice:Choice, index:number): JSX.Element => (
            <option key={index} value={choice.value}>{choice.label}</option>
        ))}
        </select>
        {props.error[props.name] && <div className="text-red-400">{props.error[props.name].message}</div>} 
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

