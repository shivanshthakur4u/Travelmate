import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const ItemScreen = ({route}) => {
  const navigation = useNavigation();
  const {data} = route.params;

  useLayoutEffect(()=>{
    {
      navigation.setOptions({
        headerShown:false
      })
    }
  },[])
  return (
    <SafeAreaView className="flex-1 bg-#fff relative mt-6">
     <ScrollView className="flex-1 px-4 py-6 pb-56">
     <View className="relative bg-#fff shadow-lg">
     <Image 
     source={{uri:data?.photo?.images?.medium?.url ? 
     data?.photo?.images?.medium?.url: 
     "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"}}
     className="w-full h-72 object-cover rounded-2xl"
      />

      <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">

      <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-white"  
      onPress={()=>{navigation.navigate('Discover')}}>
      <Feather name="chevron-left" size={24} color="#06B2BE" />
      </TouchableOpacity>

      <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]" >
      <FontAwesome5 name="heartbeat" size={24} color="#fff" />
      </TouchableOpacity>

      </View>


      <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
         <View className="flex-row space-x-2 items-center">
          
          <Text className="text-[12px] font-bold text-[#06B2BE]" >
            {data?.price_level}
          </Text>

          <Text className="text-[32px] font-bold text-[#06B2BE]">
            {data?.price}
          </Text>
         </View>

         <View className="px-2 py-1 rounded-md bg-teal-100">
          <Text className="text-center items-center justify-center mt-2">{data?.open_now_text}</Text>
         </View>
      </View>
     </View>




     <View className="mt-6">
      <Text className="text-[#428288] text-[22px] font-bold">
        {data?.name}
      </Text>
      <View className="flex-row items-center space-x-2 mt-2">
        <FontAwesome5 name="map-marker-alt" size={25} color="#8C9EA6" />
        <Text className="text-[#8C9EA6] text-[18px] font-bold">{data?.location_string}</Text>
      </View>
     </View>

     <View className="mt-4 flex-row items-center justify-between">
      {data?.rating && (
        <View className="flex-row items-center space-x-2">
          <View className="w-12 h-12 rounded-2xl bg-red-200 items-center justify-center shadow-md">
            <FontAwesome5 name="star" size={24} color="#D58574" />
          </View>

          <View>
          <Text className="text-[#515151]">
           {data?.rating}
          </Text>
          <Text className="text-[#515151]">
           Ratings
          </Text>
          </View>
        </View>
      )}




      {data?.price_level && (
        <View className="flex-row items-center space-x-2">
          <View className="w-12 h-12 rounded-2xl bg-red-200 items-center justify-center shadow-md">
            <MaterialIcons name="attach-money" size={24} color="#D58574" />
          </View>

          <View>
          <Text className="text-[#515151]">
           {data?.price_level}
           
          </Text>
          <Text className="text-[#515151]">
           Price Level
          </Text>
          </View>
        </View>
      )}


      {data?.bearing && (
        <View className="flex-row items-center space-x-2">
          <View className="w-12 h-12 rounded-2xl bg-red-200 items-center justify-center shadow-md">
            <FontAwesome5 name="map-signs" size={24} color="#D58574" />
          </View>

          <View>
          <Text className="text-[#515151]">
           {data?.bearing}
          </Text>
          <Text className="text-[#515151]">
           Bearing
          </Text>
          </View>
        </View>
      )}

     </View>




     {data?.description && (
      <Text className="mt-4 tracking-wide text-[13px] font-semibold text-[#7a7c7d]">{data?.description}</Text>
     )}

     {data?.cuisine && (
      <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
      {data?.cuisine.map((n)=>(
        <TouchableOpacity key={n.key} className="px-2 py-1 rounded-md bg-emerald-100">
            <Text>{n.name}</Text>
        </TouchableOpacity>
     ))}
      </View>
     )}



     <View className="space-y-2 mt-4 bg-gray-200 rounded-2xl px-4 py-2 ">
      {data?.phone && (
        <View className="items-center flex-row space-x-6">
        <FontAwesome5 name="phone" size={20} color="#428288" />
        <Text className="text-[15px]">{data?.phone}</Text>
        </View>
      )}

      {data?.email && (
        <View className="items-center flex-row space-x-6">
        <FontAwesome5 name="envelope" size={20} color="#428288" />
        <Text className="text-[15px]">{data?.email}</Text>
        </View>
      )}


      {data?.address && (
        <View className="items-center flex-row space-x-6">
        <FontAwesome5 name="map-pin" size={20} color="#428288" />
        <Text className="text-[15px]">{data?.address}</Text>
        </View>
      )}

<View className="mt-4 py-4 rounded-lg bg-[#06B2bE] items-center justify-center mb-12">

<Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">Book Now</Text>

</View>
     </View>


     </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen