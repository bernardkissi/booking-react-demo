import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGenerator from '../form-components/FormGenerator';

const FlightSearch = yup.object().shape({
    flight: yup.string().required(),
    lastname: yup.string().required(),
  });

const SearchForm = () => {
     // eslint-disable-next-line
    const [formBuilder, setFormBuilder] = useState({
        FormData:{
            flight:{
                value: '',
                type: 'input',
                placeholder: 'Enter flight number'
            },
            lastname:{
                value: '',
                type: 'input',
                placeholder: 'Enter lastname'
            }
        }
    })
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(FlightSearch)
    })
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGenerator data={formBuilder.FormData} ref={register} errors={errors}/>
                <button type="submit" className="p-4 text-white w-64 bg-blue-500 uppercase font-bold rounded">Get Booking</button>
            </form>
        </div>
    )
}

export default SearchForm
