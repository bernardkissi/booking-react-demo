import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGenerator from '../components/form-components/FormGenerator'
import passengerDetailsFields from '../components/form-fields/details';
import countries from '../components/form-fields/countries';

const UserInformation = yup.object().shape({
    fullName: yup.string().required(),
    phoneNumber: yup.number().min(10).required(),
    email: yup.string().email().required(),
    passportNumber: yup.string().required(),
    address: yup.string(),
    birthDate: yup.date(),
    expiryDate: yup.date()
});

const UserDetails = ({profile, status, error}) => {

    const [formBuilder, setFormBuilder] = useState({
        FormData: passengerDetailsFields
    })

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(UserInformation)
    })
    
    const handleChange = e => {
        e.persist()
        setFormBuilder(prev => ({
            ...prev,
            FormData: {
                ...prev['FormData'],
                [e.target.name]: {
                    ...prev['FormData'][e.target.name],
                    value: e.target.value
                }
            }
        }))
    };

    Object.filter = (obj, predicate) => 
        Object.fromEntries(Object.entries(obj).filter(predicate));


    useEffect(() => {
        const selected = countries.find(element => element.country === formBuilder.FormData.nationality.value);
        const data  = selected.fields.map(key => {
            return Object.filter(passengerDetailsFields, ([name, field]) => field.key === key )
        })
        const newFields = data.reduce(((r, c) => Object.assign(r, c)), {});
        setFormBuilder(() => ({
            FormData:{
                ...newFields,
                nationality: {
                    ...newFields['nationality'],
                    value: selected.country
                }
            }
        }))
       console.log(formBuilder.FormData.nationality.value)
    }, [formBuilder.FormData.nationality.value])

    return (
        <div>
            {error !== null && 
                <div className="-mt-2 mb-3 px-6 py-3 bg-red-200 text-red-900 rounded-md">
                    {error !== null ? error.errors[0] : ''}
                </div>
            }
            <form onSubmit={handleSubmit(profile)}>
                <FormGenerator data={formBuilder.FormData} 
                  ref={register} 
                  errors={errors} 
                  onChange={handleChange} 
                />
                {formBuilder.FormData.nationality.value.length > 0 && <button type="submit" 
                    className={status === 'failed' ? "form-btn-danger":"form-btn"}>
                    {status === 'loading' ? 'creating profile....': 'Save Details'}
                    {status === 'failed' && '  again'}
                </button>}
            </form>
        </div>
    )
}

export default UserDetails
