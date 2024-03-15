import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [pokemons, setPokemons] = useState ([])
  useEffect (() => {
    fetch('https://dummyapi.online/api/pokemon')
    .then(res=>{
      return res.json()
    }).then(data => {
      setPokemons(data)
      console.log(data)
    })
  }, [])
  return (
    <>
    <div className = 'cards'>
      {
        pokemons.slice(0, 48).map((pokemon, index) =>(
          <div className = 'card' key = {index}>
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.abilities[0]}</h2>
            <img src = {pokemon.image_url} alt={pokemon.name} />
            <p> {pokemon.hitpoints}</p>
            <p> {pokemon.location}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
