import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Input from './Input';
import Select from './Select';

const FormGenerator = React.forwardRef(({data, errors}, ref) => {
    let buildForm = [];
    for(const[key, val] of Object.entries(data)){
        if(val.type.split(':')[0] === 'input'){
            buildForm.push(<Input
                key={key}
                placeholder={val.placeholder}    
                name={key}
                value={val.value}
                error={errors}
                ref={ref}
                type={val.type.split(':')[1]}
            />);
        }
        if(val.type === 'select'){
            buildForm.push(<Select
                key={key}
                placeholder={val.placeholder}    
                name={key}
                choices={val.choices}
                errors={val.errors}
            />)
        }
    }
    return (
        <div>
            {buildForm}
        </div>
    )
})

FormGenerator.propTypes = {
    data: PropTypes.object.isRequired,
    errors: PropTypes.object
}

export default FormGenerator
