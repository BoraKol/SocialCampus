import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from "./Profile.style";

const Profile = ({navigation}) => {

    const onPressBacktoHome = () => {
        navigation.goBack("Home");
    }
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Profile Page</Text>
            <TouchableOpacity style={styles.btn} 
            onPress={onPressBacktoHome}>
                Back to Home
            </TouchableOpacity>
        </View>
    )
}

export default Profile;