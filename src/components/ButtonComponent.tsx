import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {TextComponent} from '.';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  iconFlex?: 'right' | 'left';
  textFont?: string;
  onPress?: () => void;
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    styles,
    color,
    textColor,
    textStyle,
    iconFlex,
    textFont,
    onPress,
  } = props;

  return type === 'primary' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        globalStyles.shadow,
        {
          backgroundColor: color ?? appColors.primary,
          marginBottom: 17,
          width: '90%',
        },
        styles,
      ]}>
      {icon && icon}
      <TextComponent
        text={text}
        color={textColor ?? appColors.white}
        style={[textStyle, {marginLeft: icon ? 12 : 0, fontSize: 16}]}
        flex={icon && iconFlex === 'right' ? 1 : 0}
        font={textFont ?? fontFamilies.medium}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={type === 'link' ? appColors.primary : appColors.text}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
