import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  SignInScreen,
  OnboardingScreen,
  SignUpScreen,
  VerificationScreen,
  RessetPasswordScreen,
} from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthNavigator = () => {
  const [isExistUser, setIsExistUser] = useState(false);

  useEffect(() => {
    checkUserEixst();
  }, []);

  const checkUserEixst = async () => {
    const res = await AsyncStorage.getItem('auth');
    res && setIsExistUser(true);
  };

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isExistUser && (
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      )}
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
