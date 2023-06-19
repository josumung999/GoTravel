import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[#0B646B] text-[40px] font-bold">Discover</Text>
          <Text className="text-[#5272B3] text-[36px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-md">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover" 
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true}
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyCueyNx1_3Xr70ryaTN_Y6D2FIlUGM0M1w",
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Discover