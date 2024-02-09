import React from 'react';

import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
