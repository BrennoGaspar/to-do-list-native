import React, { forwardRef, LegacyRef } from "react";

import { View,Text, TextInput, TextInputProps } from 'react-native';
import { styles } from "./styles";

type Props = TextInputProps & {
    title?: string,
    placeholder?: string,
}

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{
    
    const {title,placeholder,value, onChangeText,...rest} = Props

    return(
        <>
            {title&&<Text style={styles.label}>{title}</Text>}
            <View style={styles.boxInput}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    {...rest}
                />
            </View>
        </>
    )
})