import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {TextComponent} from '../components';
import {appColors} from '../constants/appColors';

interface Props {
  visible: boolean;
  message?: string;
  isClose?: () => void;
}

const LoadingModal = (props: Props) => {
  const {visible, message, isClose} = props;

  return (
    <Modal visible={visible} style={{flex: 1}} transparent statusBarTranslucent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={appColors.white} size={32} />
        <TextComponent text="Loading" color={appColors.white} size={20} />
      </View>
    </Modal>
  );
};

export default LoadingModal;
