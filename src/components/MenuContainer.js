import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({imageSrc, title, type, setType}) => {
  const handlePress =()=>{
    setType(title.toLowerCase());
  }
  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
      <View className={`w-28 h-28 p-2 shadow-sm rounded-full items-center justify-center
       ${type === title.toLowerCase() ? "bg-gray-200":"" }`}>
        <Image source={imageSrc} className="w-[80px] h-[80px] object-contain mt-5"
        />
        <Text className="text-[#00BCC9] text-xl font-semibold"></Text>
      </View>
    </TouchableOpacity>
  )
}

export default MenuContainer