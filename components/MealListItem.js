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

const MealListItem = (props) => {
    
    const handleNavigate = () => {
        props.navigation.navigate('Meal', {
            mealId: props.id
        });
    };

    return (
        <TouchableOpacity onPress={handleNavigate} >
            <View style={styles.mealContainer}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MealListItem;