import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const categoryList = [
  {title: 'Chart', iconName: 'dotchart'},
  {title: 'Ding', iconName: 'dingding'},
  {title: 'Ghost', iconName: 'aliwangwang'},
  {title: 'Codepen', iconName: 'codepen-circle'},
  {title: 'Weibo', iconName: 'weibo-square'},
  {title: 'Skype', iconName: 'skype'},
  {title: 'Taobao', iconName: 'taobao-square'},
  {title: 'ETC', iconName: 'appstore-o'},
];

export default function ShortcutSection() {
  return (
    <View style={styles.shortcutSectionContainer}>
      <View style={styles.btnListContainer}>
        {categoryList.map(item => (
          <TouchableOpacity key={item.title} style={styles.shortcutBtn}>
            <Text style={styles.shortcutIconText}>
              <AntDesignIcon name={item.iconName} size={35} color={'#02343F'} />
            </Text>

            <Text style={styles.shortcutTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shortcutSectionContainer: {
    marginTop: 60,
    backgroundColor: '#fefefe',
    height: '100%',
  },
  btnListContainer: {
    paddingVertical: 20,
    paddingHorizontal: Platform.OS === 'android' ? 10 : 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortcutBtn: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortcutIconText: {marginBottom: 5},
  shortcutTitle: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: -0.3,
    color: '#02343F',
  },
});
