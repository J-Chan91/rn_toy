import {Alert, Platform, ToastAndroid} from 'react-native';

export const ToastAlert = (msg: string): void => {
  Platform.OS === 'android' ? ToastAndroid.show(msg, 2) : Alert.alert(msg);
};
