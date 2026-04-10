import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'

function Home() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (query.length < 2) return

    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }, [query])

  return (
    <div className="home">
      {/* Search input */}
      <SearchBar query={query} onQueryChange={setQuery} />

      {/* 👇 PUT YOUR CODE HERE */}
      {countries.map((country, index) => (
        <div key={index} style={{
          border: '1px solid gray',
          padding: '10px',
          margin: '10px',
          borderRadius: '8px'
        }}>
          <h3>{country.name.common}</h3>
          <img 
            src={country.flags.png} 
            alt={country.name.common} 
            width="100"
          />
          <p>Region: {country.region}</p>
        </div>
      ))}
    </div>
  )
}

export default Home