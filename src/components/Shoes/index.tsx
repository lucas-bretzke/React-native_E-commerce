import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { filterDesc, formattedMoney, calculatesTheDiscount } from '../../Utils/helpers'
import { Entypo, Feather } from '@expo/vector-icons'
import axios from 'axios';

type ShoesProps = {
  id: number;
  name: string;
  img: ImageSourcePropType;
  discount: number;
  price: number;
  favorite: boolean;
  onClick: () => void;
  getFavorites?: () => void;
};

export default function Shoes(props: ShoesProps) {
  const [itemProperties, setProduct] = useState<ShoesProps>({ ...props });

  async function addOrRemoveFromFavorites() {
    const setFavorite = { ...itemProperties, favorite: !itemProperties.favorite };

    if (!itemProperties.favorite) {
      try {
        updateProduct(setFavorite);
        await axios.post('/api/favorites', setFavorite);
      } catch (error) {
        console.log('SHOES POST ERROR', error);
      }
    } else {
      try {
        updateProduct(setFavorite);
        await axios.delete(`/api/favorites/${setFavorite.id}`);
      } catch (error) {
        console.log('SHOES POST ERROR', error);
      } finally {
        typeof props.getFavorites === "function" && props.getFavorites()
      }
    }
  }

  async function updateProduct(item: any) {
    try {
      setProduct(item);
      await axios.put(`/api/shoes/${item.id}`, item);
    } catch (error) {
      console.log('SHOE PUT ERROR', error);
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={props.onClick}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity style={styles.iconHeart} onPress={addOrRemoveFromFavorites}>
          {itemProperties.favorite ?
            <Entypo name='heart' size={21} color='#444' /> :
            <Feather name='heart' size={21} color='black' />
          }
        </TouchableOpacity>
        <Image source={props.img} style={styles.imgShoes} resizeMode="cover" />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{props.name}  {/* {filterDesc(props.name)} */}</Text>

        <View style={{ flexDirection: 'row' }}>
          {(props.discount > 0) &&
            <Text style={styles.textShoes} >
              R$ {formattedMoney(calculatesTheDiscount(props.price, props.discount))}
            </Text>
          }

          <Text style={[styles.textShoes, props.discount > 0 && { textDecorationLine: 'line-through', color: '#444444' }]}>
            R$ {formattedMoney(props.price)}
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
  }
});
