/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text>
        This is a sample React Native app using the new app screen component.
      </Text>
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
