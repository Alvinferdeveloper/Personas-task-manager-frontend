import { Text, View, StyleSheet } from "react-native";

export default function Loading(){
    return <View style={styles.container}>
        <Text>Loadin Page ...</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});