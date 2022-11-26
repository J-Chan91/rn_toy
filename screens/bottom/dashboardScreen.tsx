import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Dashboard</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
