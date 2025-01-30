import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.bgScreen
    },
    up:{
        marginTop:'15%',
        height:'33.4%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    uptext:{
        paddingTop: '5%',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 23
    },
    mid:{
        height:'33.3%',
        width:'100%',
        padding:20,
        justifyContent:'center',
        marginTop:'-5%'
    },
    down:{
        height:'33.3%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    endtext:{
        marginTop: '-25%',
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: '600',
        color: themas.colors.texts
    },
    link:{
        color:'blue'
    }
  });