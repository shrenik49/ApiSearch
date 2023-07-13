
import React from 'react'
import {FaSearch} from "react-icons/fa"
import './Searchbar.css'

const SearchBar = () => {
  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon"></FaSearch>
      <input placeholder='Type here to search'></input>
    </div>
  )
}
export default SearchBar
