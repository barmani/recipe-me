import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GroceryScreen from './screens/GroceryScreen';
import RecipesScreen from './screens/RecipesScreen';
import CalendarScreen from './screens/CalendarScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
          name="Recipes" 
          component={RecipesScreen}
          options={{
            tabBarIcon: () => <Ionicons name="list-circle-outline" size={30} />
          }}
        />
        <Tab.Screen 
          name="Grocery" 
          component={GroceryScreen}
          options={{
            tabBarIcon: () => <Ionicons name="cart" size={30} />
          }}
        />
        <Tab.Screen 
          name="Calendar" 
          component={CalendarScreen}
          options={{
            tabBarIcon: () => <Ionicons name="calendar" size={30}/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
