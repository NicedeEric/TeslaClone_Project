import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        width: '100%',
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
})
export default styles