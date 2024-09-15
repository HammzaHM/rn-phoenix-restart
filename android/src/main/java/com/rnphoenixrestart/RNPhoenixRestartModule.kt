package tn.rnphoenixrestart

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.jakewharton.processphoenix.ProcessPhoenix;

class RNPhoenixRestartModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context)  {
  public var appContext: ReactApplicationContext = context;

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun restartApp(promise: Promise) {
    ProcessPhoenix.triggerRebirth(appContext)

    promise.resolve(true)
  }

  companion object {
    const val NAME = "RNPhoenixRestart"
  }
}
