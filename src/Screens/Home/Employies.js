import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';

const hour = [
  {
    id: '1',
    title: 'AT STORE',
    time: '1 houre',
  },
  {
    id: '2',
    title: 'TAKE OUT',
    time: '2 houre',
  },
  {
    id: '3',
    title: 'DELIVERY',
    time: '3 houre',
  },
  {
    id: '4',
    title: 'DELIVERY',
    time: '4 houre',
  },
  {
    id: '5',
    title: 'DELIVERY',
    time: '5 houre',
  },
  {
    id: '6',
    title: 'DELIVERY',
    time: '6 houre',
  },
  {
    id: '7',
    title: 'DELIVERY',
    time: '7 houre',
  },
  {
    id: '8',
    title: 'DELIVERY',
    time: '8 houre',
  },
  {
    id: '9',
    title: 'DELIVERY',
    time: '9 houre',
  },
];

export default function Home() {
  const params = useRoute();
  const [modalTwo, setModalTwo] = useState(false);
  // alert(params);
  function Statusbar({
    backgroundColor,
    props,
    barStyle,
    hidden,
    translucent = false,
  }) {
    return (
      <View style={[{backgroundColor, barStyle}]}>
        <SafeAreaView>
          <StatusBar
            translucent={translucent}
            backgroundColor={backgroundColor}
            barStyle={barStyle}
            hidden={hidden}
            {...props}
          />
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Statusbar backgroundColor="#fff" barStyle={'dark-content'} />

      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 15,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 40,
          marginTop: 30,
          justifyContent: 'space-between',
          backgroundColor: '#FF956B',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 45,
              width: 45,
              resizeMode: 'cover',
              // borderWidth: 1,
              marginRight: 25,
            }}
            source={require('../../assets/Business.png')}
          />
          <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>
            Workforce Analytics
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          marginHorizontal: 20,
          marginTop: 30,
          borderRadius: 15,
          flex: 1,
        }}>
        <View
          style={{
            // flexDirection: 'row',
            alignItems: 'flex-start',
            paddingVertical: 15,
            paddingHorizontal: 20,

            justifyContent: 'space-between',
            backgroundColor: '#FF956B',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FF956B',
            }}>
            <Image
              style={{
                height: 45,
                width: 45,
                resizeMode: 'cover',
                // borderWidth: 1,
                marginRight: 25,
              }}
              source={require('../../assets/Investors.png')}
            />
            <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>
              CAPTAIN {params.params.id}
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          {hour.map(item => (
            <TouchableOpacity
              // onPress={() => navigation.navigate('Employies')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}>
              <Image
                style={{
                  height: 45,
                  width: 45,
                  resizeMode: 'cover',
                  // borderWidth: 1,
                  marginRight: 15,
                  borderRadius: 50,
                }}
                source={{uri: 'https://picsum.photos/500'}}
              />
              <Text style={{fontSize: 16, fontWeight: '700', color: '#000'}}>
                employe {item.id}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
