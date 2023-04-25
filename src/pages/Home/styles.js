import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    },
    containerText: {
        flexDirection: 'row',
        marginVertical: '3%',
        marginHorizontal: '5%'
    },
    text: {
        fontSize: 24,
        marginHorizontal: '1%'
    },
    title: {
        fontSize: 20,
        marginVertical: '1%',
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    },
    containerShoes: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});