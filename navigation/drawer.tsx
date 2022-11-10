import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen from '../screens/drawer/dashboardScreen';
import {DrawerItemListInterface} from '../types/navigation/drawer';
import {UserInterface} from '../types/user/user';

const titleSize = Platform.OS === 'android' ? 15 : 18;
const Drawer = createDrawerNavigator();

const getToday = (): string => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  return mm + '/' + dd + '/' + yyyy;
};

const drawerItemList: DrawerItemListInterface[] = [
  {title: 'Address', iconName: 'home', routeName: 'Address'},
  {
    title: 'Reservation List',
    iconName: 'message-processing-outline',
    routeName: 'Address',
  },
  {title: 'Payments', iconName: 'alpha-w-box-outline', routeName: 'Address'},
  {title: 'Notice', iconName: 'antenna', routeName: 'Address'},
  {title: 'Q & A', iconName: 'beaker-check-outline', routeName: 'Address'},
];

export default function DrawerNavigation(): JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={DRAWER_SCREEN_OPTION}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = ({
  navigation,
}: DrawerContentComponentProps): JSX.Element => {
  const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(res => {
        setUser(res);
      });
  }, []);

  return (
    <DrawerContentScrollView>
      <View style={customDrawerStyles.drawerCustomContainer}>
        <View style={customDrawerStyles.userContainer}>
          <Text style={customDrawerStyles.myInfoTitle}>My Info</Text>

          <Image
            style={customDrawerStyles.userProfile}
            source={{
              uri: 'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />

          <Text style={customDrawerStyles.userPhoneNumber}>
            {user?.username}
          </Text>
        </View>

        <View style={customDrawerStyles.drawerItemListContainer}>
          {drawerItemList.map(item => (
            <TouchableOpacity
              key={item.title}
              style={customDrawerStyles.drawerItem}
              onPress={() => {
                navigation.navigate(item.routeName);
                navigation.closeDrawer();
              }}
            >
              <Text
                style={[
                  customDrawerStyles.drawerItemTitle,
                  customDrawerStyles.drawerItemIcon,
                ]}
              >
                <MaterialCommunityIconsIcon
                  name={item.iconName}
                  size={titleSize}
                  color="#000"
                />
              </Text>
              <Text style={customDrawerStyles.drawerItemTitle}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const DRAWER_SCREEN_OPTION = ({navigation}: any): DrawerNavigationOptions => ({
  headerShadowVisible: false,
  headerStyle: {backgroundColor: '#02343F'},
  drawerStyle: {
    width: '65%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    padding: 15,
  },
  headerTitle: () => {
    const handleClickedTitle = () => {
      navigation.navigate('SearchLocation');
    };

    return (
      <TouchableOpacity onPress={handleClickedTitle}>
        <Text style={drawerStyles.headerTitle}>Hello</Text>
      </TouchableOpacity>
    );
  },
  headerLeft: () => (
    <TouchableOpacity
      style={drawerStyles.hamburger}
      onPress={() => navigation.toggleDrawer()}
    >
      <Text style={customDrawerStyles.drawerItemTitle}>
        <EntypoIcon name="menu" size={25} color="#fefefe" />
      </Text>
    </TouchableOpacity>
  ),
  // headerRight: () => <Text style={drawerStyles.rightDate}>{getToday()}</Text>,
  headerRight: () => {
    return (
      <>
        <TouchableOpacity>
          <Text style={drawerStyles.rightDate}>{getToday()}</Text>
        </TouchableOpacity>
      </>
    );
  },
});

const drawerStyles = StyleSheet.create({
  hamburger: {marginLeft: 10},
  headerTitle: {
    color: '#fefefe',
    fontWeight: '600',
  },
  rightDate: {
    color: '#fefefe',
    fontWeight: '600',
    marginRight: 10,
  },
});

const customDrawerStyles = StyleSheet.create({
  drawerCustomContainer: {
    paddingVertical: 20,
  },
  userContainer: {
    alignItems: 'center',
  },
  userProfile: {width: 120, height: 120, borderRadius: 75},
  userPhoneNumber: {
    marginTop: 10,
  },
  myInfoTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  drawerItemListContainer: {
    marginTop: 50,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  drawerItemIcon: {
    marginRight: 20,
  },
  drawerItemTitle: {
    fontSize: titleSize,
    color: '#333',
    fontWeight: '600',
    letterSpacing: -0.3,
  },
});
