<<<<<<< HEAD
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from './styles';
import { colors } from '@/styles/colors';
import { Category } from '@/components/category';
=======
import {Text, View } from 'react-native';


import { styles } from './styles';

>>>>>>> aab65e4 (fix: corrigindo arquivos e pastas da aplicação)

export default function Index() { 
    return (
    <View style={styles.container}>
<<<<<<< HEAD
        <View style={styles.header}>
            <Image source={require("@/assets/logo.png")} style={styles.logo}/>
            <TouchableOpacity activeOpacity={0.7}>  
                <MaterialIcons name='add' size={32} color={colors.green[300]} />
            </TouchableOpacity>
        </View>
        <Category name="Projeto" icon="code" />
        <Category name="Teste" icon="code" />
=======

        <Text style={styles.title}>Bem-vindo ao React Native!</Text>
        <Text style={styles.title}>Este é o seu ponto de partida.</Text>
        <Text style={styles.title}>Explore e comece a construir seu aplicativo.</Text>
>>>>>>> aab65e4 (fix: corrigindo arquivos e pastas da aplicação)
    </View>

    );
}

