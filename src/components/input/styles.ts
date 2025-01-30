import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    label:{
        fontFamily: 'Arial',
        fontSize: 15,
        fontWeight:'bold'
    },
    boxInput:{
        backgroundColor: themas.colors.secondary,
        borderWidth:1,
        borderRadius:40,
        marginTop:5,
        marginBottom:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10
    },
    input:{
        borderRadius:40, 
        marginHorizontal:5
    },
});