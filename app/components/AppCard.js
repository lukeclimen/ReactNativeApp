import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import colours from "../config/colours";

function AppCard({ title, subtitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colours.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden",
    },
    descriptionContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subtitle: {
        fontSize: 16,
        color: colours.secondary,
    },
    title: {
        fontSize: 20,
        marginBottom: 7,
    },
});

export default AppCard;
