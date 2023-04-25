import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import InputPassword from '../../components/InputPassword'

export default function Login() {
    const navigation = useNavigation()


    const [email, setName] = useState("lucas@gmail.com")
    const [password, setPassword] = useState("")
    const [passwordVisibility, setPasswordVisibility] = useState(true)
    const [msgError, setMsgError] = useState("")
    const [isButtonNext, setIsButtonNext] = useState(true)

    const handlePasswordChange = (password) => {
        setPassword(password);
        setIsButtonNext(password.length < 6 || email.length <= 10);
    }
    const handleMsgError = () => {
        let msg = "";
        (password || email === "") && (msg = 'Ops! Algum campo está vazio');
        setMsgError(msg);
    };

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
                    onChangeText={text => setName(text)}
                    onSubmitEditing={handleMsgError}
                    placeholder="fulano@gmail.com"
                    style={styles.input}
                    placeholderTextColor={'#ccc'}
                />
                <Text style={styles.title}>Senha</Text>

                <InputPassword
                    value={password}
                    msgError={msgError}
                    onChangeText={handlePasswordChange}
                    onSubmitEditing={handleMsgError}
                    secureTextEntry={passwordVisibility}
                    onClick={visiblePassword}
                />
                <TouchableOpacity
                    onPress={() => { [handlePasswordChange, handleMsgError, navigation.navigate('Home')] }}
                    disabled={isButtonNext}
                    style={[styles.button,
                    (password.length <= 5 || email.length <= 10) && { backgroundColor: '#4444' }
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