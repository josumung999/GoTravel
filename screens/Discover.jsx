import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Hotels, Restaurants } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState('restaurants');

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

      {/* Menu container */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer 
            key="hotel"
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer 
            key="attractions"
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer 
            key="restaurants"
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>

        <View>
          <View className="px-4 flex-row items-center justify-between mt-8" >
            <Text className="text-[#2C7379] text-[28px] font-bold ">Top Tips</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
              <FontAwesome name='long-arrow-right' color="#A0C4C7" />
            </TouchableOpacity>
          </View>

          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ItemCardContainer 
                key={item}
                imageSrc="https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                title="Mon Beguin"
                location="Kinshasa"
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Discover