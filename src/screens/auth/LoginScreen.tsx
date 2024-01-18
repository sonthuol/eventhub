import {Lock, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {ContainerComponent, InputComponent} from '../../components';
import {appColors} from '../../constants/appColors';
import {Text, View} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContainerComponent isImageBackground>
      <View>
        <Text>Demo</Text>
      </View>
      {/* <InputComponent
        value={email}
        placeholder="Email"
        onChange={val => setEmail(val)}
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
        type="email-address"
      />
      <InputComponent
        value={password}
        placeholder="Password"
        onChange={val => setPassword(val)}
        allowClear
        isPassword
        affix={<Lock size={22} color={appColors.gray} />}
      /> */}
    </ContainerComponent>
  );
};

export default LoginScreen;
