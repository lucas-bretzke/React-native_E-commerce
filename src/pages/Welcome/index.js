import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

import CarroC from '../../components/CarroC'


export default function Welcome() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <CarroC nome="Golf" />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </SafeAreaView>
    );
}