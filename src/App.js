import React from 'react';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';

import Home from './pages/Home'
import Products from './pages/Products'

const App = DrawerNavigator({
    Home : {screen: Home},
    Products : {screen: Products},
})

export default App