import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

export default function Login({navigation}) {
  const params = useRoute();
  // alert(JSON.stringify(params.params));
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: Dimensions.get('window').width / 1.2,
        }}>
        <Text style={{fontSize: 35, fontWeight: '700'}}>LOGO</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          // marginHorizontal: 80,
          // borderWidth: 1,
        }}>
        <Image
          style={{
            height: 100,
            width: 200,
            resizeMode: 'contain',
            // borderWidth: 1,
          }}
          source={require('../../assets/facebook.png')}
        />
        <Image
          style={{
            height: 100,
            width: 200,
            resizeMode: 'contain',
            // borderWidth: 1,
          }}
          source={require('../../assets/google.png')}
        />
      </View>
      <Text style={{alignSelf: 'center', color: 'gray'}}>or</Text>

      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <TextInput
          style={{backgroundColor: '#fff'}}
          label="Email ID"
          activeUnderlineColor="#FF956B"
        />
        <View style={{height: 25}} />
        <TextInput
          style={{backgroundColor: '#fff'}}
          label="Password"
          activeUnderlineColor="#FF956B"
          secureTextEntry
        />
        <Text style={{alignSelf: 'flex-end', color: '#FF956B', marginTop: 15}}>
          Forgot Password?
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.replace('Home', {type: params.params});
        }}
        activeOpacity={0.7}
        style={{
          alignItems: 'center',
          paddingVertical: 18,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 8,
          marginTop: 40,
          justifyContent: 'center',
          backgroundColor: '#FF956B',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <Text style={{alignSelf: 'center', color: 'gray', marginTop: 15}}>
        Don’t have an account?{' '}
        <Text
          style={{
            alignSelf: 'center',
            color: '#FF956B',
            marginTop: 15,
            fontWeight: '700',
          }}>
          Register Now
        </Text>
      </Text>
    </View>
  );
}
