import { StyleSheet } from "react-native";

export default StyleSheet.create({
    login_container:{
        flex:1,
        backgroundColor:"#4FD3DA",
        alignItems:"center",
        justifyContent:"center",
    },
    header_text:{
        fontWeight:"bold",
        fontSize:30,
        color:"#fb5b5a",
        marginBottom:40,
    },
    label:{
       textAlign:"left",
       width:"22.4%", 
       marginBottom:5,
       color:"white",
       fontSize:16,
    },
    input_info:{
        width: "25%",
        backgroundColor:"#3AB4BA",
        borderRadius:25,
        height:50,
        marginBottom:10,
        justifyContent:"center",
        padding:20,

    },
    input_text: {
        height:60,
        color:"white",
        
    },
    forgot_password: {
        marginTop:10,
        color:"white",
        fontSize:14,
       
    },
    loginBtn:{
        backgroundColor:"orange",
        borderRadius:25,
        width:100,
        textAlign:"center",
        padding:12,
        marginTop:20,
        marginBottom:10,
        fontSize:14, 
    },
    registerBtn:{
        color:"black",
        backgroundColor:"orange",
        width:100,
        textAlign:"center",
        fontSize:14,
        marginTop:10,
        padding:12,
        borderRadius:25,
        
    },


})