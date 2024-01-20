import {Lock, Sms, User} from 'iconsax-react-native';
import React, {useState} from 'react';
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
import SociaLogin from './components/SociaLogin';

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [user, setUser] = useState(initValue);

  const handleChangeValue = (key: string, value: string) => {
    const item: any = {...user};
    item[`${key}`] = value;
    setUser(item);
  };

  return (
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
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent styles={{alignItems: 'center'}}>
        <ButtonComponent type="primary" text="SIGN UP" />
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
  );
};

export default SignUpScreen;
