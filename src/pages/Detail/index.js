import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import { formattedMoney, calculatesTheDiscount } from '../../Utils/helpers'

export default function Detail({ navigation, route }) {

    const { img, price, discount, name, description } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: name
        });
    }, [navigation, name]);


    return (
        <View>
            <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.navigate('Home')}>
                <Text>
                    <Ionicons name="close-outline" size={35} color="black" />
                </Text>
            </TouchableOpacity>

            <ScrollView style={styles.container}>
                <Image
                    source={require('../../assets/detail.png')}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View>
                    <View >
                        <Text style={styles.title}>{name}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10, }}>
                        {(discount > 0) &&
                            <Text style={styles.price1} >
                                R${' '} {formattedMoney(calculatesTheDiscount(price, discount))}
                            </Text>
                        }

                        <Text
                            style={[styles.price2, discount && { textDecorationLine: 'line-through' }]}>
                            R${' '} {formattedMoney(price)}
                        </Text>

                        {(discount > 0) &&
                            <Text style={[styles.discount, { fontSize: 20 }]} >-{discount}%</Text>
                        }
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
        </View>
    );
}
