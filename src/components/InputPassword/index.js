import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet
} from 'react-native';

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
                    onPress={props.onClick}
                >
                    <Text style={{ color: '#fff' }}> {props.secureTextEntry ? "off" : "on"}</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: 'red' }}>{props.msgError}</Text>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    containerInputPassword: {
        width: '100%',
        flexDirection: 'row',
        borderColor: 'red'
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    eye: {
        position: "absolute",
        right: 0,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

})