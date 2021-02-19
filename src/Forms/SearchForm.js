import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGenerator from '../components/form-components/FormGenerator';
import searchFlightFields from '../components/form-fields/search';

const FlightSearch = yup.object().shape({
    flight: yup.number().required(),
    lastName: yup.string().min(5).required(),
});

const SearchForm = ({search, status, error}) => {
    const [formBuilder, setFormBuilder] = useState({
        FormData: searchFlightFields
    })
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(FlightSearch)
    })

    const handleChange = e => {
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

    return (
        <div>
            <div className="-mt-2 mb-3 px-6 py-3 bg-red-200 text-red-900 rounded-md">{error !== null ? error.errors[0] : ''}</div>
            <form onSubmit={handleSubmit(search)}>
                <FormGenerator data={formBuilder.FormData} ref={register} errors={errors} onChange={handleChange}/>
                <button type="submit" 
                    className={status === 'failed' ? "form-btn-danger":"form-btn"}>
                    {status === 'loading' ? 'searching....': 'Get Booking'}
                    {status === 'failed' && '  again'}
                </button>
            </form>
        </div>
    )
}

export default SearchForm
