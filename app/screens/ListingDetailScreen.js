import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import colours from "../config/colours";
import ListItem from "../components/ListItem";

function ListingDetailScreen({ props }) {
    return (
        <View>
            <Image
                source={require("../assets/jacket.jpg")}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red jacket for sale!</Text>
                <Text style={styles.price}>$100</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title={"Mosh Hamedani"}
                        subtitle={"5 listings"}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        fontSize: 20,
        color: colours.secondary,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 30,
    },
});

export default ListingDetailScreen;
