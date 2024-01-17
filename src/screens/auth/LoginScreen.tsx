import React, {useState} from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {InputComponent} from '../../components';
import {Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {justifyContent: 'center', alignItems: 'center', padding: 20},
      ]}>
      <InputComponent
        value={email}
        placeholder="Email"
        onChange={val => setEmail(val)}
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
        type="email-address"
      />
    </View>
  );
};

export default LoginScreen;
