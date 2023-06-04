import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ShoeItem } from '../../types'
import Shoes from '../Shoes';
import axios from 'axios';

type footerType = {
    navigation: any;
}

export default function Footer({ navigation }: footerType) {

    const [shoes, setShoes] = useState<ShoeItem[]>([]);

    async function getShoes() {
        try {
            const response = await axios.get('api/shoes/');
            setShoes(response.data.shoes.slice(0, 4));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        return navigation.addListener('focus', () => getShoes());
    }, [navigation]);

    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={shoes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Shoes
                            key={item.id}
                            item={item}
                            onClick={() => navigation.navigate('Detail', { item: item })}
                        />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})
