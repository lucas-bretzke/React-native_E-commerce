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

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.png')} cost="R$140,90" onClick={() => navigation.navigate('Detail')}>
                        Nike Air Max Dia
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} cost="R$280,90" onClick={() => navigation.navigate('Detail')}>
                        Nike Downshifter 10
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/3.png')} cost="R$560,90" onClick={() => alert('CLICOU')}>
                        Nike Squidward Tentacles
                    </Shoes>
                    <Shoes img={require('../../assets/4.png')} cost="R$220" onClick={() => alert('CLICOU')}>
                        Nike Epic React Flyknit 2
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/5.png')} cost="R$120,90" onClick={() => alert('CLICOU')}>
                        Nike Joyride Run Flyknit
                    </Shoes>
                    <Shoes img={require('../../assets/6.png')} cost="R$920" onClick={() => alert('CLICOU')}>
                        Nike Air Max Dia
                    </Shoes>
                </View>

            </ScrollView>

        </View>
    );
}
