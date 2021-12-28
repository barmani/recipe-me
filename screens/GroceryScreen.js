import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const GroceryScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Grocery!</Text>
        </View>
    );
};


export default GroceryScreen;