import React, { PropTypes } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native'

import config from '../../styles/config'

const { color } = config

const styles = StyleSheet.create({
  sideMenu: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 10,
    backgroundColor: 'rgb(9, 110, 228)',
    color: color.white,
  },
})

const propTypes = {
  onPress: PropTypes.func
}

export default function SideMenu(props) {
  const { onPress } = props

  return (
    <View style={styles.sideMenu}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>Category Page</Text>
      </TouchableOpacity>
    </View>
  )
}

SideMenu.propTypes = propTypes
