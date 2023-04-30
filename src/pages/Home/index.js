import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import * as Animatable from 'react-native-animatable'
import Shoes from '../../components/Shoes';
import axios from 'axios';

export default function Home() {
    const navigation = useNavigation();

    const [products, setProdutos] = useState([]);

    useEffect(() => {
        getShoes();
    }, []);

    async function getShoes() {
        try {
            const response = await axios.get('api/shoes/');
            setProdutos(response.data.shoes);
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
                        {chunk.map((product) => (
                            <Shoes
                                key={product.id}
                                img={product.img}
                                cart={product.cart}
                                price={product.price}
                                favorite={product.favorite}
                                discount={product.discount}
                                onClick={() => navigation.navigate('Detail',
                                    {
                                        img: product.img,
                                        cart: product.cart,
                                        price: product.price,
                                        favorite: product.favorite,
                                        discount: product.discount,
                                        description: product.description
                                    })}
                            >
                                {product.name}
                            </Shoes>
                        ))}
                    </Animatable.View>
                ))}
            </ScrollView>

        </View >
    );
}
