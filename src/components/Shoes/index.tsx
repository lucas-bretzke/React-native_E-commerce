import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { filterDesc, formattedMoney, calculatesTheDiscount } from '../../Utils/helpers'
import { Entypo, Feather } from '@expo/vector-icons'
import { ShoeItem } from '../../types'
import axios from 'axios';


export default function Shoes(props: { item: ShoeItem, onClick: () => void }) {
  const [item, setItem] = useState<ShoeItem>({ ...props.item });

  async function addOrRemoveFromFavorites() {
    const setFavorite = { ...props.item, favorite: !item.favorite }
    setItem(setFavorite)

    try {
      updateProduct(setFavorite);
      if (setFavorite.favorite) {
        await axios.post('/api/favorites', setFavorite);
      } else {
        await axios.delete(`/api/favorites/${setFavorite.id}`);
      }
    } catch (error) {
      console.log('SHOES API ERROR', error);
    } finally {
      typeof props.onClick === "function" && props.onClick
    }
  }

  async function updateProduct(item: ShoeItem) {
    try {
      await axios.put(`/api/shoes/${item.id}`, item);
    } catch (error) {
      console.log('SHOE PUT ERROR', error);
    }
  }


  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={props.onClick}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity style={styles.iconHeart} onPress={addOrRemoveFromFavorites}>
          {item.favorite ?
            <Entypo name='heart' size={21} color='#444' /> :
            <Feather name='heart' size={21} color='black' />
          }
        </TouchableOpacity>
        <Image source={item.img} style={styles.imgShoes} resizeMode="cover" />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{item.name}  {/* {filterDesc(item.name)} */}</Text>

        <View style={{ flexDirection: 'row' }}>
          {item.discount > 0 &&
            <Text style={styles.textShoes}>R$ {formattedMoney(calculatesTheDiscount(item.price, item.discount))}</Text>
          }

          <Text style={[styles.textShoes, item.discount > 0 && styles.originalPrice]}>
            R$ {formattedMoney(item.price)}
          </Text>
        </View>

        <Text style={[styles.textShoes, styles.discount]}>
          {item.discount > 0 && item.discount + '% off'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '200px',
    // minWidth: '49.6%',
    maxWidth: '186.5px',
    paddingVertical: 2.5,
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
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#444444'
  }
});

