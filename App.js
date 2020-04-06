/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * statusbar:#2f2a30,#29242a
 * <StatusBar backgroundColor="#2f2a30" barStyle="light-content" />
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, Text, View, StatusBar, Image, Dimensions } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsStackScreen from './screens/setting';
import HomeStackScreen from './screens/home';


const MyTheme = {
  dark: false,
  colors: {
    primary: '#2d70ff',
    background: 'rgb(242, 242, 242)',
    card: '#29242a',
    text: '#fff',
  },
  height: 500,
};


// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details!</Text>
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// const HomeStack = createStackNavigator();

// function HomeStackScreen({ navigation ,route}) {
//   if (route.state && route.state.index > 0){
//     navigation.setOptions({tabBarVisible: false})
//   }
//   else{
//     navigation.setOptions({tabBarVisible: true})
//   }
  
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'My home', headerShown:false ,cardStyle: { backgroundColor: '#2f2a30' }}} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const SettingsStack = createStackNavigator();

// function SettingsStackScreen({ navigation, route }) {
//   if (route.state && route.state.index > 0){
//     navigation.setOptions({tabBarVisible: false})
//   }
//   else{
//     navigation.setOptions({tabBarVisible: true})
//   }
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//       <SettingsStack.Screen name="Details" component={DetailsScreen} />
//     </SettingsStack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  const deviceWidth = Math.round(Dimensions.get('window').width);
  if (deviceWidth >500){
    var imgmargin = 0
    var imgm = -40
  }
  else{
    var imgmargin = 20
    var imgm = -20
  }
  return (
    <>
    <StatusBar backgroundColor="#2f2a30" barStyle="light-content" />
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen name="CreateGroup" component={HomeStackScreen} options={{title:'',headerStyle:{ backgroundColor: '#2f2a30'},tabBarIcon: ({tintColor}) => (<Image source={require('./assets/create.png')} style={{width: 35, height: 35,marginTop:imgmargin,tintColor: tintColor}} />)}}/>
        <Tab.Screen name="Friends" component={HomeStackScreen} options={{title:'',headerStyle:{ backgroundColor: '#2f2a30'},tabBarIcon: ({tintColor}) => (<Image source={require('./assets/friend.png')} style={{width: 35, height: 35,marginTop:imgmargin,tintColor: tintColor}} />)}}/>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{title:'',headerStyle:{ backgroundColor: '#2f2a30'},tabBarIcon: ({tintColor}) => (<Image source={require('./assets/chat.png')} style={{width: 60, height: 60,marginTop:imgm , tintColor: tintColor}} />)}}/>
        <Tab.Screen name="Profile" component={HomeStackScreen} options={{title:'',headerStyle:{ backgroundColor: '#2f2a30'},tabBarIcon: ({tintColor}) => (<Image source={require('./assets/profile.png')} style={{width: 35, height: 35,marginTop:imgmargin,tintColor: tintColor}} />)}}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen} options={{title:'',headerStyle:{ backgroundColor: '#2f2a30'},tabBarIcon: ({tintColor}) => (<Image source={require('./assets/setting.png')} style={{width: 35, height: 35,marginTop:imgmargin,tintColor: tintColor}} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}