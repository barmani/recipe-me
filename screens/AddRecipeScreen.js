import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import RecipeInput from "../components/RecipeInput";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});

const AddRecipeScreen = (props) => {
    const [title, setTitle] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [step, setStep] = useState('');
    const [steps, setSteps] = useState([]);

    const handleIngredientSubmit = (e) => {
        const newIngredient = e.nativeEvent.text;
        console.log(newIngredient);
        if (newIngredient && newIngredient.length > 0) {
            setIngredients([...ingredients, newIngredient]);
            setIngredient('');
        }
    }

    const handleStepSubmit = (e) => {
        const newStep = e.nativeEvent.text;
        if (newStep && newStep.length > 0) {
            setSteps([...steps, newStep]);
            setStep('');
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
            {
                ingredients.map(item => <Text key={item}>{item}</Text>)
            }
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
        </View>
    )
};

export default AddRecipeScreen;
