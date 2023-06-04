import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

type DotProps = {
  color: string;
  isActive: boolean;
  onPress: () => void;
};

export default function Dot(props: DotProps) {
  const containerStyle = [styles.container, { backgroundColor: props.color },
  props.isActive ? styles.active : null,
  ];

  return (
    <TouchableOpacity onPress={props.onPress} style={containerStyle}/>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.05,
    borderRadius: Dimensions.get('window').width * 0.05 / 2,
    marginVertical: '6%',
    marginHorizontal: '2.5%',
    elevation: 5,
  },
  active: {
    borderWidth: 2,
    borderColor: 'black',
  },
});
