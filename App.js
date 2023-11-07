import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import codePush from 'react-native-code-push';

const App = () => {
  const checkForUpdate = async () => {
    const update = await codePush.checkForUpdate();
    if (update) {
      Alert.alert('Update Available', 'please update app', [
        {
          text: 'Ok',
          onPress: () => {
            onButtonPress();
          },
        },
        {text: 'Cancel', style: 'cancel'},
      ]);
    } else {
      Alert.alert('Update not Available', 'no need ', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    }
  };

  // useEffect(() => {
  //   checkForUpdate();
  // }, []);

  const onButtonPress = () => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
      updateDialog: true,
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 20,
          borderWidth: 2,
        }}
        onPress={checkForUpdate}>
        <Text style={{fontSize: 12, color: 'black'}}>Check for updates</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 20,
          borderWidth: 2,
        }}
        onPress={() => {
          Alert.alert('Update not Available', 'Code updated', [
            {
              text: 'Ok',
              style: 'cancel',
            },
          ]);
        }}>
        <Text style={{fontSize: 12, color: 'black'}}>Check for Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 20,
          borderWidth: 2,
        }}
        onPress={() => {}}>
        <Text style={{fontSize: 12, color: 'white'}}>Click Here</Text>
      </TouchableOpacity>
      {/* 
      <Text style={{fontSize: 12, color: 'black'}}>code push demo app</Text>
      <Text style={{fontSize: 12, color: 'red'}}>code push</Text> */}
      {/* <Text style={{fontSize: 12, color: 'green'}}>code push demo app</Text> */}
    </View>
  );
};

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
  installMode: codePush.InstallMode.IMMEDIATE,
};
// App = codePush(codePushOptions)(App);
export default codePush(codePushOptions)(App);
