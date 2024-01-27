import {Dimensions} from 'react-native';

export const appInfos = {
  size: {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
  },
  baseUrl: 'http://localhost:3001',
};
