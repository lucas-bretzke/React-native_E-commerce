import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'


import Shoes from '../../components/Shoes';

export default function Home() {
    const navigation = useNavigation();

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

                <View style={styles.containerShoes}>
                    <Shoes img={require('../../assets/1.png')} price={14090} discount={10} onClick={() => navigation.navigate('Detail')}>
                        Nike Air Max Dia
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} price={28090} onClick={() => navigation.navigate('Detail')}>
                        Nike Downshifter 10
                    </Shoes>
                </View>

                <View style={styles.containerShoes}>
                    <Shoes img={require('../../assets/3.png')} price={56090} discount={15} onClick={() => navigation.navigate('Detail')}>
                        Nike Squidward Tentacles
                    </Shoes>
                    <Shoes img={require('../../assets/4.png')} price={22090} onClick={() => navigation.navigate('Detail')}>
                        Nike Epic React Flyknit 2
                    </Shoes>
                </View>

                <View style={styles.containerShoes}>
                    <Shoes img={require('../../assets/5.png')} price={12090} discount={22} onClick={() => navigation.navigate('Detail')}>
                        Nike Joyride Run Flyknit
                    </Shoes>
                    <Shoes img={require('../../assets/6.png')} price={920} onClick={() => navigation.navigate('Detail')}>
                        Nike Air Max Dia
                    </Shoes>
                </View>

            </ScrollView >

        </View >
    );
}
