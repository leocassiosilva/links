import {Text, View, Image, TouchableOpacity, FlatList, Modal} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from './styles';
import { colors } from '@/styles/colors';

import { Categories } from '@/components/categories';

import { Link } from '@/components/link';

import { Option } from '@/components/option';


export default function Index() { 
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require("@/assets/logo.png")} style={styles.logo}/>
            <TouchableOpacity activeOpacity={0.7}>  
                <MaterialIcons name='add' size={32} color={colors.green[300]} />
            </TouchableOpacity>
        </View>
        <Categories />
        
        <FlatList 
        
            data={["1","2","3"]}
            keyExtractor={(item) => item}
            renderItem={() => (
                <Link name="Rockeseat" url="https://rocketseat.com.br" onDetails={() => console.log("Clicou!")} />
            
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

