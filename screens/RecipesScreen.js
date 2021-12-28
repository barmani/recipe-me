import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealListItem from "../components/MealListItem";

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
                renderItem={({item}) => <MealListItem title={item.title} id={item.id} navigation={props.navigation} />}
                style={styles.mealList}
                numColumns={2}
            />
        </View>
    );
};


export default RecipesScreen;