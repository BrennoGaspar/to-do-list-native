import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    Alert,
    TextInput,
} from 'react-native';
import { styles } from "./styles";
import Logo from '../../assets/list.png'
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import {useNavigation, NavigationProp} from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation<NavigationProp<any>>();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[loading, setLoading] = useState(false);

    async function getLogin(){
        try{
            setLoading(true)
            if(!username || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }

            navigation.navigate('BottomRoutes')
            
        }catch (err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    return(
        <View style={styles.container}>
            
            {/* parte de cima */}
            <View style={styles.up}>
                <Image style={{height:80, width:80, tintColor:themas.colors.primary}}
                    source={Logo}
                />
                <Text style={styles.uptext}>Seja bem-vindo!</Text>
            </View>

            {/* parte do meio */}
            <View style={styles.mid}>
                <Input
                    value={username}
                    onChangeText={setUsername}
                    title='NOME'
                    placeholder="Digite seu nome"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    placeholder="Digite sua senha"
                />
            </View>            

            {/* parte de baixo */}
            <View style={styles.down}>
                <Button 
                    titulo='Entrar'
                    loading={loading}
                    onPress={()=>getLogin()}
                />
            </View>

            <Text style={styles.endtext}>Não tem conta? <Text style={styles.link}>Crie agora!</Text></Text>

        </View>
    )
}