import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGenerator from '../form-components/FormGenerator'
import passengerDetailsFields from '../form-components/form-fields/details';



const FlightSearch = yup.object().shape({
    flight: yup.string().required(),
    lastname: yup.string().min(5).required(),
});

const countries = [
    { country: 'austria', fields:['_fn','_nl', '_pn','_em','_ppn', '_cy', '_ct', '_ed']},
    { country: 'belgium', fields:['_fn','_nl', '_pn','_em','_ppn','_bd', '_cy', '_ct', '_ad']},
    { country: 'france', fields: ['_fn','_nl', '_pn','_em','_ppn', '_bp', '_bd', '_cy', '_ct']},
    { country: 'greece', fields: ['_fn','_nl', '_pn','_em','_ppn', '_pi', '_cyi', '_cti','_ed']},
    { country: 'spain', fields:  ['_fn','_nl', '_pn','_em','_ppn', '_ad']}
]

const UserDetails = () => {

    const [formBuilder, setFormBuilder] = useState({
        FormData: passengerDetailsFields
    })

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(FlightSearch)
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
        let newFields = []
        if( formBuilder.FormData.nationality.value !== ''){
            const selected = countries.find(element => element.country === formBuilder.FormData.nationality.value);
            const data  = selected.fields.map(key => {
                return Object.filter(formBuilder.FormData, ([name, field]) => field.key === key )
            })
            console.log(data);
        }
        console.log('after updating' )
        console.log(formBuilder.FormData)
        return 
    }, [formBuilder.FormData.nationality.value])


    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGenerator data={formBuilder.FormData} 
                  ref={register} 
                  errors={errors} 
                  onChange={handleChange} 
                />
            </form>
        </div>
    )
}

export default UserDetails


//handling change in value
//1. create countries array with properties
//2. access the state of the nationality (value)

// use useEffect to run the entire procedure when (value changes)

//
 //3. use find to get the country with properties
        //4. then run object filter on the FormData to filter the form
        //5. Pass that down as a prop to formGenerator..