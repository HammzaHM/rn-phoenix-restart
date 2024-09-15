import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { restartApp } from 'rn-phoenix-restart';

export default function App() {
  const handleAppRestart = async () => {
    ToastAndroid.showWithGravity(
      'The app is being restarting...',
      ToastAndroid.SHORT,
      ToastAndroid.TOP
    );

    await restartApp();

    ToastAndroid.show('The app has been restarting ✅', ToastAndroid.LONG);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This is an Example on how to use the rn-phoenix-restart module
      </Text>
      <TouchableOpacity style={styles.restartButton} onPress={handleAppRestart}>
        <Text style={styles.btnText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#8f10e3',
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  restartButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 20,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#79e8ba',
  },
  btnText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
