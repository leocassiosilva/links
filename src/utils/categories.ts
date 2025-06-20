import { MaterialIcons } from "@expo/vector-icons"


type Category = {
    id: string
    name: string
    icon: keyof typeof MaterialIcons.glyphMap

}


export const categories: Category[] = [
    {id:"1", name: "Curso", icon: "code"}, 
    {id:"2", name: "Projeto", icon: "folder"},
    {id:"2", name: "Site", icon: "language"},
    {id:"2", name: "Artigo", icon: "newspaper"},
    {id:"2", name: "Vídeo", icon: "movie"},
    {id:"2", name: "Documentação", icon: "content-paste"},
]
