import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global';


export default function ReviewDetails({navigation}){

    const onPressHandler = ()=>{
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title='go back' onPress={onPressHandler} />
        </View>
    )
};