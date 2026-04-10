import { useState, useEffect } from 'react'

function useCountry(code) {
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!code) {
      setCountry(null)
      setLoading(false)
      setError(null)
      return
    }

    setLoading(true)
    setError(null)
    setCountry(null)

    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Country not found.')
        }
        return res.json()
      })
      .then((data) => {
        setCountry(data[0])
        setError(null)
      })
      .catch(() => {
        setCountry(null)
        setError('Country not found.')
      })
      .finally(() => setLoading(false))
  }, [code])

  return { country, loading, error }
}

export default useCountry
