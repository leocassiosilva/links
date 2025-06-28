import {Text, View, Image, Alert,TouchableOpacity, FlatList, Modal} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from './styles';
import { colors } from '@/styles/colors';

import { Categories } from '@/components/categories';

import { Link } from '@/components/link';

import { Option } from '@/components/option';

import { router, useFocusEffect } from "expo-router";
import { useState, useCallback} from "react";
import { linkStorage, LinksStorage } from '@/storage/link-storage';



export default function Index() { 
    const [ category, setCategory ] = useState("")
    const [ links, setLinks ] = useState<LinksStorage[]>([])
    
    async function getLinks() {
        try{
            const response = await linkStorage.get()
            setLinks(response)
            console.log(response)
        }catch (error) {
            Alert.alert("Erro", "Não foi possível carregar os links");
        } 
    }

    // useEffect(() => {
    //     getLinks()
    // }, [category])
    useFocusEffect(
        useCallback(() => {
            getLinks()
        }, [])
    )

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require("@/assets/logo.png")} style={styles.logo}/>
            <TouchableOpacity onPress={() => router.navigate("./add")}>  
                <MaterialIcons name='add' size={32} color={colors.green[300]} />
            </TouchableOpacity>

        </View>
        <Categories onChange={setCategory} selected={category}/>
        
        <FlatList 
        
            data={links}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Link name={item.name} url={item.url} onDetails={() => console.log("Clicou!")} />
            
            )}
            style={styles.links}
            contentContainerStyle={styles.linksContent}
            showsVerticalScrollIndicator={false}
        /> 
        <Modal visible={false}> 
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalCategory}> 
                            Curso
                        </Text>
                        <MaterialIcons name='close' size={24} color={colors.gray[400]}/>  
                    </View>
                    <Text style={styles.modalLinkName}> 
                        Rocketseat
                    </Text>
                    <Text style={styles.modalUrl}> 
                        https://rocketseat.com.br
                    </Text>

                    <View style={styles.modalFooter}> 
                        <Option name="Excluir" icon="delete" variant="secondary" onPress={() => console.log("Excluir")} />
                        <Option name="Abrir" icon="language" onPress={() => console.log("Abrir")} />
                    </View>


                </View> 
            </View>
        </Modal>
    </View>
    
    );
}

