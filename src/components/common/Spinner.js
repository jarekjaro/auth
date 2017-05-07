import React from "react";
import {ActivityIndicator, View} from "react-native";

const Spinner = ({size} = "large") => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size} animating hidesWhenStopped color="#007aff"/>
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
};

export {Spinner};