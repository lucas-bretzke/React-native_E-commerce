import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { filterDesc, formattedMoney, calculatesTheDiscount } from '../../Utils/helpers'
import { Entypo, Feather } from '@expo/vector-icons'
import axios from 'axios';

export default function Shoes(props) {
  const [itemProperties, setProduct] = useState({ ...props });

  async function addOrRemoveFromFavorites() {
    const setFavorite = { ...itemProperties, favorite: !itemProperties.favorite };

    if (!itemProperties.favorite) {
      try {
        editProduct(setFavorite);
        await axios.post('/api/favorites', setFavorite);
      } catch (error) {
        console.log('SHOES POST ERROR', error);
      }
    } else {
      try {
        editProduct(setFavorite);
        await axios.delete(`api/favorites/${setFavorite.id}`, setFavorite);
      } catch (error) {
        console.log('SHOES POST ERROR', error);
      } finally {
        typeof props.getFavorites === "function" && props.getFavorites()
      }
    }
  }

  async function editProduct(item) {
    try {
      setProduct(item);
      await axios.put(`api/shoes/${item.id}`, item);
    } catch (error) {
      console.log('SHOE PUT ERROR', error);
    }
  }

  return (
    <TouchableOpacity ableOpacity style={styles.container} onPress={props.onClick}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity style={styles.iconHeart} onPress={addOrRemoveFromFavorites}>
          {itemProperties.favorite ?
            <Text>  <Entypo name='heart' size={21} color='#444' /></Text> :
            <Text> <Feather name='heart' size={21} color='black' /></Text>
          }
        </TouchableOpacity>
        <Image source={props.img} style={styles.imgShoes} resizeMode="cover" />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{props.children}  {/* {filterDesc(props.children)} */}</Text>

        <View style={{ flexDirection: 'row' }}>
          {(props.discount > 0) &&
            <Text style={styles.textShoes} >
              R${' '} {formattedMoney(calculatesTheDiscount(props.price, props.discount))}
            </Text>
          }

          <Text style={[styles.textShoes, props.discount > 0
            && { textDecorationLine: 'line-through', color: '#444444' }]}>
            R${' '} {formattedMoney(props.price)}
          </Text>
        </View>

        <Text style={[styles.textShoes, styles.discount]}>
          {(props.discount > 0) && props.discount + '% off'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '49.6%',
    // paddingHorizontal: '1%',
    paddingVertical: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },
  iconHeart: {
    paddingRight: 10,
    marginBottom: -12,
    zIndex: 2,
  },
  imgShoes: {
    width: 175,
    height: 175,
  },
  containerDescription: {
    width: '100%',
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    marginVertical: '1.5%',
  },
  textShoes: {
    fontSize: 15,
    marginRight: 10,
    marginVertical: '1.5%',
    color: 'black',
    fontWeight: '600'
  },
  discount: {
    color: 'green'
  }
});