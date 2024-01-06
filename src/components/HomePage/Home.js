import React from 'react';

import { View, Text , Button} from 'react-native';

import styles from "./Home.style";

const Home = ({navigation}) => {

    const onPressToViewProfile = () => {
        navigation.navigate("Profile");
    }


    return(
        <View>
            <Text>Home Page</Text>
            <Button title='Profilime GİT' onPress={onPressToViewProfile}/>
        </View>
    )
}

export default Home;