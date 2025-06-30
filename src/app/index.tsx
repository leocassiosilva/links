import {Text, View, Image, Alert,TouchableOpacity, FlatList, Modal, Linking} from 'react-native';
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
    const [showModal, setShowModal] = useState(false)
    const [ category, setCategory ] = useState("")
    const [ links, setLinks ] = useState<LinksStorage[]>([])
    const [link,setLink] = useState<LinksStorage>({} as LinksStorage)


    async function getLinks() {
        try{
            const response = await linkStorage.get()

            const filtered = response.filter((link) => link.category === category || category === "")

            setLinks(filtered)
            if (filtered.length === 0 && category !== "") {
                Alert.alert("Atenção", "Nenhum link encontrado para essa categoria");
            }
            
        }catch (error) {
            Alert.alert("Erro", "Não foi possível carregar os links");
        } 
    }

    function handleDetails(selected: LinksStorage) {
        setShowModal(true)
        setLink(selected)
    }

    async function linkRemove() {
        try {
            await linkStorage.remove(link.id)
            setShowModal(false)
            getLinks()
            Alert.alert("Sucesso", "Link excluído com sucesso!");
        }catch (error) {
            Alert.alert("Erro", "Não foi possível excluir o link");
            console.error(error);

        }
    }

    function handleRemove() {
        Alert.alert("Atenção", "Deseja excluir esse link?", [
            { style: "cancel", text: "Não" },
            { text: "Sim", onPress: () => linkRemove() }  
        ]);
    }

    async function handleOpenLink() {
        try {
            await Linking.openURL(link.url)
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível abrir o link");
            console.error(error);
        }
    }


        
    // useEffect(() => {
    //     getLinks()
    // }, [category])
    useFocusEffect(
        useCallback(() => {
            getLinks()
        }, [category])
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
                <Link name={item.name} url={item.url} onDetails={() => handleDetails(item)} />
            
            )}
            style={styles.links}
            contentContainerStyle={styles.linksContent}
            showsVerticalScrollIndicator={false}
        /> 
        <Modal visible={showModal} animationType='slide' transparent={true}> 
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalCategory}> 
                            {link.category}
                        </Text>
                        <TouchableOpacity onPress={() => setShowModal(false)}>
                            <MaterialIcons name='close' size={24} color={colors.gray[400]}/>  
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.modalLinkName}> 
                        {link.name}
                    </Text>
                    <Text style={styles.modalUrl}> 
                        {link.url}
                    </Text>

                    <View style={styles.modalFooter}> 
                        <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove} />
                        <Option name="Abrir" icon="web" onPress={handleOpenLink} />
                    </View>


                </View> 
            </View>
        </Modal>
    </View>
    
    );
}

