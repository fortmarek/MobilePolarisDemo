#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <ReactNativeTestify/ReactNativeTestify.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  if (!self.bridge) {
    self.bridge = [self createBridgeWithDelegate:self launchOptions:launchOptions];
  }
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  if ([ReactNativeTestify runScreenshotTestsIfEnabledInWindow: self.window withBridge: self.bridge]) {
    return YES;
  }
  self.moduleName = @"MobilePolarisDemo";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

@end
