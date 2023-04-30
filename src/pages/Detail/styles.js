import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        zIndex: 1
    },
    closeBtn: {
        position: 'fixed',
        top: '5%',
        right: '5%',
        opacity: .7,
        zIndex: 2,
    },
    image: {
        width: '100%',
        height: 470
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    price1: {
        fontSize: 22,
        padding: '1%',
        color: 'white',
        backgroundColor: 'black',
    },
    price2: {
        fontSize: 22,
        padding: '1%',
    },
    discount: {
        fontSize: 22,
        marginLeft: '2%',
        padding: '1%',
        color: 'white',
        backgroundColor: '#e21d1d',
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%'
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%',
    }
});