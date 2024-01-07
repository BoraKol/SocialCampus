import React from 'react';

import { View, Text , Button} from 'react-native';

import styles from "./Home.style";

const Home = ({navigation}) => {

    const onPressToViewProfile = () => {
        navigation.navigate("Profile");
    }


    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Home Page</Text>
            <Button title='Profilime Git' onPress={onPressToViewProfile}/>
        </View>
    )
}

export default Home;