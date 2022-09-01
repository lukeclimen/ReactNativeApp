import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colours from "../config/colours";

function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: colours.primary,
    },
    buttonText: {
        color: colours.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

export default AppButton;
