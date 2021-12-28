import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const RecipesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Recipes!</Text>
        </View>
    );
};


export default RecipesScreen;