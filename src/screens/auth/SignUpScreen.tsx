import {Lock, Sms, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
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
import {LoadingModal} from '../../modals';
import {Validate} from '../../utils/Validate';
import SociaLogin from './components/SociaLogin';
import {addAuth} from '../../reduxs/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [user, setUser] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.username || user.email || user.password || user.confirmPassword) {
      setErrorText('');
    }
  }, [user.username, user.email, user.password, user.confirmPassword]);

  const handleChangeValue = (key: string, value: string) => {
    const item: any = {...user};
    item[`${key}`] = value;
    setUser(item);
  };

  const handleRegister = async () => {
    const {username, email, password, confirmPassword} = user;

    // Check value empty
    if (!username || !email || !password || !confirmPassword) {
      setErrorText('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    // Check email incorrect
    if (!Validate.Email(email)) {
      setErrorText('Email không hợp lệ');
      return;
    }

    // Check length password
    if (!Validate.Password(password) || !Validate.Password(confirmPassword)) {
      setErrorText('Độ dài mật khẩu phải 6 kí tự trở lên');
      return;
    }

    // Check confirm password not match
    if (password !== confirmPassword) {
      setErrorText('Mật khẩu nhập lại không khớp');
      return;
    }

    // Register
    setIsLoading(true);
    try {
      const res = await authenticationApi.HandleAuthentication(
        '/register',
        'POST',
        {
          fullname: username,
          email,
          password,
        },
      );
      dispatch(addAuth(res.data));
      await AsyncStorage.setItem('auth', JSON.stringify(res.data));
      setIsLoading(false);
    } catch (error) {
      console.log(`Error api /auth/regiter: ${error}`);
      setIsLoading(false);
    }
  };

  return (
    <>
      <ContainerComponent isImageBackground isScroll back>
        <SectionComponent>
          <TextComponent title text="Sign up" />
          <SpaceComponent height={21} />
          <InputComponent
            value={user.username}
            placeholder="Full name"
            onChange={val => handleChangeValue('username', val)}
            allowClear
            affix={<User size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={user.email}
            placeholder="abc@gmail.com"
            onChange={val => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColors.gray} />}
            type="email-address"
          />
          <InputComponent
            value={user.password}
            placeholder="Password"
            onChange={val => handleChangeValue('password', val)}
            allowClear
            isPassword
            affix={<Lock size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={user.confirmPassword}
            placeholder="Confirm password"
            onChange={val => handleChangeValue('confirmPassword', val)}
            allowClear
            isPassword
            affix={<Lock size={22} color={appColors.gray} />}
          />
          {errorText && (
            <TextComponent text={errorText} color={appColors.darger} />
          )}
        </SectionComponent>
        <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent
            onPress={handleRegister}
            type="primary"
            text="SIGN UP"
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
            <TextComponent text="Already have an account? " />
            <ButtonComponent
              type="link"
              text="Sign in"
              onPress={() => navigation.navigate('SignInScreen')}
            />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  );
};

export default SignUpScreen;
