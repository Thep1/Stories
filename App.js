import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import WriteStory from './writestory'
import ReadStory from './readstory'
export default class App extends React.Component {
  render()
  {
    return(
      <A/>
    )
  }
}
const S = createBottomTabNavigator({
  WriteStory:{screen:WriteStory},
  ReadStory:{screen:ReadStory}
})
const A = createAppContainer(S)
