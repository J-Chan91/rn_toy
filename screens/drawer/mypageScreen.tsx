import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParamListBase} from '../../types/navigation/stackType';

export default function MypageScreen() {
  const route = useRoute<RouteProp<RootStackParamListBase>>();

  useEffect(() => {
    console.log('🚨', route?.params);
  }, [route]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.greeting}>Hello World</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});
