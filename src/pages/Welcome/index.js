import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Text>Tela bem vindo</Text>
        </View>
    );
}

const MyStyles = StyleSheet.create({
    container: {}
});