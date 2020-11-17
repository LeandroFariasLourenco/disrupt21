import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Login from '@Screens/home';

const App = () => (
  <>
    <StatusBar barStyle='dark-content' />
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  </>
);

export default App;
