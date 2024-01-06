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
    },
    input_info:{
        width:"20%",
        backgroundColor:"#3AB4BA",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:25,
    },
    input_text:{
        height:50,
        color:"white",
    },
    registerBtn:{
        backgroundColor:"orange" ,
        color:"black",
        borderRadius:25,
        width:100,
        textAlign:"center",
        padding:12,
        marginTop:40,
        marginBottom:10,
        fontSize:14,
        
    },

    backToLoginBtn:{
        backgroundColor:"orange" ,
        color:"black",
        borderRadius:25,
        width:100,
        textAlign:"center",
        padding:12,
        marginTop:10,
        fontSize:14,

    }
})