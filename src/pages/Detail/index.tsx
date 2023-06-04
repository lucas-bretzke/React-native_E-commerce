import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleProp, ImageStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import { formattedMoney, calculatesTheDiscount } from '../../Utils/helpers'

type DetailType = {
    navigation: any;
    route: any;
}

export default function Detail({ navigation, route }: DetailType) {
    const { img, price, discount, name, description } = route.params.item;

    useEffect(() => { navigation.setOptions({ headerTitle: name }) }, [navigation, name]);

    const renderDiscount = () => calculatesTheDiscount(price, discount)

    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const handleDotPress = (index: number) => setActiveDotIndex(index)

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
                        {discount > 0 &&
                            <Text style={[styles.discountPrice]}>R$ {formattedMoney(renderDiscount())}</Text>
                        }

                        <Text style={[styles.price, discount && { textDecorationLine: 'line-through' }]}>
                            R$ {formattedMoney(price)}
                        </Text>

                        {discount > 0 && <Text style={styles.discount}>-{discount}%</Text>}
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Dot color="#2379f4" isActive={activeDotIndex === 0} onPress={() => handleDotPress(0)} />
                        <Dot color="#fb6e53" isActive={activeDotIndex === 1} onPress={() => handleDotPress(1)} />
                        <Dot color="#ddd" isActive={activeDotIndex === 2} onPress={() => handleDotPress(2)} />
                        <Dot color="#000" isActive={activeDotIndex === 3} onPress={() => handleDotPress(3)} />
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

                    <Footer navigation={navigation} />

                </View>
            </ScrollView >
        </View >
    );
}