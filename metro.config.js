// const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = mergeConfig(getDefaultConfig(__dirname), {
//   // Additional Metro configuration if needed
// });

// module.exports = withNativeWind(config, { input: "./global.css" });


// const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// const config = mergeConfig(getDefaultConfig(__dirname), {
//   /* your config */
// });

// module.exports = withNativeWind(config, { input: "./global.css" });



const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});

module.exports = withNativeWind(config, { input: "./global.css" });