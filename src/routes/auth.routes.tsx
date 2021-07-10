import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../modules/Home';
import SignIn from '../modules/SignIn';
import { routesEnum } from './routesEnum';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen name={routesEnum.SignIn} component={SignIn} />
      <Screen name={routesEnum.Home} component={Home} />
    </Navigator>
  );
}
