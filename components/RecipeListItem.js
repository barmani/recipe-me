import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    recipeItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 10,
        elevation: 5
    },
    recipeContainer: {
        flex: 1,
        backgroundColor: '#c3d',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    recipeTitle: {
        fontSize: 22,
        textAlign: 'right'
    }
});

const RecipeListItem = (props) => {
    
    const handleNavigate = () => {
        props.navigation.navigate('Recipe', {
            mealId: props.id
        });
    };

    return (
        <View style={styles.recipeItem}>
            <TouchableOpacity style={{flex: 1}} onPress={handleNavigate} >
                <View style={styles.recipeContainer}>
                    <Text style={styles.recipeTitle}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default RecipeListItem;