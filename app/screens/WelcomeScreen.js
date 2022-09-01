import React from "react";
import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";
import colours from "../config/colours";
import AppButton from "../components/AppButton";

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
            <AppButton
                title="Login"
                onPress={() => console.log("Login Pressed")}
            />
            <AppButton
                title="Register"
                onPress={() => console.log("Register Pressed")}
            />
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
        backgroundColor: colours.primary,
    },
    registerButton: {
        backgroundColor: colours.secondary,
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
