import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Shoes from '../../components/Shoes';
import axios from 'axios';

export default function Favorites() {
    const [favorites, setFavorites] = useState([])

    async function getFavorites() {
        try {
            const response = await axios.get('api/favorites/');
            setFavorites(response.data.favorites);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <ScrollView>
            <View>
                {favorites.length > 0 ?
                    <View>
                        <TouchableOpacity onPress={getFavorites}>
                            <Text>Reload - {favorites.length}</Text>
                        </TouchableOpacity>

                        < FlatList
                            data={favorites}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <Shoes
                                    id={item.id}
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
                    : <Text style={{ marginHorizontal: 'auto', marginTop: '50%' }}>
                        Nenhum item adicionado aos favotitos!
                    </Text>
                }
            </View >
        </ScrollView>
    )

}