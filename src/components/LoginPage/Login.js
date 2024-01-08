import React ,{useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./Login.style";


// import auth from '@react-native-firebase/auth';

const Login = ({navigation , route}) => {

    const [email,setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [users,setUsers] = useState([]);

    const onPressLogin= async () => {
        try{
             if(!email || !password) {
                Alert.alert("Social Campus" , "Email and password fields are required to fill", [{ //ALERT WEBDE GÖRÜNMÜYOR MOBİLDE SORUN YOK...
                   text:" Understood" , onPress: () => console.log("Alert closed...") }] );

                console.log("Please enter your email and password");
                return;
            }

            if((email==='yukselcsgn@gmail.com' || email =='borakol@gmail.com')
            && (password==="12345") ){
                console.log("User logged in successfully" , email, password);
                           
                navigation.navigate("Home");
   
            }

            const foundUser=users.find(user => user.email === email && user.password === password); // NOT: bu kod satırından
                                                                                                // catch' e kadar olan kısım çalışmıyor...
            if (foundUser) {
                console.log("User logged in successfully", email, password);
                navigation.navigate("Home");
            }
            
            else {
                console.log("Invalid email or password");
                Alert.alert("Social Campus", "Invalid email or password", [{
                  text: "Understood", onPress: () => console.log("Alert closed...")
                }]);
              }

        //firebase doğrulaması
        // const userCredential = await auth().signInWithEmailAndPassword(email,password)
        //console.log("User logged in successfully" + userCredential.user.email)
        //  console.log("User logged in successfully" + email); 
        
         //buradan sonra başka bir sayfaya yönlendirme işlemi yapılacak

        } catch(error){
            console.log("Login failed: " + error.message);
        }
       

    }

    const onPressForgotPassword= () => {
      
        if(!email){
            console.log("Please enter your email");
            return;
        }
        //Firebase doğrulaması
        // await auth.sendPasswordResetEmail(email);
        
        console.log("Password reset email sent successfully");
      
    }

    const onPressRegister = () => {
        navigation.navigate("Register");
    }

    return(
        <View style={styles.login_container}>
           
                    <Text style={styles.header_text}>Login Page</Text>
                     <Text style={styles.label}>Email</Text>
                        <View style={styles.input_info}>
                
                    <TextInput style={styles.input_text}
                     placeholder="Email"
                     placeholderTextColor="#003f5c"
                     onChangeText={(text)=> setEmail(text)}
                />
                        </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.input_info}>
                    <TextInput style={styles.input_text}
                        secureTextEntry 
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setPassword(text)}
                    />          
                </View>
           
                <TouchableOpacity onPress={onPressForgotPassword}>
                    <Text style={styles.forgot_password}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressLogin}>
                    <Text style={styles.loginBtn}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressRegister}>
                    <Text style={styles.registerBtn}>Register</Text>
                </TouchableOpacity>
         
        </View>
    )
}

export default Login;