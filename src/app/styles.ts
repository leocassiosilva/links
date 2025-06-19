import { StyleSheet } from "react-native";

<<<<<<< HEAD:src/app/index/styles.ts
import { colors} from '@/styles/colors';
=======
import { colors} from '../styles/colors';
>>>>>>> aab65e4 (fix: corrigindo arquivos e pastas da aplicação):src/app/styles.ts

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',

    }, 
    title:{
        color: colors.green[900],
        fontSize: 22,
    },
})
