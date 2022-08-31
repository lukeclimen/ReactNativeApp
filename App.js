import React from "react";
import { View, Image, Platform, StatusBar, Dimensions } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
    const screenSize = Dimensions.get("screen");

    return <ViewImageScreen />;
}
