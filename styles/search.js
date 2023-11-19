import { StyleSheet } from 'react-native'

const search = StyleSheet.create({
    bar:{
        width: 349,
        height: 30,
        backgroundColor: "#5bb4f14c",
        borderRadius: 10,
        position: "absolute",
        marginTop: 91,
        marginLeft: 22,
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowOffset: {width: 4,height: 4},
    },
    text:{
        fontFamily: "Orbitron-VariableFont_wght",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: 10,
        color: "#fff",
        fontSize: 16,
        fontWeight: 600,
        opacity: 0.8
    }
});

export default search;