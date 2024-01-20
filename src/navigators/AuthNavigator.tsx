import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SignInScreen,
  OnboardingScreen,
  SignUpScreen,
  VerificationScreen,
  RessetPasswordScreen,
} from '../screens';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen
        name="RessetPasswordScreen"
        component={RessetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
