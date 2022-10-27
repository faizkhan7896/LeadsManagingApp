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
  {
    id: '10',
    title: 'DELIVERY',
    time: '9 houre',
  },
];

export default function Home({navigation}) {
  const [modalTwo, setModalTwo] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState('');
  const [selected, setSelected] = useState('');
  const params = useRoute();
  // alert(JSON.stringify(params.params.type));

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
    setTime(date);
  };

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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        <Text
          onPress={() => {
            setSelected('Check In');
            setModalTwo(true);
          }}
          style={{fontWeight: '700', color: '#FF956B'}}>
          Check in
        </Text>
        <Text
          onPress={() => {
            setSelected('Check Out');
            setModalTwo(true);
          }}
          style={{fontWeight: '700', color: '#FF956B'}}>
          Check out
        </Text>
      </View>
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
      {params.params.type == 'MANAGER' ? (
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
                CAPTAINS
              </Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            {hour.map(item => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Employies', {id: item.id})}
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
                  Captain {item.id}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : params.params.type == 'CAPTAIN' ? (
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
                CAPTAINS
              </Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            {hour.slice(0, 9).map(item => (
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskAssign', {id: item.id})}
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
      ) : (
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
                Employee{' '}
                <Text style={{fontSize: 12, fontWeight: '700', color: '#fff'}}>
                  (your task)
                </Text>
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
            value={
              'Lorem ipsum dolor sLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. it amet, consectetur adipiscing elit. '
            }
            editable={false}
            multiline
          />
        </View>
      )}
      <Modal
        animationType="fade"
        visible={modalTwo}
        onDismiss={() => setModalTwo(false)}
        transparent
        style={{}}>
        <TouchableOpacity
          onPress={() => setModalTwo(false)}
          activeOpacity={1}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            backgroundColor: '#00000033',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: '#fff',
              width: Dimensions.get('window').width - 60,
              height: Dimensions.get('window').width - 150,
              alignItems: 'center',
              borderRadius: 20,
              // borderWidth: 0.4,
              // borderColor: theme.colors.Light_Gray,
              paddingVertical: 20,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '700',
                  color: '#FF956B',
                  fontSize: 18,
                  alignSelf: 'center',
                }}>
                {selected}
              </Text>

              <TouchableOpacity
                onPress={() => showDatePicker()}
                activeOpacity={1}
                style={{
                  backgroundColor: '#fff',
                  width: Dimensions.get('window').width - 120,
                  alignItems: 'flex-start',
                  borderRadius: 10,
                  borderWidth: 0.5,
                  paddingVertical: 15,
                  marginTop: 30,
                  paddingHorizontal: 10,
                  borderColor: 'gray',
                }}>
                <View>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                  <Text style={{fontWeight: '700', color: 'gray'}}>
                    {time == ''
                      ? 'Select your time'
                      : moment(time).format('LT')}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setModalTwo(false);
                  setTime('');
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
                  SUBMIT
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {params.params.type == 'MANAGER' && (
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() => navigation.navigate('AddProduct')}
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: '#FF956B',
            borderRadius: 120,
            position: 'absolute',
            bottom: 40,
            right: 20,
          }}>
          <Image
            source={require('../../assets/Add.png')}
            style={{height: 24, width: 24, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      )}
      {params.params.type == 'CAPTAIN' && (
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() => navigation.navigate('AddProduct')}
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: '#FF956B',
            borderRadius: 120,
            position: 'absolute',
            bottom: 40,
            right: 20,
          }}>
          <Image
            source={require('../../assets/Add.png')}
            style={{height: 24, width: 24, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
