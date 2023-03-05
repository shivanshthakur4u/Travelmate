import { SafeAreaView, StatusBar, Text, View, Image, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaViewBase } from 'react-native';
import { HeroImage } from '../../assets';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
  return (
    <SafeAreaView className="bg-#fff flex-1 relative mt-6">

      {/* first section */}
      <View className="flex-row px-4 mt-6 items-center space-x-2">
        <View className="w-14 h-14 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-1xl font-semibold" >Travel</Text>
        </View>
        <Text className="text=[#2A2B4B] text-2xl font-semibold">Mate</Text>
      </View>


      {/* second section */}
      <View className="px-3 mt-1 space-y-3">
        <Text className="text-[#3C6072] text-[40px]" >Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>

        <Text className="text-[#3C6072] text-[13px]">
        Travel brings good moments, joy and great Experience with meeting new peoples.
        </Text>
      </View>

{/* circle section */}
      <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-12 -right-36"></View>
      <View className="w-[350px] h-[350px] bg-[#E99265] rounded-full absolute bottom-[-150px] -left-36"></View>


      {/* Image container */}
<View className="flex-1 relative items-center justify-center">
  <Animatable.Image animation="fadeIn" easing="ease-in-out" source={HeroImage} className="w-[400px] h-[490px] mt-20" />

  <TouchableOpacity onPress={()=>{
    navigation.navigate('Discover')
  }} className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center ">
 
  <Animatable.View animation="pulse" easing={"ease-in-out"} iterationCount="infinite"  className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
    <Text className="text-gray-50 text-[22px] font-semibold">Travel</Text>
  </Animatable.View>

</TouchableOpacity>
</View>

    </SafeAreaView>
     

  )
}

export default HomeScreen
