import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Animated,
  Platform,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {ScrollView} from 'react-native-gesture-handler';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import {RootStackParamListBase} from '../../types/navigation/stackType';
import {useNavigation} from '@react-navigation/native';
import ShortcutSection from './dashboard/shortcutSection';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function DashboardScreen() {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamListBase>>();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const [refreshing, setRefreshing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClosePress = () => bottomSheetRef?.current?.close();

  const handleClickedMoveToScreen = () => {
    setIsClicked(!isClicked);
    // navigation.navigate('AddressScreen');
  };

  // variables
  const snapPoints = useMemo(() => ['1%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      // NativeModules.LinkExternalApp.getName();
      // NativeModules.LinkExternalApp.linkExternalApp('packageName');
    }
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.containerInElement}
      alwaysBounceVertical={true}
      style={styles.container}
      refreshControl={
        <RefreshControl
          colors={['#02343F']}
          tintColor="#fff"
          titleColor="#fff"
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.section}>
        <View style={styles.greetingSection}>
          <Text style={styles.greeting}>안녕하세요! {'\n'} 반가워요 👋</Text>
        </View>

        <Pressable onPress={handleClickedMoveToScreen}>
          <Animated.View style={styles.btn}>
            <Text style={{marginRight: 10}}>
              <IoniconsIcon name="search" size={20} color={'#02343F'} />
            </Text>
            <Text style={{color: '#02343F'}}>Search</Text>
          </Animated.View>
        </Pressable>
      </View>

      <ShortcutSection />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={styles.bottomSheetContainer}
        backgroundComponent={props => <BottomSheetBackground {...props} />}
      >
        <View>
          <Text>Awesome 🎉</Text>

          {/* <Button></Button> */}
        </View>
      </BottomSheet>
    </ScrollView>
  );
}

const BottomSheetBackground = ({style}: any) => {
  return (
    <View
      style={[
        {
          backgroundColor: 'white',
          borderRadius: 0,
        },
        {...style},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02343F',
  },
  containerInElement: {
    flexGrow: 1,
  },
  section: {
    backgroundColor: '#02343F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingSection: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: Platform.OS === 'android' ? 25 : 30,
    color: '#fefefe',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
    letterSpacing: -2,
  },
  btn: {
    backgroundColor: '#fefefe',
    flexDirection: 'row',
    width: 150,
    height: 50,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetContainer: {
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
