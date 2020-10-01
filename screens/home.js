import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home(){
    console.log("home");
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.textTitle}>Home Screen</Text>
        </View>
    )
}