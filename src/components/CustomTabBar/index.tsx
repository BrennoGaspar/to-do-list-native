import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {AntDesign} from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';


const CustomTabBar: React.FC<BottomTabBarProps> = (props) => {
    return(
            <View style={styles.tabArea}>
                <TouchableOpacity style={styles.tabItem}>
                    <AntDesign 
                        name="bars"
                        size={30}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItemButton}>
                    <View style={{width:'100%', alignItems:'center', top: '28%'}}>
                        <AntDesign 
                            name="pluscircleo"
                            size={30}
                            color={'white'}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem}>
                    <AntDesign 
                        name="user"
                        size={30}
                    />
                </TouchableOpacity>
            </View>
    )
}
export default CustomTabBar;