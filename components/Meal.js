import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    mealContainer: {
        marginVertical: 20,
        paddingVertical: 15,
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#ccc',
        textAlign: 'center'
    }
});

const Meal = (props) => {
    console.log(props);
    return (
        <TouchableOpacity>
            <View style={styles.mealContainer}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default Meal;