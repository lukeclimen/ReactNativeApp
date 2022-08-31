import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";

export default function App() {
    console.log(require("./assets/background.jpg"));

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-end",
            }}
        >
            <ImageBackground
                source={require("./assets/background.jpg")}
                style={{
                    height: "100%",
                    width: "100%",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        position: "absolute",
                        flexDirection: "column",
                        alignItems: "center",
                        top: 100,
                    }}
                >
                    <Image
                        source={require("./assets/logo-red.png")}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                    <Text>Sell What You Don't Need</Text>
                </View>
                <View
                    style={{
                        backgroundColor: "#4ecdc4",
                        width: "100%",
                        height: 50,
                    }}
                ></View>
                <View
                    style={{
                        backgroundColor: "#fc5c65",
                        width: "100%",
                        height: 50,
                    }}
                ></View>
            </ImageBackground>
        </View>
    );
}
