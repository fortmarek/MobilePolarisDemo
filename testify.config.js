module.exports = {
  ios: {
    type: 'ios',
    simulatorName: 'iPhone 13',
    simulatorOS: '16.4',
    bundleIdentifier: 'org.reactjs.native.example.MobilePolarisDemo',
    installCommand: "yarn react-native run-ios --udid '$device'",
    workspacePath: 'ios/MobilePolarisDemo.xcworkspace',
    schemePath: 'MobilePolarisDemo',
  },
};
