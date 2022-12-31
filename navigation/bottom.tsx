import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, Text} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import DashboardScreen from '../screens/bottom/dashboardScreen';
import MypageScreen from '../screens/bottom/mypageScreen';

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <Tab.Navigator screenOptions={TabNavigatorOption}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={styles(focused).labelStyle}>대시보드</Text>
          ),
          tabBarIcon: ({focused}) => (
            <FAIcon
              name="leaf"
              size={20}
              color={focused ? '#603F83' : '#e9e9e9'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={styles(focused).labelStyle}>내정보</Text>
          ),
          tabBarIcon: ({focused}) => (
            <FAIcon
              name="user-circle-o"
              size={20}
              color={focused ? '#603F83' : '#e9e9e9'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const TabNavigatorOption = {
  headerShown: false,
  tabBarStyle: {
    ...Platform.select({
      ios: {
        marginBottom: 10,
      },
      android: {
        height: 55,
      },
    }),
  },
};

const styles = (focused: boolean) =>
  StyleSheet.create({
    labelStyle: {
      fontSize: 10,
      fontFamily: 'SpoqaHanSansNeo-Regular',
      color: focused ? '#603F83' : '#e9e9e9',
    },
  });
