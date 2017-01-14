import React from 'react'
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux'

import CategoryList from './scenes/CategoryList'
import Category from './scenes/Category'
import NavigationDrawer from './components/NavigationDrawer'
import LeftIcon from './components/LeftIcon'
import layoutStyles from './styles/layout'
import CategoriesStore from './mobx/categoriesStore'

const { titleStyle, navigationBarStyle, leftButtonIconStyle } = layoutStyles
const leftIcon = () => (
  <LeftIcon
    name="md-menu"
    onPress={() => Actions.refresh({ key: 'drawer', open: value => !value })}
  />
)

const store = CategoriesStore

export default function App() {
  return (
    <Router store={store}>
      <Scene key="root">
        <Scene key="drawer" component={NavigationDrawer} open={false}>
          <Scene key="main">
            <Scene
              initial
              key="categoryList"
              renderLeftButton={leftIcon}
              component={CategoryList}
              title="Category List"
              titleStyle={titleStyle}
              navigationBarStyle={navigationBarStyle}
              leftButtonIconStyle={leftButtonIconStyle}
            />
            <Scene
              key="category"
              component={Category}
              title="Category"
              titleStyle={titleStyle}
              navigationBarStyle={navigationBarStyle}
              leftButtonIconStyle={leftButtonIconStyle}
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  )
}
