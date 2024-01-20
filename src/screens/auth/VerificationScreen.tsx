import {User} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
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

const initCodeVerification = {
  number1: '',
  number2: '',
  number3: '',
  number4: '',
};

const VerificationScreen = () => {
  const [code, setCode] = useState(initCodeVerification);

  const handleChangeValue = (key: string, value: string) => {
    const item: any = {...code};
    item[`${key}`] = value;
    setCode(item);
  };

  return (
    <ContainerComponent back isImageBackground isScroll>
      <SectionComponent>
        <TextComponent text="Verification" title />
        <TextComponent text="We’ve send you the verification" />
        <TextComponent text="code on +1 2620 0323 7631" />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <RowComponent>
          <InputComponent
            styles={{flex: 1}}
            value={code.number1}
            placeholder="-"
            onChange={val => handleChangeValue('number1', val)}
          />
          <SpaceComponent width={15} />
          <InputComponent
            styles={{flex: 1}}
            value={code.number2}
            placeholder="-"
            onChange={val => handleChangeValue('number2', val)}
          />
          <SpaceComponent width={15} />

          <InputComponent
            styles={{flex: 1}}
            value={code.number3}
            placeholder="-"
            onChange={val => handleChangeValue('number3', val)}
          />
          <SpaceComponent width={15} />

          <InputComponent
            styles={{flex: 1}}
            value={code.number4}
            placeholder="-"
            onChange={val => handleChangeValue('number4', val)}
          />
        </RowComponent>
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

export default VerificationScreen;
