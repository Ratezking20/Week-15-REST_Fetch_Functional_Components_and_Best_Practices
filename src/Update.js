import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Update() {
    const{_id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const date = new Date()
        const formattedDate = date.toISOString().split('T')[0]
        setData({...data, shipDate: formattedDate})
        axios.get('https://64458d050431e885f0000250.mockapi.io/appointments/'+_id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    function handleSubmit(event){
        

        event.preventDefault()
        axios.put('https://64458d050431e885f0000250.mockapi.io/appointments/'+_id, data)
        .then(response => {
            alert('Updated successfully')
            navigate('/')
            document.getElementById('full-name').value=''
            document.getElementById('product-description').value=''
            document.getElementById('ship-date').value=''
        }).catch(error => console.log(error))
    }

    return(
       
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg light p-5'>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>ID#:</label>
                    <input id='_id' type='text' name='name' className='form-control' placeholder={data._id} disabled/>
                </div>
                <div>
                    <label htmlFor='name'>Customer Name:</label>
                    <input id='full-name' onChange={e => setData({...data, fullName: e.target.value})} type='text' name='name' className='form-control' value={data.fullName} />
                </div>
                <div>
                    <label htmlFor='email'>Product Name:</label>
                    <input id='product-description' onChange={e => setData({...data, productDescription: e.target.value})}type='text' name='product-description' className='form-control' value={data.productDescription} />
                </div>
                <div>
                    <label htmlFor='name'>Ship Date:</label>
                    <input id='ship-date' onChange={e => setData({...data, shipDate: e.target.value})}type='date'  name='ship-date' className='form-control' value={data.shipDate} />
                </div>
                <br />
                <button className='btn btn-primary'>Update Order</button>
                </form>
            </div>
        </div>
    )
}
       
    
