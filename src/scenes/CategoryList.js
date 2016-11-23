import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import layoutStyles from '../styles/layout'

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default function CategoryList() {
  return (
    <View style={layoutStyles.container}>
      <TouchableOpacity
        onPress={() => {
          Actions.category({
            title: 'Category 1',
            data: {
              description: 'This category is so awesome'
            },
          })
        }}
      >
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </TouchableOpacity>
      <Text style={layoutStyles.instructions}>
        To get started, edit index.ios.js or index.android.js
      </Text>
      <Text style={layoutStyles.instructions}>
        ios:{'\n'}
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu{'\n'}
        android:{'\n'}
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
      </Text>
    </View>
  )
}
