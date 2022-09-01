import React from "react";
import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";
import colours from "../config/colours";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
    console.log(require("../assets/background.jpg"));

    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.background}
            blurRadius={5}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title="Login"
                    onPress={() => console.log("Login Pressed")}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title="Register"
                    onPress={() => console.log("Register Pressed")}
                    colour="secondary"
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        paddingHorizontal: 20,
        width: "100%",
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
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;
