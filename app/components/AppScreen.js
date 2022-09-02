import Constants from "expo-constants";
import React from "react";
import { View, StyleSheet } from "react-native";

function AppScreen({ children }) {
    return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
    },
});

export default AppScreen;
