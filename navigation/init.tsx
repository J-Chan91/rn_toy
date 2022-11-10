import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerNavigation from './drawer';
import AddressScreen from '../screens/stack/addressScreen';
import SearchLocationSection from '../screens/drawer/searchLocationSection';

const Stack = createNativeStackNavigator();

export default function Init() {
  return (
    <Stack.Navigator screenOptions={STACK_NAVIGATOR_OPTION}>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen
        name="SearchLocation"
        component={SearchLocationSection}
        options={STACK_SCREEN_SEARCH_LOCATION}
      />
    </Stack.Navigator>
  );
}

const STACK_NAVIGATOR_OPTION = ({
  navigation,
}: any): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {fontSize: 15},
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>
        <MaterialCommunityIconsIcon
          name="arrow-left-thick"
          size={25}
          color="#333"
        />
      </Text>
    </TouchableOpacity>
  ),
});

const STACK_SCREEN_SEARCH_LOCATION = (): NativeStackNavigationOptions => ({
  title: 'Search Your Location',
});
