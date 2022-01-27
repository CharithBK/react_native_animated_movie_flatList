import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
const AppStackNavigator = createStackNavigator();

export const AppDetailsNavigator = () => {
  return (
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </AppStackNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppDetailsNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
