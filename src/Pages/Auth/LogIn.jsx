import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Slices/AuthSlice';
import LoginPresentation from './LogInPresentation';

function LogIn() {

    const dispatch = useDispatch();

    const [loginData, setloginData] = useState({
        email: '',
        password: ''
    })

    function handleUserInput(e) {
        const {name, value} = e.target;
        setloginData({
         ...loginData,
         [name]: value
        })
     }

     async function handleFormSubmit(e) {
        //e.preventDefault(); // prevent the form from reloading the page
        e.preventDefault();
        console.log(loginData);

        // Add validations for the form input
        if(!loginData.email || !loginData.password) {
            toast.error("Missing values from the form")
            return;
        }

        // check email
        if(!loginData.email.includes('@') || !loginData.email.includes('.')) {
            toast.error("Invalid email address")
            return;
        }


        const apiReponse = await dispatch(login(loginData));
        console.log("Api response", apiReponse);
        // if(apiReponse.payload.data.success) {
        //     navigate('/auth/login');
        // }

        
    }

    return (
        <LoginPresentation 
            handleFormSubmit= {handleFormSubmit}
            handleUserInput= {handleUserInput}
        />
    )

}

export default LogIn
