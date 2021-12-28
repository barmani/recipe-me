import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsNav from "../navigation/MealsNav";

const styles = StyleSheet.create({
    mealContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    displayItem: {
        marginVertical: 15
    }
});

const MealScreen = (props) => {
    const mealId = props.route.params.mealId;
    const meal = MEALS.find(item => item.id === mealId);
    return (
        <View style={styles.mealContainer}>
            <View style={styles.displayItem}>
                <Text style={styles.title}>{meal.title}</Text>
            </View>
            <View style={styles.displayItem}>
                {meal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
            </View>
            <View style={styles.displayItem}>
                {meal.steps.map(step => <Text key={step}>{step}</Text>)}
            </View>
        </View>
    )
}

export default MealScreen;