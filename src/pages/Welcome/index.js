import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation()

    return (
        <View style={myStyles.container}>
            <View style={myStyles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../img/logo.png')}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={myStyles.containerForm}>
                <Text style={myStyles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
                <Text style={myStyles.text}>Faça o login para começar</Text>

                <TouchableOpacity
                    style={myStyles.button}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={myStyles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}


const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifycontent: 'center'
    },
    buttonText: {
        fonrSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})