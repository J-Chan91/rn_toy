import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  NativeModules,
  Platform,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MapView from 'react-native-maps';

const winWidth = Dimensions.get('window').width;
const {StatusBarManager} = NativeModules;

export default function SearchLocationSection() {
  const [winHeight, setWinHeight] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    Platform.OS === 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData: any) =>
          setWinHeight(statusBarFrameData.height),
        )
      : null;
  }, []);

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#fff'}}
      behavior="padding"
      keyboardVerticalOffset={winHeight + 50}
    >
      <ScrollView>
        <View
          style={{alignItems: 'center', backgroundColor: '#fff', margin: 10}}
        >
          <MapView
            style={styles.mapView}
            initialRegion={{
              latitude: 37.5115557,
              longitude: 127.0595261,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>

        <View style={styles.viewContainer}>
          <View style={styles.searchSection}>
            <View style={styles.iptContainer}>
              <View style={styles.searchContainer}>
                <Text style={styles.searchIcon}>
                  <FontAwesomeIcon name="search" size={18} color="#fff" />
                </Text>
              </View>

              <TextInput
                style={styles.input}
                placeholder="Input search location"
                // autoFocus={true}
                value={keyword}
                returnKeyType="search"
                onChangeText={text => setKeyword(text)}
              />

              {keyword && (
                <TouchableOpacity onPress={() => setKeyword('')}>
                  <Text style={styles.closeIcon}>
                    <FontistoIcon name="close" size={18} color="#02343F" />
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  viewContainer: {
    alignItems: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 20,
  },
  iptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 30,
    width: winWidth * 0.7,
    borderBottomWidth: 0.5,
    borderBottomColor: '#02343F',
    paddingVertical: 5,
    paddingLeft: 8,
    paddingRight: 35,
    fontSize: 15,
  },
  closeIcon: {
    right: 10,
    bottom: -8,
    position: 'absolute',
  },
  searchContainer: {
    borderWidth: 0.3,
    width: 30,
    height: 30,
    backgroundColor: '#02343F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {},
  mapView: {
    width: winWidth * 0.9,
    height: 450,
  },
});
