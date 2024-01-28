import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {ArrowRight, User} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import {Image, View} from 'react-native';

const RessetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <ContainerComponent back isImageBackground isScroll>
      <SectionComponent>
        <TextComponent text="Resset Password" title />
        <TextComponent text="Please enter your email address to" />
        <TextComponent text="request a password reset" />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <InputComponent
          value={email}
          placeholder="abc@gmail.com"
          onChange={val => setEmail(val)}
          allowClear
          affix={<User size={22} color={appColors.gray} />}
        />
      </SectionComponent>
      <SpaceComponent height={5} />
      <SectionComponent>
        <ButtonComponent
          type="primary"
          text="SEND"
          icon={
            <Image
              source={require('../../assets/images/ArrowRight.png')}
              style={{width: 26, height: 26}}
            />
          }
          iconFlex="right"
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default RessetPasswordScreen;
