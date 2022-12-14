import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableHighlight,
} from "react-native";
import colours from "../config/colours";

function ListItem({ title, subtitle, image, onPress }) {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={colours.lightGrey}>
            <View style={styles.listing}>
                <Image style={styles.image} source={image} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    descriptionContainer: {},
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    listing: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    subtitle: {
        color: colours.grey,
    },
    title: {
        fontWeight: "bold",
    },
});

export default ListItem;
