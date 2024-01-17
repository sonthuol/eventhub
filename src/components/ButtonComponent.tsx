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

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  iconFlex?: 'rirght' | 'left';
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
    onPress,
  } = props;

  return type === 'primary' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        {
          backgroundColor: color ?? appColors.primary,
        },
        styles,
      ]}>
      {icon && icon}
      <TextComponent
        text={text}
        color={textColor ?? appColors.white}
        style={[textStyle, {marginLeft: icon ? 12 : 0}]}
        flex={icon && iconFlex === 'rirght' ? 1 : 0}
      />
      {icon && iconFlex === 'rirght' && icon}
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
