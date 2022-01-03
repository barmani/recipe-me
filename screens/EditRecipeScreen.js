import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import RecipeInput from "../components/RecipeInput";
import Meal from "../models/meal";
import { MEALS } from "../data/dummy-data";

const styles = StyleSheet.create({

});

const EditRecipeScreen = (props) => {
    const mealTitle = props.route.params.mealTitle;
    const currentRecipe = MEALS.find(meal => meal.title === mealTitle);

    const [title, setTitle] = useState('');
    return (
        <View>
            <RecipeInput 
                onChangeText={setTitle}
                value={title}
                placeholder="Title"
            />
        </View>
    )
}

export default EditRecipeScreen;