import React, {useEffect} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SelectType');
    }, 1000);
  }, []);

  return (
    <View style={styles.linearGradient}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />

      <Text style={{fontSize: 24, fontWeight: '700'}}>LOGO</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  btn: {
    height: Dimensions.get('window').width - 120,
    width: Dimensions.get('window').width - 120,
    resizeMode: 'contain',
  },
});
