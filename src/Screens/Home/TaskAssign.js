import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useRoute} from '@react-navigation/native';

export default function Home({navigation}) {
  const [modalTwo, setModalTwo] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState('');
  const [selected, setSelected] = useState('');
  const params = useRoute();
  // alert(JSON.stringify(params.params.type));

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
          flex: 0.5,
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
              source={require('../../assets/employe.png')}
            />
            <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>
              Employee {params.params.id}
            </Text>
          </View>
        </View>
        <TextInput
          placeholder="Assign Task"
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#000',
            paddingHorizontal: 20,
            paddingVertical: 20,
            marginVertical: 20,
          }}
          autoFocus
          multiline={true}
        />
      </View>
    </View>
  );
}
