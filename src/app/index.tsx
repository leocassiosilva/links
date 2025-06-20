import {Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from './styles';
import { colors } from '@/styles/colors';
import { Category } from '@/components/category';

export default function Index() { 
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require("@/assets/logo.png")} style={styles.logo}/>
            <TouchableOpacity activeOpacity={0.7}>  
                <MaterialIcons name='add' size={32} color={colors.green[300]} />
            </TouchableOpacity>
        </View>
        <Category name="Projeto" icon="code" isSlected/>
        <Category name="Site" icon="language" isSlected={false}/>
        <Category name="Video" icon="movie" isSlected={false}/>
    </View>

    );
}

