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

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getShoes();
        }); return unsubscribe;
    }, [navigation]);

    
    async function getShoes() {
        try {
            setIsLoading(true)
            setProducts([])
            const response = await axios.get('api/shoes/');
            setProducts(response.data.shoes);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
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
                    style={styles.imageBanner}
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
            {isLoading && <Text style={styles.loading}> Carregando...</Text>}
            {!isLoading &&
                <ScrollView>
                    <Text style={styles.title}>LANÇAMENTOS</Text>
                    {chunkedProducts.map((chunk, index) => (
                        <Animatable.View
                            animation="slideInUp" duration={1000}
                            key={index} style={styles.containerShoes}>
                            {chunk.map((product) => (
                                <Shoes
                                    key={product.id}
                                    id={product.id}
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
                                            name: product.name,
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
            }
        </View >
    );
}
