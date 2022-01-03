import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const styles = StyleSheet.create({
    recipeContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10%'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    ingredientsText: {
        fontSize: 18
    },
    stepText: {
        fontSize: 18
    },
    displayItem: {
        marginVertical: 15
    }
});

const RecipeScreen = (props) => {
    const mealTitle = props.route.params.mealTitle;
    const meal = MEALS.find(item => item.title === mealTitle);
    return (
        <ScrollView>
            <View style={styles.recipeContainer}>
                <View style={styles.displayItem}>
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
                <View style={styles.displayItem}>
                    {meal.ingredients.map(ingredient => <Text style={styles.ingredientsText} key={ingredient}>{ingredient}</Text>)}
                </View>
                <View style={styles.displayItem}>
                    {meal.steps.map(step => {
                        return (
                            <View key={step} style={{padding: 10}}>
                                <Text 
                                    style={styles.stepText}
                                >
                                    {step}
                                </Text>
                            </View>
                        )
                    })}
                </View>  
            </View>
        </ScrollView>
    )
}

export default RecipeScreen;