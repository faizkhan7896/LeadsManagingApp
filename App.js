import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import SplashScreen from './src/Screens/Auth/Splash';
import SelectType from './src/Screens/Auth/SelectType';
import Login from './src/Screens/Auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Screens/Home/Home';
import Employies from './src/Screens/Home/Employies';
import TaskAssign from './src/Screens/Home/TaskAssign';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SelectType" component={SelectType} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Employies" component={Employies} />
        <Stack.Screen name="TaskAssign" component={TaskAssign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
