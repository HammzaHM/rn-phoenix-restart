
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRNPhoenixRestartSpec.h"

@interface RNPhoenixRestart : NSObject <NativeRNPhoenixRestartSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RNPhoenixRestart : NSObject <RCTBridgeModule>
#endif

@end
