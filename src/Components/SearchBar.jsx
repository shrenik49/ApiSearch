
import React, { useState } from 'react'
import {FaSearch} from "react-icons/fa"
import './Searchbar.css'

const SearchBar = ({setResult}) => {
const [input,setInput]= useState("")

const fetchData=(value)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((json)=>{
    const Results=json.filter((user=>{
        return value && user && user.name && user.name.toLowerCase().includes(value)
    }));
    setResult(Results)
    })
}


const hadleChange =(value)=>{
    setInput(value)
    fetchData(value)
}

  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon"></FaSearch>
      <input placeholder='Type to search...'
        value={input}
        onChange={(e)=>hadleChange(e.target.value)}
      />
    </div>
  )
}
export default SearchBar
