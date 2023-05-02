import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { validateTheEmail } from '../../Utils/helpers'
import styles from './styles'


import InputPassword from '../../components/InputPassword'

export default function Login() {
    const navigation = useNavigation()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVisibility, setPasswordVisibility] = useState(true)
    const [msgError, setMsgError] = useState("")
    const [isButtonNext, setIsButtonNext] = useState(true)

    function singIn() {
        navigation.navigate('Home')
        console.log('Login')
    }

    function validateForm() {
        if (validateTheEmail(email) && password.length >= 6) {
            singIn()
        } else if (!validateTheEmail(email)) {
            setMsgError('E-mail inválido!')
        }
    }

    const visiblePassword = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    return (
        <View style={styles.container}>
            <Animatable.View delay={600} animation="fadeInLeft" style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>


            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder="fulano@gmail.com"
                    style={styles.input}
                    placeholderTextColor={'#ccc'}
                />
                <Text style={styles.title}>Senha</Text>

                <InputPassword
                    value={password}
                    msgError={msgError}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={passwordVisibility}
                    onClick={visiblePassword}
                />
                <TouchableOpacity
                    onPress={validateForm}
                    disabled={password.length >= 6 ? false : true}
                    style={[styles.button,
                    (password.length <= 5) && { backgroundColor: '#4444' }
                    ]}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View >
        </View >
    );
}