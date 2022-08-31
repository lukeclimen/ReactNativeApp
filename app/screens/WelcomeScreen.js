import React from "react";
import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";

export default function App() {
    console.log(require("../assets/background.jpg"));

    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        backgroundColor: "#fc5c65",
        height: 70,
    },
    registerButton: {
        width: "100%",
        backgroundColor: "#4ecdc4",
        height: 70,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logo: {
        height: 100,
        width: 100,
    },
});
