import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import RecipesScreen from '../screens/RecipesScreen';
import RecipeScreen from '../screens/RecipeScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';

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
                        <Button 
                            title="+"
                            onPress={() => {
                                props.navigation.navigate('Add Recipe')
                            }}
                        />
                    )
                }}
            />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
            <Stack.Screen name="Add Recipe" component={AddRecipeScreen} />
        </Stack.Navigator>
    );
}

export default RecipeNav;