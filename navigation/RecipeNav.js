import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import RecipesScreen from '../screens/RecipesScreen';
import RecipeScreen from '../screens/RecipeScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';

const styles = StyleSheet.create({
    plusButton: {
        paddingLeft: 30
    }
});

const Stack = createNativeStackNavigator();

const RecipeNav = (props) => {
    console.log(props)
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
            <Stack.Screen name="Recipe" component={RecipeScreen} />
            <Stack.Screen name="Add Recipe" component={AddRecipeScreen} />
        </Stack.Navigator>
    );
}

export default RecipeNav;