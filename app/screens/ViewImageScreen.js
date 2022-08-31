import React from "react";
import { View, Image, Platform, StatusBar, Dimensions } from "react-native";

export default function App() {
    const screenSize = Dimensions.get("screen");

    return (
        <View
            style={{
                backgroundColor: "#000",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                paddingVertical: 10,
                paddingTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
        >
            <View
                style={{
                    backgroundColor: "#fc5c65",
                    height: 50,
                    width: 50,
                }}
            ></View>
            <View
                style={{
                    backgroundColor: "#4ecdc4",
                    height: 50,
                    width: 50,
                }}
            ></View>

            <Image
                source={require("../assets/chair.jpg")}
                style={{
                    resizeMode: "contain",
                    position: "absolute",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    top: screenSize.height / 5,
                    width: "100%",
                    height: "100%",
                }}
            />
        </View>
    );
}
