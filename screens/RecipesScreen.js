import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import RecipeListItem from "../components/RecipeListItem";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    recipeList: {
        width: '95%'
    }
});

const RecipesScreen = props => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={MEALS}
                renderItem={({item}) => <RecipeListItem title={item.title} id={item.id} navigation={props.navigation} />}
                style={styles.recipeList}
                numColumns={2}
            />
        </View>
    );
};


export default RecipesScreen;