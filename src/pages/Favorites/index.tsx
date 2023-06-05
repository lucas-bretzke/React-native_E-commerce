import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native';
import Shoes from '../../components/Shoes';
import { ShoeItem } from '../../types/'
import axios from 'axios';

export default function Favorites({ navigation }: any) {
    const [favorites, setFavorites] = useState<ShoeItem[]>([]);

    async function getFavorites() {
        try {
            const response = await axios.get('api/favorites/');
            setFavorites(response.data.favorites);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        return navigation.addListener('focus', () => { getFavorites() });
    }, [navigation]);

    return (
        <ScrollView>
            <TouchableOpacity onPress={getFavorites}>
                <Text>Reload - {favorites.length}</Text>
            </TouchableOpacity>
            {favorites.length > 0 ? (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Shoes item={item} onClick={() => getFavorites()} />)}
                />
            ) : (
                <Text style={{ marginHorizontal: 'auto', marginTop: '50%' }}>
                    Nenhum item adicionado aos favoritos!
                </Text>
            )}
        </ScrollView>
    );
}
