import AsyncStorage from '@react-native-async-storage/async-storage';
import {Lock, Sms} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {Image, Switch} from 'react-native';
import {useDispatch} from 'react-redux';
import authenticationApi from '../../apis/authApi';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {addAuth} from '../../reduxs/reducers/authReducer';
import {Validate} from '../../utils/Validate';
import SociaLogin from './components/SociaLogin';

const SignInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    checkUserEixst();
  }, []);

  useEffect(() => {
    if (email || password) {
      setErrorText('');
    }
  }, [email, password]);

  const checkUserEixst = async () => {
    const res = await AsyncStorage.getItem('auth');
    if (res) {
      setEmail(JSON.parse(res).email);
      setIsRemember(JSON.parse(res).isRemember);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorText('Yêu cầu nhập đầy đủ thông tin');
      return;
    }

    if (!Validate.Email(email)) {
      setErrorText('Email không hợp lệ');
      return;
    }

    if (!Validate.Password(password)) {
      setErrorText('Mật khẩu phải chứa 6 kí tự trên');
      return;
    }

    try {
      const res = await authenticationApi.HandleAuthentication(
        '/login',
        'POST',
        {
          email,
          password,
        },
      );

      dispatch(addAuth({...res.data, isRemember: isRemember}));
      await AsyncStorage.setItem(
        'auth',
        isRemember
          ? JSON.stringify({...res.data, isRemember: isRemember})
          : email,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          marginTop: 75,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{
            width: 162,
            height: 114,
            marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent title text="Sign in" />
        <SpaceComponent height={21} />
        <InputComponent
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
        />
        {errorText && (
          <TextComponent text={errorText} color={appColors.darger} />
        )}
        <SpaceComponent height={10} />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
              style={{marginRight: 10}}
            />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot password?"
            onPress={() => navigation.navigate('RessetPasswordScreen')}
            type="text"
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          onPress={handleLogin}
          type="primary"
          text="SIGN IN"
          icon={
            <Image
              source={require('../../assets/images/ArrowRight.png')}
              style={{width: 26, height: 26}}
            />
          }
          iconFlex="right"
        />
      </SectionComponent>
      <SociaLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Dont't have an account? " />
          <ButtonComponent
            type="link"
            text="Sign up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignInScreen;
