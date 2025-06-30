import { useState } from "react";
import { Text, TouchableOpacity, View, Alert} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { linkStorage } from '@/storage/link-storage';
import uuid from 'react-native-uuid';

export default function Add() {
  
  const [ category, setCategory ] = useState("");
  const [ name, setName ] = useState(""); 
  const [ url, setUrl ] = useState("");

  async function handleAdd() {
    try {
      if (!category){
        return Alert.alert("Atenção", "Selecione uma categoria");
      }

      if (!name.trim()){
        return Alert.alert("Atenção", "Informe um nome");
      }

      if (!url.trim()){
        return Alert.alert("Atenção", "Informe uma URL");
      }

      await linkStorage.save({ 
          id: uuid.v4(),
          name,
          url,
          category,
        })

      Alert.alert("Sucesso", "Link adicionado com sucesso!", [
        {
          text: "OK",
          onPress: () => router.back()
        }
      ])
      const data = await linkStorage.get()
      console.log(data);




    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível adicionar o link");
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text >Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category}/>
      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false}/>
        <Input placeholder="Url" onChangeText={setUrl} autoCorrect={false}/>
        <Button title="Adicionar" onPress={handleAdd}/>

      </View>


    </View>
  )
}