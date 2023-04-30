import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { filterDesc, formattedMoney, calculatesTheDiscount } from '../../Utils/helpers'
import { Entypo, Feather } from '@expo/vector-icons'
import axios from 'axios';

export default function Shoes(props) {
  const [itemProperties, setProduct] = useState({
    id: props.id,
    img: props.img,
    cart: props.cart,
    price: props.price,
    favorite: props.favorite,
    discount: props.discount,
  });

  async function addOrRemoveFromFavorites() {
    try {
      setProduct({ itemProperties, favorite: true })
      const response = await axios.post('api/favorites/', itemProperties);
      setProduct(response.data)
    } catch (error) {
      console.log(error);
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
        <Image
          source={props.img}
          style={styles.imgShoes}
        />
      </View>
      <Text style={styles.textShoes}>
        {/* {filterDesc(props.children)} */}
        {props.children}
      </Text>

      <View style={{ flexDirection: 'row' }}>
        {(props.discount > 0) &&
          <Text style={styles.textShoes} >
            R${' '} {formattedMoney(calculatesTheDiscount(props.price, props.discount))}
          </Text>
        }

        <Text opacity={props.discount > 0 ? 0.5 : 1}
          style={[styles.textShoes, props.discount
            && { textDecorationLine: 'line-through' }]}>
          R${' '} {formattedMoney(props.price)}
        </Text>
      </View>

      <Text style={[styles.textShoes, styles.discount]}>
        {(props.discount > 0) && props.discount + '% off'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2.5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconHeart: {
    paddingRight: 10,
    marginBottom: -12,
    zIndex: 2,
  },
  imgShoes: {
    width: 185,
    height: 175,
  },
  textShoes: {
    fontSize: 15,
    marginRight: 10,
    marginVertical: '1.5%',
  },
  discount: {
    color: 'green'
  }
});