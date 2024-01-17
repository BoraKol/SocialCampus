import { StyleSheet } from "react-native";

export default StyleSheet.create({
    register_container:{
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
        marginTop:30,
    },
    label:{
        textAlign:"left",
        width:"22.4%",
        marginBottom:5,
        fontSize:16,
        color:"black",

    },
    input_info:{
        width:"25%",
        backgroundColor:"#3AB4BA",
        borderRadius:25,
        height:50,
        marginBottom:10,
        justifyContent:"center",
        padding:20,
    },
    input_text:{
        height:60,
        color:"white",
        fontSize:16,
    },
    registerBtn:{
        backgroundColor:"orange" ,
        color:"black",
        borderRadius:25,
        width:150,
        textAlign:"center",
        padding:12,
        marginTop:15,
        marginBottom:7,
        fontSize:16,
        
    },

    backToLoginBtn:{
        backgroundColor:"orange" ,
        color:"black",
        borderRadius:25,
        width:150,
        textAlign:"center",
        padding:12,
        marginTop:10,
        fontSize:16,

    }
})