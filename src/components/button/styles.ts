import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    button:{
        backgroundColor: themas.colors.secondary,
        width: '30%',
        height: '20%',
        alignItems:'center',
        justifyContent: 'center',
        borderWidth:2,
        borderRadius:40,
        marginBottom:'40%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10
    },
    buttontext:{
        fontFamily: 'Arial',
        fontSize:18,
        fontWeight:'bold'
    }
});