import React from 'react';
import {Text, View} from 'react-native';
import {ButtonComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container, {padding: 42}]}>
      <Text>LoginScreen</Text>
      {/* <Button title='Login' onPress={async () => await AsyncStorage.setItem("assetToken", "isLoged") } /> */}
      <ButtonComponent
        text="LOGIN"
        type="primary"
        onPress={() => console.log('LOGIN')}
        icon={
          <View>
            <Text>N</Text>
          </View>
        }
      />
    </View>
  );
};

export default LoginScreen;
