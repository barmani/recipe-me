import React, { useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    inputContainer: {
        width: '90%',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        padding: 10
    },
    input: {
        width: '90%',
        height: 30
    }
});

const RecipeInput = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
            />
            { props.value.length > 0 && (
                <TouchableOpacity onPress={props.onClearText}>
                    <Feather name="x-circle" size={30} />
                </TouchableOpacity>
            )}
        </View>
    )
}

const AddRecipeScreen = (props) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    return (
        <View style={styles.container}>
            <RecipeInput 
                onChangeText={setTitle}
                onClearText={() => setTitle('')}
                value={title}
                placeholder="Title"
            />
            <RecipeInput 
                onChangeText={setIngredients}
                onClearText={() => setIngredients('')}
                value={ingredients}
                placeholder="Ingredients"
            />
            <RecipeInput 
                onChangeText={setSteps}
                onClearText={() => setSteps('')}
                value={steps}
                placeholder="Steps"
            />
        </View>
    )
};

export default AddRecipeScreen;
