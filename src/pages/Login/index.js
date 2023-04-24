import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

import * as Animatable from 'react-native-animatable'


export default function Login() {

    function visibilityButton() {
        
    }

    return (
        <View style={styles.container}>
            <Animatable.View delay={600} animation="fadeInLeft" style={styles.containerHeader}>
                <Text style={styles.message}>Bem-voindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="fulano@gmail.com"
                    style={styles.input}
                    placeholderTextColor={'#ccc'}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="******"
                    style={styles.input}
                    placeholderTextColor={'#ccc'}
                />
                <TouchableOpacity style={styles.button} onPress={visibilityButton}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};
