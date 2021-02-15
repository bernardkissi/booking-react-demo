import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGenerator from '../form-components/FormGenerator';
import fields from '../form-components/form-fields/details';
import searchFlightFields from '../form-components/form-fields/search';

const FlightSearch = yup.object().shape({
    flight: yup.string().required(),
    lastname: yup.string().min(5).required(),
});

const SearchForm = () => {
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

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(fields)
    };

    // const formWatcher = (formName) => {
    //     console.log(watch(formName))
    // }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGenerator data={formBuilder.FormData} ref={register} errors={errors} onChange={handleChange}/>
                <button type="submit" className="p-4 text-white w-64 bg-blue-500 uppercase font-bold rounded">Get Booking</button>
            </form>
        </div>
    )
}

export default SearchForm
