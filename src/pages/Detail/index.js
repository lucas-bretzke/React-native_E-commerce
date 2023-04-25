import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import { formattedMoney, calculatesTheDiscount } from '../../Utils/helpers'

export default function Detail({ navigation, route }) {

    const { img, price, discount, productName, description } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: productName
        });
    }, [navigation, productName]);


    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode="cover"
            />

            <View>
                <View style={{ flexDirection: 'row' }}>
                    {(discount > 0) &&
                        <Text style={[styles.title, {fontWeight: 'bold'}]} >
                            R${' '} {formattedMoney(calculatesTheDiscount(price, discount))}
                        </Text>
                    }

                    <Text opacity={discount > 0 ? 0.5 : 1}
                        style={[
                            styles.title,
                            discount && { textDecorationLine: 'line-through' }]}>
                        R${' '} {formattedMoney(price)}
                    </Text>
                </View>

                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 }]}>{productName}</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color="#2379f4" />
                    <Dot color="#fb6e53" />
                    <Dot color="#ddd" />
                    <Dot color="#000" />
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor="#17181a" color="#FFF" >40</SizeButton>
                        <SizeButton>37</SizeButton>
                        <SizeButton>39</SizeButton>
                        <SizeButton>42</SizeButton>
                    </ScrollView>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Nike Downshifter 10
                    </Text>
                    <Text style={styles.textContent}>
                        {description}
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: Amortecimento
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Mesh
                    </Text>
                </View>

                <Button />

                <View style={styles.line} />

                {/* <Footer /> */}

            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    image: {
        width: '100%',
        height: 470
    },
    title: {
        paddingHorizontal: '2%',
        fontSize: 24
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%'
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%',
    }
});
