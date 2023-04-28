import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import * as Animatable from 'react-native-animatable'
import Shoes from '../../components/Shoes';


export default function Home() {
    const navigation = useNavigation();

    const [products, setProdutos] = useState([]);

    useEffect(() => {
        getShoes();
    }, []);

    async function getShoes() {
        try {
            const response = await fetch('api/shoes/');
            const data = await response.json();
            setProdutos(data.shoes);
        } catch (error) {
            console.log(error);
        }
    }
    const chunk = (arr, size) => {
        return arr.reduce((chunks, el, i) => {
            if (i % size === 0) {
                chunks.push([el]);
            } else {
                chunks[chunks.length - 1].push(el);
            }
            return chunks;
        }, []);
    };


    const chunkedProducts = chunk(products, 2);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.image}
                />

                <View style={styles.containerText}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line} />

            <ScrollView>
                <Text style={styles.title}>LANÇAMENTOS</Text>

                {chunkedProducts.map((chunk, index) => (
                    <Animatable.View
                        delay={600} animation="fadeInLeft"
                        key={index} style={styles.containerShoes}>
                        {chunk.map((produto) => (
                            <Shoes
                                key={produto.id}
                                img={produto.img}
                                price={produto.price}
                                discount={produto.discount}
                                onClick={() => navigation.navigate('Detail',
                                    {
                                        img: produto.img,
                                        cart: produto.cart,
                                        price: produto.price,
                                        productName: produto.name,
                                        favorite: produto.favorite,
                                        discount: produto.discount,
                                        description: produto.description
                                    })}
                            >
                                {produto.name}
                            </Shoes>
                        ))}
                    </Animatable.View>
                ))}
            </ScrollView>

        </View >
    );
}
