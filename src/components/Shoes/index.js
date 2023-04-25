import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { filterDesc } from '../../Helpers/Filters'

export default function Shoes(props) {

  return (
    <TouchableOpacity ableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.imgShoes}
      />
      <Text style={styles.textShoes}>
        {filterDesc(props.children)}
      </Text>
      <View opacity={0.4}>
        <Text style={styles.textShoes}> {props.cost} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  imgShoes: {
    width: 185,
    height: 175
  },
  textShoes: {
    fontSize: 13,
  }
});