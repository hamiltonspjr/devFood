import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {ProductScreen} from '../screens/ProductScreen/ProductScreen';

export type AppStakParamList = {
  HomeScreen: undefined;
  ProductScreen: {
    productId: string;
  };
};

const Stack = createNativeStackNavigator<AppStakParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}
