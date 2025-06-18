import {Text, View } from 'react-native';


import { styles } from './styles';


export default function Index() { 
    return (
    <View style={styles.container}>

        <Text style={styles.title}>Bem-vindo ao React Native!</Text>
        <Text style={styles.title}>Este é o seu ponto de partida.</Text>
        <Text style={styles.title}>Explore e comece a construir seu aplicativo.</Text>
    </View>

    );
}

