import React from 'react';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';

import Home from './pages/Home'
import Products from './pages/Products'
import Search from './pages/Search'
import Cart from './pages/Cart'

const App = DrawerNavigator({
    Home : {screen: Home},
    Products : {screen: Products},
    Search : {screen: Search},
    Cart : {screen: Cart},
})

export default App