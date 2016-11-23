import React, { PropTypes } from 'react'
import {
  Text,
  View
} from 'react-native'

import layoutStyles from '../styles/layout'

const propTypes = {
  data: PropTypes.object
}

export default function Category(props) {
  const { data } = props
  const { description } = data

  return (
    <View style={layoutStyles.container}>
      <Text style={layoutStyles.instructions}>
        {description}
      </Text>
    </View>
  )
}

Category.propTypes = propTypes
