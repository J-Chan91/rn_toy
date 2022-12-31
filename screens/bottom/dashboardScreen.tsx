import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {BackHandler, SafeAreaView, StyleSheet} from 'react-native';

import LuckyNumberSection from '../../components/dashboardScreen/luckyNumberSection';
import {ToastAlert} from '../../utils/toastAlert';

export default function DashboardScreen() {
  let timeout;

  const [isExit, setIsExit] = useState<boolean>(false);

  const clickedBackBtn = () => {
    if (isExit) {
      BackHandler.exitApp();
      clearTimeout(timeout);
      return;
    }

    setIsExit(true);
    ToastAlert('한번 더 누르시면 종료됩니다');

    setTimeout(() => {
      setIsExit(false);
    }, 2000);

    return true;
  };

  const init = () => {};

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        clickedBackBtn,
      );

      return () => {
        backHandler.remove();
      };
    }, [isExit]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <LuckyNumberSection />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
});
