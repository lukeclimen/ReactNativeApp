import React from "react";
import {
    View,
    Image,
    Platform,
    StatusBar,
    Dimensions,
    StyleSheet,
} from "react-native";

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
        backgroundColor: "#fc5c65",
        height: 50,
        width: 50,
    },
    container: {
        backgroundColor: "#000",
        flex: 1,
        // flexDirection: "row",
        // justifyContent: "space-between",
        // paddingHorizontal: 30,
        // paddingVertical: 10,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
        backgroundColor: "#4ecdc4",
        height: 50,
        width: 50,
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
});
