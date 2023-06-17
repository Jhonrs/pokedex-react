import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NavBar } from './components/NavBar'
import { PokemonList } from './pages/PokemonList'


export const App = () => {
  return (
    <> 
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/pokedex" element={ <PokemonList /> }/>
      </Routes>
    </>
  )
}
