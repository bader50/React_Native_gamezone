import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../shared/card';
import {globalStyles} from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './ReviewForm'

export default function Home({navigation}){
    const [modalOpen, setModalOpen] = useState(false);
    const [review, setReview] = useState([
        {title: "zelda et ses amis", rating: 5, body: "ce jeu est trop bien", key: 1},
        {title: "zelda et ses cousins", rating: 4, body: "ce jeu est trop bien, attention aux cousins", key: 2},
        {title: "zelda et ses potos", rating: 3, body: "ce jeu est trop bien, attention aux macabé", key: 3},
    ]);

    const onPressHandler = (item)=>{
        navigation.navigate('ReviewDetails', item);
    }

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReview((currentReview) => {
            return [ review, ...currentReview]
        });
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent} >
                        <MaterialIcons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList 
                data={review}
                keyExtractor={ (item, index) => index.toString() }
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


const styles = StyleSheet.create({
    modalToggle : {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        padding:10,
        borderRadius:100,
        borderWidth: 1,
        borderColor:'#f2f2f2',
        alignSelf:'center',
    },
    modalClose: {
        marginTop:10,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
      }
})