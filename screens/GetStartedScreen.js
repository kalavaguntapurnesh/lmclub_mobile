// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React from 'react';
// import LottieView from 'lottie-react-native';
// import {useNavigation} from '@react-navigation/native';

// const GetStartedScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* Gradient Background */}
//       <View style={styles.gradientBackground}>
//         {/* Top Section - Animation (Full height and width) */}
//         <View style={styles.topSection}>
//           <LottieView
//             source={require('../assets/GetStartedRewards.json')}
//             autoPlay
//             loop
//             style={styles.animation}
//           />
//         </View>

//         {/* Bottom Section - Title & Buttons */}
//         <View style={styles.bottomSection}>
//           <Text style={styles.title}>
//             Snuggle up and enjoy a great rewards together.
//           </Text>

//           {/* Buttons */}
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Register')}
//             style={styles.button}>
//             <Text style={styles.buttonText}>Create an account</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => navigation.navigate('Login')}
//             style={styles.button}>
//             <Text style={styles.buttonText}>I already have an account</Text>
//           </TouchableOpacity>

//           <View style={{paddingTop: 20}}>
//             <Text className='bg-black text-2xl'>
//               By contiuing, you agree to the Terms of Service and Privacy Policy
//               of LM Club.
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default GetStartedScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Vertically center the content
//     alignItems: 'center', // Horizontally center the content
//   },
//   gradientBackground: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'space-between', // Space between top and bottom sections
//   },
//   topSection: {
//     flex: 1, // Make the topSection take up 50% of the screen height
//     width: '100%', // Ensure the top section takes up full width
//     justifyContent: 'center', // Vertically center the animation
//     alignItems: 'center', // Horizontally center the animation
//   },
//   animation: {
//     paddingTop: 60,
//     width: '100%', // Set animation width to 100% of the parent
//     height: '100%', // Set animation height to 100% of the parent
//   },
//   bottomSection: {
//     flex: 1, // Take up the remaining 50% of the screen
//     justifyContent: 'start', // Vertically center the content
//     alignItems: 'center', // Horizontally center the content
//     padding: 20, // Add some padding around the section
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30, // Space between title and buttons
//   },
//   button: {
//     backgroundColor: '#22C55E',
//     padding: 15,
//     borderRadius: 4,
//     alignItems: 'center',
//     marginVertical: 8, // Space between buttons
//     width: '100%',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const GetStartedScreen = () => {
//   return (
//     <View className="flex-1 bg-red-500  text-white h-[100%] w-[100%] justify-center items-center">
//     <View className="flex justify-center items-center border-2 border-green-600">
//       <Text className="text-4xl italic">Hello</Text>
//     </View>
//   </View>
//   )
// }

// export default GetStartedScreen

// const styles = StyleSheet.create({})

import {Text, View, TouchableOpacity} from 'react-native';

import React from 'react';

import LottieView from 'lottie-react-native';

import {useNavigation} from '@react-navigation/native';

const GetStartedScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center">
      {/* Gradient Background */}

      <View className="flex-1 w-full justify-between">
        {/* Top Section - Animation */}

        <View className="flex-1 w-[100%] items-center justify-center">
          <LottieView
            source={require('../assets/Rewards.json')}
            autoPlay
            loop
            className="pt-16 w-[100%] h-[100%]"
          />
        </View>

        {/* Bottom Section - Title & Buttons */}

        <View className="flex-1 items-center px-5">
          <Text className="text-2xl font-bold text-center mb-8">
            Snuggle up and enjoy great rewards together.
          </Text>

          {/* Buttons */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            className="bg-green-500 py-4 rounded-md items-center w-full my-2">
            <Text className="text-white text-lg font-semibold">
              Create an account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            className="bg-green-500 py-4 rounded-md items-center w-full my-2">
            <Text className="text-white text-lg font-semibold">
              I already have an account
            </Text>
          </TouchableOpacity>

          <View className="pt-5">
            <Text className="text-center text-gray-600 text-sm">
              By continuing, you agree to the Terms of Service and Privacy
              Policy of LM Club.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GetStartedScreen;
