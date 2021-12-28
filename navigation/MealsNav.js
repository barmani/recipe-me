import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipesScreen from '../screens/RecipesScreen';
import MealScreen from '../screens/MealScreen';

const Stack = createNativeStackNavigator();

const MealsNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="Meal" component={MealScreen} />
    </Stack.Navigator>
  );
}

export default MealsNav;