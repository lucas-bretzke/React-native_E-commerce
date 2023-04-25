import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'

import Shoes from '../../components/Shoes';

export default function Home() {
    const navigation = useNavigation();

    const produtos = [
        { id: '1', name: 'Nike Air Max Dia', price: 14090, discount: 0, img: require('../../assets/1.png'), description: 'O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético' },
        { id: '2', name: 'Nike Downshifter 10', price: 28090, discount: 10, img: require('../../assets/2.png'), description: 'O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético' },
        { id: '3', name: 'Nike Squidward Tentacles', price: 56090, discount: 15, img: require('../../assets/3.png'), description: 'O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético' },
        { id: '4', name: 'Nike Epic React Flyknit 2', price: 22090, discount: 5, img: require('../../assets/4.png'), description: 'O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético' },
        { id: '5', name: 'Nike Joyride Run Flyknit', price: 12090, discount: 22, img: require('../../assets/5.png'), description: 'O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético' },
        { id: '6', name: 'Nike Air Max Dia', price: 92090, discount: 0, img: require('../../assets/6.png'), description: 'O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético' },
    ]

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

    const chunkedProdutos = chunk(produtos, 2);


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

                {chunkedProdutos.map((chunk, index) => (
                    <View key={index} style={styles.containerShoes}>
                        {chunk.map((produto) => (
                            <Shoes
                                key={produto.id}
                                img={produto.img}
                                price={produto.price}
                                discount={produto.discount}
                                onClick={() => navigation.navigate('Detail',
                                    {
                                        img: produto.img,
                                        price: produto.price,
                                        discount: produto.discount,
                                        productName: produto.name,
                                        description: produto.description
                                    })}
                            >
                                {produto.name}
                            </Shoes>
                        ))}
                    </View>
                ))}
            </ScrollView>

        </View >
    );
}
