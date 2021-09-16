import React from 'react';
import Form from './Form';
import Navbar from "./Navbar"

export default function Header({history, handleSubmit}) {
    return (
        <div>
            <h1>Photo Gallery</h1>
            <Form history={history} handleSubmit={handleSubmit} />
            <Navbar />
        </div>
    )
}
