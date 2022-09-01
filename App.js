import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
    return (
        <View
            style={{
                backgroundColor: "#f8f4f4",
                padding: 20,
                paddingTop: 100,
            }}
        >
            <AppCard
                title={"Red jacket for sale!"}
                subtitle={"$100"}
                image={require("./app/assets/jacket.jpg")}
            />
        </View>
    );
}
