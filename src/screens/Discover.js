import { View, Text, SafeAreaView, Image} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AvatarImage } from '../../assets';

const Discover = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
navigation.setOptions({
    headerShown:false
})
    },[])
  return (
    <SafeAreaView className="flex-1 bg-#fff relative mt-6">
      <View className="flex-row items-center justify-between px-8">
        <View>
<Text className="text-[40px] text-[#0B646B]">Discover</Text>
<Text  className=" text-[#527283] text-[22px]">the nature beatuty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image source={AvatarImage}
          className="w-full h-full rounded-md object-cover"
           />
        </View>
      </View>
      </SafeAreaView>
  )
}

export default Discover