import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function MypageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Mypage</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
