import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5
    },
    mealContainer: {
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
    mealTitle: {
        fontSize: 22,
        textAlign: 'right'
    }
});

const MealListItem = (props) => {
    
    const handleNavigate = () => {
        props.navigation.navigate('Meal', {
            mealId: props.id
        });
    };

    return (
        <View style={styles.mealItem}>
            <TouchableOpacity style={{flex: 1}} onPress={handleNavigate} >
                <View style={styles.mealContainer}>
                    <Text style={styles.mealTitle}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default MealListItem;