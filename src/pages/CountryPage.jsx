import { useParams, useNavigate } from 'react-router-dom'
import useCountry from '../hooks/useCountry'
import '../styles/App.css'

function CountryPage() {
  const { code } = useParams()
  const navigate = useNavigate()
  const { country, loading, error } = useCountry(code)

  if (loading) {
    return <p className="page-status">Loading country...</p>
  }

  if (error) {
    return <p className="page-status page-status--error">{error}</p>
  }

  if (!country) {
    return null
  }

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
  } = country

  const languageList = languages ? Object.values(languages) : []
  const currencyList = currencies
    ? Object.values(currencies).map((currency) => currency.name)
    : []

  return (
    <div className="country-page">
      <button type="button" className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="country-page__layout">
        <img
          className="country-page__flag"
          src={flags.svg}
          alt={`Flag of ${name.common}`}
        />

        <div className="country-page__info">
          <h2 className="country-page__name">{name.common}</h2>
          <p className="country-page__official">{name.official}</p>

          <div className="country-page__details">
            <div>
              <p>
                <span>Population:</span> {population.toLocaleString()}
              </p>
              <p>
                <span>Region:</span> {region}
              </p>
              <p>
                <span>Subregion:</span> {subregion ?? 'N/A'}
              </p>
              <p>
                <span>Capital:</span> {capital?.[0] ?? 'N/A'}
              </p>
            </div>

            <div>
              <p>
                <span>Languages:</span>{' '}
                {languageList.length > 0 ? languageList.join(', ') : 'N/A'}
              </p>
              <p>
                <span>Currencies:</span>{' '}
                {currencyList.length > 0 ? currencyList.join(', ') : 'N/A'}
              </p>
            </div>
          </div>

          {borders && borders.length > 0 && (
            <div className="country-page__borders">
              <p>
                <span>Border Countries:</span>
              </p>
              <div className="border-badges">
                {borders.map((borderCode) => (
                  <span key={borderCode} className="border-badge">
                    {borderCode}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryPage
