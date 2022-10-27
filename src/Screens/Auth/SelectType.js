import {
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

export default function Onboarding({navigation}) {
  const [selected, setSelected] = useState(1);

  const Typeselected =
    selected == 1 ? 'MANAGER' : selected == 2 ? 'CAPTAIN' : 'EMPLOYE';

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Image
        style={{
          height: Dimensions.get('window').width - 80,
          width: Dimensions.get('window').width,
          resizeMode: 'cover',
          // borderWidth: 1,
        }}
        source={require('../../assets/round.png')}
      />
      <View style={{alignItems: 'center', marginHorizontal: 20, marginTop: 40}}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>Select One-</Text>
        <Text style={{textAlign: 'center', marginTop: 15, color: 'gray'}}>
          Lorem Ipsum is simply dummy text of dummy text of typesetting
          industry.
        </Text>
      </View>
      <View style={{height: 40}} />

      <TouchableOpacity
        onPress={() => setSelected(1)}
        activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          paddingVertical: 15,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 40,
          justifyContent: 'space-between',
          borderColor: '#c4c4c4',
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
          <Text style={{fontSize: 18, fontWeight: '700'}}>Area Manager </Text>
        </View>
        <View
          style={{
            height: 15,
            width: 15,
            backgroundColor: selected == 1 ? '#FF956B' : '#c4c4c4',
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelected(2)}
        activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          paddingVertical: 15,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 40,
          justifyContent: 'space-between',
          borderColor: '#c4c4c4',
          marginTop: 20,
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
            source={require('../../assets/Investors.png')}
          />
          <Text style={{fontSize: 18, fontWeight: '700'}}>Captain </Text>
        </View>
        <View
          style={{
            height: 15,
            width: 15,
            backgroundColor: selected == 2 ? '#FF956B' : '#c4c4c4',
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelected(3)}
        activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          paddingVertical: 15,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 40,
          marginTop: 20,
          justifyContent: 'space-between',
          borderColor: '#c4c4c4',
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
            source={require('../../assets/employe.png')}
          />
          <Text style={{fontSize: 18, fontWeight: '700'}}>Employe </Text>
        </View>
        <View
          style={{
            height: 15,
            width: 15,
            backgroundColor: selected == 3 ? '#FF956B' : '#c4c4c4',
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login', Typeselected);
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
          CONTINUE
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
