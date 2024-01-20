import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {appColors} from '../../../constants/appColors';
import {fontFamilies} from '../../../constants/fontFamilies';
import {Image} from 'react-native';

const SociaLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        style={{textAlign: 'center'}}
        text="OR"
        size={16}
        font={fontFamilies.medium}
        color={appColors.gray4}
      />
      <SpaceComponent height={16} />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Google"
        icon={
          <Image
            source={require('../../../assets/images/google.png')}
            style={{width: 26, height: 26}}
          />
        }
        textFont={fontFamilies.regular}
        iconFlex="left"
      />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Facebook"
        icon={
          <Image
            source={require('../../../assets/images/facebook.png')}
            style={{width: 26, height: 26}}
          />
        }
        textFont={fontFamilies.regular}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SociaLogin;
