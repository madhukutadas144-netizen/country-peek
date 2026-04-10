import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import CountryPage from './pages/CountryPage'
import NotFound from './pages/Notfound'

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Always visible */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryPage />} />
        <Route path="/favourites" element={<h2>Favourites Page</h2>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;