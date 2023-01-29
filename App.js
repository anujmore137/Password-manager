/**
 * Created By: Anuj More 29-Jan-2023 10:00 AM (IST)
 */

import React from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
