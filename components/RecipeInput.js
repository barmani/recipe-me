import React, { useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
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
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onSubmitEditing={props.onSubmit}
            />
            { isFocused && props.value.length > 0 && (
                <TouchableOpacity onPress={props.onClearText}>
                    <Feather name="x-circle" size={30} />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default RecipeInput;
