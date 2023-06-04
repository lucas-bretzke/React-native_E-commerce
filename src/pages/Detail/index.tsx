import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleProp, ImageStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import { formattedMoney, calculatesTheDiscount } from '../../Utils/helpers'

type DetailProps = {
    navigation: any;
    route: any;
}

export default function Detail({ navigation, route }: DetailProps) {

    const { img, price, discount, name, description } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: name
        });
    }, [navigation, name]);

    const renderDiscount = () => {
        const value = calculatesTheDiscount(price, discount)
        if (discount > 0)
            return <Text style={[styles.discountPrice]}>R$ {formattedMoney(value)}</Text>
    };

    return (
        <View>
            <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.navigate('Home')}>
                <Ionicons name="close-outline" size={35} color="black" />
            </TouchableOpacity>

            <ScrollView style={styles.container}>
                <Image source={require('../../assets/detail.png')} style={styles.image as StyleProp<ImageStyle>} resizeMode="cover" />

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{name}</Text>

                    <View style={styles.priceContainer}>
                        {renderDiscount()}

                        <Text style={[styles.price, discount && { textDecorationLine: 'line-through' }]}>
                            R${' '} {formattedMoney(price)}
                        </Text>

                        {(discount > 0) && <Text style={[styles.discount, { fontSize: 20 }]} >-{discount}%</Text>}
                    </View>

                    <View style={styles.dotContainer}>
                        <Dot color="#2379f4" />
                        <Dot color="#fb6e53" />
                        <Dot color="#ddd" />
                        <Dot color="#000" />
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor="#17181a" color="#FFF" >40</SizeButton>
                        <SizeButton>37</SizeButton>
                        <SizeButton>39</SizeButton>
                        <SizeButton>42</SizeButton>
                    </ScrollView>

                    <View style={styles.textContent}>
                        <Text style={styles.textTitle}>Nike Downshifter 10</Text>
                        <Text style={styles.textContent}>{description}</Text>
                        <Text style={styles.textList}>- Categoria: Amortecimento</Text>
                        <Text style={styles.textList}>- Material: Mesh</Text>
                    </View>

                    <Button />

                    <View style={styles.line} />

                    <Footer />

                </View>
            </ScrollView>
        </View>
    );
}