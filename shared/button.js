import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default function FlatButton( {text, onPress} ) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.textButton}> {text} </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        backgroundColor: '#f01d07',
        marginTop:20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '70%',
        alignSelf: 'center',
    },
    textButton: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
})