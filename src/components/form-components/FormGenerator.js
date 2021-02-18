import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Input from './Input';
import Select from './Select';

const FormGenerator = React.forwardRef(({data, errors, onChange}, ref) => {
    let buildForm = [];
    for(const[key, val] of Object.entries(data)){
        if(val.type.split(':')[0] === 'input'){
            buildForm.push(<Input
                key={key}
                placeholder={val.placeholder}    
                name={key}
                value={val.value}
                error={errors[key]}
                ref={ref}
                onChange={onChange}
                // watch={watch(key)}
            />);
        }
        if(val.type === 'select'){
            buildForm.push(<Select
                key={key}
                placeholder={val.placeholder}    
                name={key}
                choices={val.choices}
                value={val.value}
                errors={errors[key]}
                onChange={onChange}
            />)   
        }
        
    }
    return (
        <Fragment>
            {buildForm}
        </Fragment>
    )
})

FormGenerator.propTypes = {
    data: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onChange: PropTypes.func.isRequired
}

export default FormGenerator
