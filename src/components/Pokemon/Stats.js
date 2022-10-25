import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { map, capitalize } from "lodash";
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Stats(props) {
    const { type, stats } = props;
    const color = getColorByPokemonType(type);
    
    const barStyles = (num) => {
        const color1 = num > 49 ? color : "red"
        return {
            backgroundColor: color1, 
            width: `${num}%`
        }
    }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockInfo}>
                <Text style={styles.number} >{item.base_stat}</Text>
                <View style={styles.bgBar}>
                    <View style={[styles.bar, barStyles(item.base_stat)]}/>
               </View>
            </View>
         </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    content: {
      paddingHorizontal: 20,
      marginTop: 40 ,
      marginBottom: 80 ,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle: {
        width: '35%'
    },
    statName: {
        fontSize: 15,
        color: '#6b6b6b'

    },
    blockInfo: {
        width: '65%',
        flexDirection: "row",
        alignItems: "center"
    },
    number: {
        width: "12%",
        fontSize: 15
    },
    bgBar: {
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden"
    },
    bar: {
        height: 5,
        borderRadius: 20,
    }
  });