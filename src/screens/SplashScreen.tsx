import React from 'react';
import {ActivityIndicator, Image, ImageBackground, Text} from 'react-native';
import {appInfos} from '../constants/appInfos';
import { SpaceComponent } from '../components';
import { appColors } from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      imageStyle={{flex: 1}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{width: appInfos.size.WIDTH * 0.6, resizeMode: 'contain'}}
      />
      <SpaceComponent height={10} />
      <ActivityIndicator color={appColors.primary}/>
    </ImageBackground>
  );
};

export default SplashScreen;
