import React,{useState} from 'react'

export default function Form({handleSubmit, history}) {
    const [search, setSeatch] = useState("");
    const handleChange = (e)=>{
        setSeatch(e.target.value);
    }
    return (
        <form className="search-form" onSubmit={(e)=>handleSubmit(e, history, search)}> 
            <input value={search} onChange={handleChange} placeholder="Search Something" /> 
            <button type="submit">Search</button>
        </form>
    )
}
