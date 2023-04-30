import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Shoes from '../../components/Shoes';
import axios from 'axios';

export default function Favorites() {
    const navigation = useNavigation();
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
        const unsubscribe = navigation.addListener('focus', () => {
            getFavorites();
        }); return unsubscribe;
    }, [navigation]);

    return (
        <ScrollView>
            <TouchableOpacity onPress={getFavorites}>
                <Text>Reload - {favorites.length}</Text>
            </TouchableOpacity>
            {favorites.length > 0 ?
                <View>

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
                                getFavorites={getFavorites}
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
        </ScrollView>
    )

}