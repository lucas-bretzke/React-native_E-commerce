import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { filterDesc, formattedMoney, calculatesTheDiscount } from '../../Utils/helpers'

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