import React from 'react';

import { View, Text } from 'react-native';

import styles from "./Profile.style";

const Profile = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Profile Page</Text>
        </View>
    )
}

export default Profile;