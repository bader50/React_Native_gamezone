import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container : {
        // top:0,
        flex:1,
        padding:30,
        // backgroundColor:"white",
    },
    textTitle:{
        fontWeight: 'bold',
        fontSize:18,
        color:"#333",
    },
    paragraph:{
        marginVertical:10,
        lineHeight:20,
    },
    input: {
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        fontSize:18,
    },
});

export const Images = {
    ratings : {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    },
};