import { StyleSheet } from 'react-native'

import config from './config'

const { color } = config
const blackColor = color.black

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  titleStyle: {
    color: blackColor,
  },
  navigationBarStyle: {
    backgroundColor: color.white,
  },
  leftButtonIconStyle: {
    tintColor: blackColor,
  },
})
