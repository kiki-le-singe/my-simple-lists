import React, { PropTypes, Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  size: PropTypes.number,
  style: PropTypes.object,
}

const defaultProps = {
  size: 30
}

const styles = StyleSheet.create({
  icon: {
    width: 84,
  },
})

export default class LeftIcon extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { onPress, name, size, style } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <Icon name={name} size={size} style={[styles.icon, style]} />
      </TouchableOpacity>
    )
  }
}

LeftIcon.propTypes = propTypes
LeftIcon.defaultProps = defaultProps
