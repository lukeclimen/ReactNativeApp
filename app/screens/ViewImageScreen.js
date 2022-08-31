import React from "react";
import { View, Image } from "react-native";

export default function App() {
    return (
        <View
            style={{
                backgroundColor: "#000",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                paddingVertical: 10,
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
                source={require("./assets/chair.jpg")}
                style={{
                    position: "absolute",
                    top: 100,
                    resizeMode: "contain",
                    width: "90%",
                    height: "50%",
                }}
            />
        </View>
    );
}
