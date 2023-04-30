import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ViewBase } from 'react-native';
import styles from './styles';
import Shoes from '../../components/Shoes';
import * as Animatable from 'react-native-animatable'
import axios from 'axios';
import { ScrollView } from 'react-native-web';

export default function Favorites() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        getFavorites();
    }, []);

    async function getFavorites() {
        try {
            const response = await axios.get('api/favorites/');
            setFavorites(response.data.favorites);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView>
            <Animatable.View
                delay={600} animation="fadeInLeft">
                {favorites.length > 0 ?
                    <View>
                        <TouchableOpacity onPress={getFavorites}>
                            <Text>Reload</Text>
                        </TouchableOpacity>

                        < FlatList
                            data={favorites}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <Shoes
                                    // key={item.id}
                                    img={item.img}
                                    cart={item.cart}
                                    price={item.price}
                                    favorite={item.favorite}
                                    discount={item.discount}
                                >
                                    {item.name}
                                </Shoes>
                            }
                        />
                    </View>
                    :
                    <Text style={{ marginHorizontal: 'auto', marginTop: '50%' }}>Nenhum item adicionado aos favotitos!</Text>
                }
            </Animatable.View >
        </ScrollView>
    )

}