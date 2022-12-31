import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import LuckyNumberSection from '../../components/dashboardScreen/luckyNumberSection';

export default function DashboardScreen() {
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
