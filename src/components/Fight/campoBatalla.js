import { StyleSheet, FlatList, ActivityIndicator,View, Text } from 'react-native'
import React from 'react'
import Header from '../Fight/Header'

export default function campoBatalla(props) {    
    const {pokemons} = props;


  return (
    <View>
      <Header 
      name={pokemon.name} 
      order={pokemon.order}
      image={pokemon.sprites.versions['generation-v']['black-white']['animated'].front_default}
      type={pokemon.types[0].type.name}
      />
     </View>
  );
}

const styles = StyleSheet.create({
    
})