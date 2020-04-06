import * as React from 'react';
import { Button, Text, View, StatusBar, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }

  function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }


  const SettingsStack = createStackNavigator();

function SettingsStackScreen({ navigation, route }) {
  if (route.state && route.state.index > 0){
    navigation.setOptions({tabBarVisible: false})
  }
  else{
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
