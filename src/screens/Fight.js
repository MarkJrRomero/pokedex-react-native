import { Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonDetailsById } from '../api/pokemon'
import Header from '../components/Fight/Header'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import CampoBatalla from '../components/Fight/campoBatalla'

export default function Fight() {
  
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    ( async ()=>{
      await loadPokemons();
    })();
  }, []);

  const loadPokemons =  async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];

      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
        
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);

     

    } catch (error) {
      console.error(error);
    }
  }
 

  return (
    
    <SafeAreaView>
     <CampoBatalla />
    </SafeAreaView>
  )
}