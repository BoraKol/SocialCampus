import React, { useState,useEffect } from 'react';
import {View,Text, Button, TextInput , TouchableOpacity, Alert } from "react-native";

import styles from "./Register.style";

const Register= ({navigation}) => {

 const onPressBackToLoginPage= () => {
  navigation.goBack("Login" , {email,password});
 }
  
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [users , setUsers] = useState([]);
  
  useEffect(() => {
    console.log('Current users:', users);
  }, [users]); // Log users whenever it changes


  const handleSubmit= () => {

    const user= {
      name,
      surname,
      email,
      password,
      college,
    }

       if(!user.name || !user.surname || !user.email || !user.password || !user.college){
        Alert.alert('Social Campus' , "User registration failed , all fields are required to fill" , [{
          text:"Understood" , onPress: () => { console.log("Alert closed...")}
        }])
       console.log("User registration failed ");
       return;
       }

     setUsers((prevUsers) => [...prevUsers, user]); // Update users state with the new user
     console.log('User successfully registered! ', user);
    
  }

  return (
    <View style={styles.register_container}>
        <Text style={styles.header_text}>Register Page</Text>
        <View style={styles.input_info}>         
            <TextInput placeholder='Name' placeholderTextColor="#003f5c"
            style={styles.input_text}
          onChangeText={text => setName(text)}
          />       
        </View>
        <View style={styles.input_info}>
          <TextInput placeholder='Surname' 
          placeholderTextColor="#003f5c"
          style={styles.input_text}
          onChangeText={text => setSurname(text)}
          />
        </View>
        <View style={styles.input_info}>
          <TextInput placeholder='Email'
          placeholderTextColor="#003f5c"
          style={styles.input_text}
          onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.input_info}>
          <TextInput placeholder='Password' 
          placeholderTextColor="#003f5c"
          style={styles.input_text}
          onChangeText={text => setPassword(text)} />
        </View>
        <View style={styles.input_info}>
          <TextInput placeholder='College'
          placeholderTextColor="#003f5c"
          style={styles.input_text}
          onChangeText={text => setCollege(text)} />
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.registerBtn}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBackToLoginPage}>
          <Text style={styles.backToLoginBtn}>Back to Login </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Register;