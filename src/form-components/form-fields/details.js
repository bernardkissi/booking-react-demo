const passengerDetailsFields = {
    
        fullName:{
            key: '_fn',
            value: '',
            type: 'input',
            placeholder: 'Enter fullname'
        },
        phoneNumber:{
            key: '_pn',
            value: '',
            type: 'input',
            placeholder: 'Enter mobile number'
        },
        email:{
            key: '_em',
            value: '',
            type: 'input',
            placeholder: 'Enter your email address'
        },
        nationality:{
            key:'_nl',
            value: '',
            type: 'select',
            choices: [
                {value: '', label:'Choose your nationality'},
                {value: 'austria', label:'Austria'},
                {value: 'belgium', label:'Belgium'},
                {value: 'france', label:'France'},
                {value: 'greece', label:'Greece'},
                {value: 'spain', label:'Spain'}
            ]
        },
        passportNumber:{
            key: '_ppn',
            value: '',
            type: 'input',
            placeholder: 'Enter your passport number'
        },
        
        country: {
            key: '_cy',
            value: '', 
            type: 'input', 
            placeholder: 'Enter your country of residence'
        },
        city: {
            key: '_ct',
            value: '',
            type: 'input', 
            placeholder: 'Enter your city of residence'
        },
        birthDate: {
            key: '_bd',
            value: '', 
            type: 'input', 
            placeholder: 'Enter your date of birth eg. 01/01/1991'
        },
        birthPlace: {
            key: '_bp',
            value: '', 
            type: 'input', 
            placeholder: 'Enter your place of birth'
        },
        passportIssue: {
            key: '_pi',
            value: '', 
            type: 'input', 
            placeholder: 'Passport Date of Issue'
        }, 
        expiryDate: {
            key: '_ed',
            value: '', 
            type: 'input', 
            placeholder: 'Enter your passport expiry date'
        },
        countryOfIssue: {
            key: '_cyi',
            value: '', 
            type: 'input', 
            placeholder: 'Enter your country of issue'
        },
        cityOfIssue: {
            key: '_cti',
            value: '', 
            type: 'input', 
            placeholder: 'Enter your city of issue'
        },
        address: {
            key: '_ad', 
            value: '', 
            type: 'input', 
            placeholder: 'Enter your address'
        }
}

export default passengerDetailsFields 