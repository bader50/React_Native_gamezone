import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList} from 'react-native';
import Card from '../shared/card';
import {globalStyles} from '../styles/global';

export default function Home({navigation}){
    const [review, setReview] = useState([
        {title: "zelda et ses amis", rating: 5, body: "ce jeu est trop bien", key: 1},
        {title: "zelda et ses cousins", rating: 4, body: "ce jeu est trop bien, attention aux cousins", key: 2},
        {title: "zelda et ses potos", rating: 3, body: "ce jeu est trop bien, attention aux macabé", key: 3},
    ]);

    const onPressHandler = (item)=>{
        navigation.navigate('ReviewDetails', item);
    }

    return (
        <View style={globalStyles.container}>
            
                <FlatList 
                    data={review}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => onPressHandler(item)}>
                            <Card>
                                <Text style={globalStyles.textTitle}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                    )
                }/>
            
        </View>
    )
}