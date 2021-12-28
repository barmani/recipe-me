import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import Meal from "../components/Meal";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    mealList: {
        width: '95%'
    }
});

const RecipesScreen = props => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={MEALS}
                renderItem={({item}) => <Meal {...item} />}
                style={styles.mealList}
            />
        </View>
    );
};


export default RecipesScreen;