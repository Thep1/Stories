import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Input } from 'react-native-elements';
export default class WriteStory extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            centerComponent={{
              text: 'Write A Story',
              style: { color: 'black', fontWeight: 'bold' },
            }}
          />
          <Input placeholder="Story Title" onChangeText={(t) => {}} />
          <Input placeholder="Author" onChangeText={(t) => {}} />
          <Input placeholder="Write your Story" onChangeText={(t) => {}} />
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: 'lightgrey',
              borderRadius: 5,
              width: 70,
              height: 30,
              alignSelf:"center"
            }}>
            <Text style={{ alignSelf: 'center', marginTop: 5 }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}
