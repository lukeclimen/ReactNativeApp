import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colours from "../config/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                style={styles.closeIcon}
                name="close"
                size={40}
            />
            <MaterialCommunityIcons
                style={styles.deleteIcon}
                name="trash-can-outline"
                size={40}
            />

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
        color: colours.white,
    },
    container: {
        backgroundColor: colours.black,
        flex: 1,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
        color: colours.white,
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
});

export default ViewImageScreen;
