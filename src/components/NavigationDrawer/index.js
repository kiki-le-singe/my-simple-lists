import React, { PureComponent, PropTypes } from 'react'
import Drawer from 'react-native-drawer'
import { Actions, DefaultRenderer } from 'react-native-router-flux'

import SideMenu from '../SideMenu'
import { isIOS } from '../../utils/platform'

const propTypes = {
  navigationState: PropTypes.object,
  onNavigate: PropTypes.func,
}

export default class NavigationDrawer extends PureComponent {
  state = {
    drawerDisabled: false,
  }

  goToCategoryPage = () => {
    Actions.category({
      title: 'Category 1', // allow to override scene's default title
      data: { // allow to pass some options to the scene
        description: 'This category is so awesome'
      },
    })

    this._drawer.close()
  }

  renderSideMenu() {
    return <SideMenu onPress={this.goToCategoryPage} />
  }

  render() {
    const state = this.props.navigationState
    const children = state.children
    const androidDrawerProps = {
      type: 'overlay',
      panCloseMask: 0.2,
      closedDrawerOffset: -3,
      tweenHandler: ratio => ({
        main: { opacity: 1 },
        mainOverlay: {
          opacity: ratio / 2,
          backgroundColor: 'black',
        },
      }),
    }
    const iosDrawerProps = {
      type: 'static',
      tweenHandler: Drawer.tweenPresets.parallax
    }
    const drawerProps = isIOS() ? iosDrawerProps : androidDrawerProps

    return (
      <Drawer
        captureGestures
        panOpenMask={0.02}
        negotiatePan
        tapToClose
        openDrawerOffset={0.2}
        open={state.open}
        ref={ref => (this._drawer = ref)}
        content={this.renderSideMenu()}
        onOpen={() => Actions.refresh({ key: state.key, open: true })}
        onClose={() => Actions.refresh({ key: state.key, open: false })}
        disabled={this.state.drawerDisabled}
        {...drawerProps}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

NavigationDrawer.propTypes = propTypes
