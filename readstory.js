import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements'
export default class ReadStory extends React.Component {
  render()
  {
    return(
      <SafeAreaProvider>
      <View>
        <Header centerComponent = {{text:'Read A Story',style:{color:'black',fontWeight:"bold"}}}/>
      </View>
      </SafeAreaProvider>
    )
  }
}
