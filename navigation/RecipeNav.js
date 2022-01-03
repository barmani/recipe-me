import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, Button } from 'react-native';
import RecipesScreen from '../screens/RecipesScreen';
import RecipeScreen from '../screens/RecipeScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import EditRecipeScreen from '../screens/EditRecipeScreen';

const styles = StyleSheet.create({
    plusButton: {
        paddingLeft: 30
    }
});

const Stack = createNativeStackNavigator();

const RecipeNav = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Recipes" 
                component={RecipesScreen} 
                options={{
                    headerRight: () => (
                        <TouchableOpacity 
                            onPress={() => {
                                props.navigation.navigate('Add Recipe')
                            }}
                            style={styles.plusButton}
                        >
                            <Ionicons name="add" style={{ color: "#5FC9F8" }} size={30} />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen 
                name="Recipe" 
                component={RecipeScreen}
                options={({navigation, route}) => ({
                    headerRight: () => {
                        return (
                            <Button 
                                title="Edit"
                                onPress={() => {
                                    navigation.navigate('Edit Recipe', {
                                        mealTitle: route.params.mealTitle
                                    })
                                }}
                            />
                        )
                    }
                })}
            />
            <Stack.Screen 
                name="Add Recipe" 
                component={AddRecipeScreen} 
            />
            <Stack.Screen name="Edit Recipe" component={EditRecipeScreen} />
        </Stack.Navigator>
    );
}

export default RecipeNav;