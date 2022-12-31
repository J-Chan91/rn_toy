import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function LuckyNumberSection() {
  const printLuckyNumber = (): string => {
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();

    return ((date + month) * 12).toString();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>행운의 숫자</Text>
      <Text style={styles.number}>{printLuckyNumber()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#444',
    fontFamily: 'SpoqaHanSansNeo-Regular',
    letterSpacing: -0.7,
  },
  number: {
    fontSize: 30,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    letterSpacing: -0.7,
    color: '#444',
  },
});
