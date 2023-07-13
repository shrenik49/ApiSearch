import { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <div className='search-bar-container'>
        <SearchBar>Searchbar</SearchBar>
        <div>search Results</div>
      </div>
    </div>
  )
}

export default App
