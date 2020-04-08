import * as React from 'react';
import { Text, View, Header,StyleSheet, TextInput,StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { create } from 'react-test-renderer';
import {Icon, Divider} from 'react-native-elements'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// 'rgb(209,15,15)','rgb(209,15,96)'

function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }

  function SingleScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',width:'100%',backgroundColor:'#141414'}}>
        <View style={{flex:1,width:'100%',height:32,backgroundColor:'#2f2a30',borderTopRightRadius:40,borderTopLeftRadius:40}}>
          <View style={{flexDirection:'row',width:'94%',backgroundColor:'#2d3238', alignSelf:'center',marginTop:38}}>
            <TextInput placeholder="Search messages or users..." placeholderTextColor="#8a8a8a" style={{flex:1,color:'#fff',paddingLeft:10}}></TextInput>
            <View style={{alignSelf:'center',marginRight:10}}><Icon name="search" color="#8a8a8a" ></Icon></View>
          </View>
          <Divider style={{backgroundColor:'#8a8a8a', marginTop:10}}></Divider>
        </View>
      </View>
    );
  }

  function GroupScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',width:'100%',backgroundColor:'#141414'}}>
        <View style={{flex:1,width:'100%',height:32,backgroundColor:'#2f2a30',borderTopRightRadius:40,borderTopLeftRadius:40}}>
          <View style={{flexDirection:'row',width:'94%',backgroundColor:'#2d3238', alignSelf:'center',marginTop:38}}>
            <TextInput placeholder="Search messages or users..." placeholderTextColor="#8a8a8a" style={{flex:1,color:'#fff',paddingLeft:10}}></TextInput>
            <View style={{alignSelf:'center',marginRight:10}}><Icon name="search" color="#8a8a8a" ></Icon></View>
          </View>
          <Divider style={{backgroundColor:'#8a8a8a', marginTop:10}}></Divider>
        </View>
      </View>
    );
  }

const Tab = createMaterialTopTabNavigator();

function HomeScreen({ navigation }) {
  React.useEffect(() => {
    SplashScreen.hide()
  }, []);
    return (
    <>
    <StatusBar backgroundColor="#141414" barStyle="light-content" />
      <View style={styles.topHead}>
        <Text style={styles.while}>Chats</Text>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle:{},
          indicatorStyle:{height:'100%'},
          style:{backgroundColor:'#2f2a30',borderWidth:1,borderColor:'#1c7dc7',width:'75%',alignSelf:'center',bottom:-25,borderRadius:20,overflow:'hidden',right:-40}
        }}
      >
        <Tab.Screen name="singles" component={SingleScreen}></Tab.Screen>
        <Tab.Screen name="Groups" component={GroupScreen}></Tab.Screen>
      </Tab.Navigator>
    </>
    );
  }


  const HomeStack = createStackNavigator();

  function HomeStackScreen({ navigation ,route}) {
    if (route.state && route.state.index > 0){
      navigation.setOptions({tabBarVisible: false})
    }
    else{
      navigation.setOptions({tabBarVisible: true})
    }
    
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'My home', headerShown:false ,cardStyle: { backgroundColor: '#141414' }}} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Navigator>
    );
  }


  const styles = StyleSheet.create({
      while:{
        color:'#fff',
        fontSize: 33,
        fontWeight: '700',
        paddingTop:20,
        paddingLeft:20
      },
      topHead:{
        // backgroundColor:'#fff',
        height:20,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
      },
  });

  export default HomeStackScreen;
