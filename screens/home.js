import * as React from 'react';
import { Button, Text, View, Header,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }


function HomeScreen({ navigation }) {
    return (
    <>
      <View style={styles.topHead}>
        <Text style={styles.while}>Chats</Text>
      </View>  
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chats</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
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
        <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'My home', headerShown:false ,cardStyle: { backgroundColor: '#2f2a30' }}} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Navigator>
    );
  }


  const styles = StyleSheet.create({
      while:{
        color:'#fff',
        fontSize: 33,
        fontWeight: '700'
      },
      topHead:{
        // backgroundColor:'#fff',
        height:70,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        marginLeft:10,
      },
  });

  export default HomeStackScreen;
