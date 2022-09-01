import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colours from "../config/colours";

function AppButton({ title, onPress, colour = "primary" }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colours[colour] }]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: colours.primary,
        borderRadius: 25,
        height: 50,
        justifyContent: "center",
        marginVertical: 5,
        width: "100%",
    },
    buttonText: {
        color: colours.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

export default AppButton;
