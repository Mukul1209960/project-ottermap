import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
export default function Info(){
    const [ firstName , setFirstName ] = useState("");
    const [ mobileNumber , setMobileNumber ] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (e)=>{
        setFirstName(e.target.value)
    };
    const handleMobileChange = (e)=>{
        setMobileNumber(e.target.value)
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('mobileNumber',mobileNumber);
        navigate('/map')
    };
    return(
        <>
        <h1>Search Form</h1>
        <div>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={handleNameChange} placeholder="Enter Name" /></div>
            <div>
                <label>Mobile Number</label>
                <input type="text" value={mobileNumber} onChange={handleMobileChange} placeholder="Enter MObile Number" /></div>
                <button onClick={handleSubmit}>Submit</button>
                </>
    )
}