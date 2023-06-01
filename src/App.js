import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link , useNavigate} from 'react-router-dom'


function App() {
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])
  const navigate= useNavigate()

  useEffect(() => {
    axios.get('https://64458d050431e885f0000250.mockapi.io/appointments')
    .then(res => {
      setColumns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  }, [])

  return (

    <>
    <div className="container mt-5">
      <div className='text-end'><Link to='/create' className='btn btn-primary'>Create New +</Link></div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((data, index) => (
            <tr key={index}>
              <td>{data.fullName}</td>
              <td>{data.shipDate}</td>
              <td>{data.productDescription}</td>
              <td>{data._id}</td>
              <td>
                <Link to={`/update/${data._id}`} className='btn btn-sm btn-secondary'>Update/Edit</Link>
                <button onClick={e => handleSubmit(data._id)} className='btn btn-sm btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div></>
  );
  function handleSubmit(_id){
    const confirmDelete = window.confirm('Do you want to delete this order?')
    if(confirmDelete) {
      axios.delete('https://64458d050431e885f0000250.mockapi.io/appointments/'+_id)
      .then(response => {
        alert('Order was deleted')
        const  updatedRecords = records.filter(data => data._id !== _id);
        setRecords(updatedRecords);
        navigate("/")
      }).catch(error => console.log(error))
    }
  }
}


export default App;
