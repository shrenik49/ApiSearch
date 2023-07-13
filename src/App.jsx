import { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import SearchResultsList from './Components/SearchResultsList'

function App() {
  const [results,setResult]=useState([])

  return (
    <div className='App'>
      <div className='search-bar-container'>
        <SearchBar setResult={setResult}/>
        <SearchResultsList results={results}/>
      </div>
    </div>
  )
}

export default App
