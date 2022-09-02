import React from "react";
import { View, StyleSheet } from "react-native";
import colours from "../config/colours";

function ListItemSeperator() {
    return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: colours.grey,
    },
});

export default ListItemSeperator;
