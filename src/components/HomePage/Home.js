import React from 'react';

import { View, Text , TouchableOpacity} from 'react-native';

import styles from "./Home.style";

const Home = ({navigation}) => {

    const onPressToViewProfile = () => {
        navigation.navigate("Profile");
    }

    const onPressBacktoLogin = () => {
        navigation.goBack("Home");
    }


    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Home Page</Text>
            <TouchableOpacity style={styles.btn}
            onPress={onPressToViewProfile}>
                View Profile
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} 
            onPress={onPressBacktoLogin}>
                Back to Login
            </TouchableOpacity>
        </View>
    )
}

export default Home;