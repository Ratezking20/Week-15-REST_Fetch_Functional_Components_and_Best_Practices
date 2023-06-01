import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Add from './Add'
import Update from './Update'

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='create' element={<Add />} />
                <Route path='update/:_id' element={<Update />} />
            </Routes>
        </BrowserRouter>
    )
}
