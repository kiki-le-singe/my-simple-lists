# My Simple Lists

Work in progress...

## Installation

```shell
$ git clone https://github.com/kiki-le-singe/my-simple-lists.git
$ cd my-simple-lists
$ npm install or yarn
```

## Upgrading

```shell
$ cd my-simple-lists
$ npm install --save react-native@X.Y or yarn add react-native@X.Y
$ react-native upgrade
$ react-native link (if necessary)
```

> See the official documentation: [Upgrading](https://facebook.github.io/react-native/docs/upgrading.html)

## Scripts

### Development

```shell
$ react-native run-ios or react-native run-android
```

Runs your app.

```shell
$ npm start
```

Runs the packager on port 8081.

### Linter

```shell
$ npm run lint
```

Lint all files in `~/src` and `~/__tests__`.


## Features
* [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
* [react-native-drawer](https://github.com/root-two/react-native-drawer)
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
* [mobx](https://github.com/mobxjs/mobx)
* [mobx-react](https://github.com/mobxjs/mobx-react)


## Tips

### React Native Drawer

* Change colour of overlay background
  * [How to change colour of overlay background?](https://github.com/root-two/react-native-drawer/issues/231)
  * [Change background color of dim effect?](https://github.com/root-two/react-native-drawer/issues/162)

### React Native Route Flux

* Use a custom icon in Scene
  * [How to open Drawer When use a custom icon in Scene](https://github.com/aksonov/react-native-router-flux/issues/1101)


## Tips

* [mobx-react - provider-and-inject](https://github.com/mobxjs/mobx-react#provider-and-inject) allow to avoid passing through multiple layers of components explicitly


## Learn more

* [MobX documentation](https://mobx.js.org/)
* [React Native with MobX — Getting Started](https://medium.com/react-native-training/react-native-with-mobx-getting-started-ba7e18d8ff44#.cn367yszs)
* [todomvc example from redux](https://github.com/reactjs/redux/tree/master/examples/todomvc)
