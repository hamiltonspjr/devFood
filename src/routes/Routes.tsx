import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppStack} from './AppStack';

export function Router() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
