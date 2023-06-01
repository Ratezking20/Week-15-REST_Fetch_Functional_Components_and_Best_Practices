import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Add() {

    const[inputData, setInputData] = useState({fullName:'', productDescription: '', shipDate:''})
    
    const navigate = useNavigate()
    
    function handleSubmit(event){
        event.preventDefault()
            axios.post('https://64458d050431e885f0000250.mockapi.io/appointments', inputData)
            .then(response =>{
                alert('Data added Successfully!')
                navigate('/')
                document.getElementById('full-name').value=''
                document.getElementById('product-description').value=''
                document.getElementById('ship-date').value=''
            }).catch(error => console.log(error))
        
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg light p-5'>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Customer Name:</label>
                    <input id="full-name" onChange={e=>setInputData({...inputData, fullName: e.target.value})} type='text' name='name' className='form-control' />
                </div>
                <div>
                    <label htmlFor='product-name'>Product Name:</label>
                    <input id="product-description" onChange={e=>setInputData({...inputData, productDescription: e.target.value})} type='text' name='product-description' className='form-control' />
                </div>
                <div>
                    <label htmlFor='ship-date'>Ship Date:</label>
                    <input id="ship-date" onChange={e=>setInputData({...inputData, shipDate: e.target.value})} type='date' name='ship-date' className='form-control' />
                </div>
                <br />
                <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}