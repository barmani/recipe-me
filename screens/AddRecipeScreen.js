import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import RecipeInput from "../components/RecipeInput";
import EditableTextInput from "../components/EditableTextInput";
import Meal from "../models/meal";

import { MEALS } from "../data/dummy-data";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    listItems: {
        width: '90%'
    },
    submitContainer: {
        backgroundColor: '#c3d',
        width: '90%',
    },
    submitButton: {
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#c3d',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
    },
    submitText: {
        fontSize: 18,
        color: 'white'
    }
});

const AddRecipeScreen = (props) => {
    const [title, setTitle] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [step, setStep] = useState('');
    const [steps, setSteps] = useState([]);

    const isValidRecipe = title.length > 0 && ingredients.length > 0 && steps.length > 0;

    const handleIngredientSubmit = (e) => {
        const newIngredient = e.nativeEvent.text;
        if (newIngredient.length > 0) {
            setIngredients([...ingredients, newIngredient]);
            setIngredient('');
        }
    }

    const handleStepSubmit = (e) => {
        const newStep = e.nativeEvent.text;
        if (newStep.length > 0) {
            setSteps([...steps, newStep]);
            setStep('');
        }
    }

    const handleRecipeSubmit = () => {
        const newMeal = new Meal('m4', title, ingredients, steps);
        props.navigation.navigate('Recipes', {
            newRecipe: newMeal
        });
    }

    const handleDeleteIngredient = (text) => {
        setIngredients(ingredients.filter(item => item !== text))
    }

    const handleEditSubmit = (oldText, newText) => {
        if (newText.length > 0) {
            const idx = ingredients.indexOf(oldText)
            if (idx >= 0) {
                const ingredientsCopy = [...ingredients]
                ingredientsCopy[idx] = newText
                setIngredients(ingredientsCopy)
            }
        }
    }



    return (
        <View style={styles.container}>
            <RecipeInput 
                onChangeText={setTitle}
                onClearText={() => setTitle('')}
                value={title}
                placeholder="Title"
            />
            <RecipeInput 
                onChangeText={setIngredient}
                onClearText={() => setIngredient('')}
                value={ingredient}
                placeholder="Add an ingredient"
                onSubmit={handleIngredientSubmit}
            />
            <View style={styles.listItems}>
            {
                ingredients.map(item => <EditableTextInput key={item} text={item} onDelete={handleDeleteIngredient} onEditSubmit={handleEditSubmit} />)
            }
            </View>
            <RecipeInput 
                onChangeText={setStep}
                onClearText={() => setStep('')}
                value={step}
                placeholder="Add steps here"
                onSubmit={handleStepSubmit}
            />
            {
                steps.map(item => <Text key={item}>{item}</Text>)
            }
            <View style={isValidRecipe ? styles.submitContainer : {...styles.submitContainer, opacity: .25}}>
                <TouchableOpacity disabled={!isValidRecipe} onPress={handleRecipeSubmit} style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit Recipe</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default AddRecipeScreen;
