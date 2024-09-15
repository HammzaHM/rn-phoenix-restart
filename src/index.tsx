import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-phoenix-restart' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RNPhoenixRestart = NativeModules.RNPhoenixRestart
  ? NativeModules.RNPhoenixRestart
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function restartApp(): Promise<void> {
  return RNPhoenixRestart.restartApp();
}
