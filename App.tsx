import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AppRouters from './src/navigators/AppRouters';
import {SplashScreen} from './src/screens';
import {Provider} from 'react-redux';
import store from './src/reduxs/store';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
      )}
    </Provider>
  );
};

export default App;
