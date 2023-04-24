import React from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles'

export default function InputPassword(props) {

    return (
        <SafeAreaView>
            <View style={styles.containerInputPassword}>
                <TextInput
                    value={props.value}
                    onChangeText={props.onChangeText}
                    onSubmitEditing={props.onSubmitEditing}
                    secureTextEntry={props.secureTextEntry}
                    placeholder="******"
                    style={styles.input}
                    placeholderTextColor={'#ccc'}
                />
                <TouchableOpacity
                    style={[styles.eye, { backgroundColor: props.secureTextEntry ? '#00f' : '#444' }]}
                    onPress={props.onPress}
                >
                    <Text style={{ color: '#fff' }}> {props.secureTextEntry ? "off" : "on"}</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: 'red' }}>{props.msgError}</Text>
        </SafeAreaView>
    )
}