import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Quiz} from '../screens';
import Options from '../screens/Options';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Options"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Quiz"
        options={{title: 'Pagina 1'}}
        component={Quiz}
      />

      <Stack.Screen
        name="Options"
        options={{title: 'Pagina 1'}}
        component={Options}
      />
    </Stack.Navigator>
  );
};
