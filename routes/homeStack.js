import {createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';


const screens = {
    Home:{
        screen: Home,
        navigationOptions:({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='GameZone' />
            }
        }
    },
    ReviewDetails: {
        screen:ReviewDetails,
        navigationOptions:{
            title: "Review Details",
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:"#444",
        headerStyle:{ 
            height: 70,
            },
        headerBackground: () =>
            <Image
              style={{
                height:70,
              }}
              source={require('../assets/game_bg.png')}
              
            />,
    }
});

export default HomeStack;