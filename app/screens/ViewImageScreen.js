import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colours from "../config/colours";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>

            <Image
                source={require("../assets/chair.jpg")}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
        backgroundColor: colours.primary,
        height: 50,
        width: 50,
    },
    container: {
        backgroundColor: colours.black,
        flex: 1,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
        backgroundColor: colours.secondary,
        height: 50,
        width: 50,
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
});
