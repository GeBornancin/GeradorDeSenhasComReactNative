import { View, Text, StyleSheet} from 'react-native'

export function Passwords() {
    return(
        <View style={styles.container}>
            <Text>Senha</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})