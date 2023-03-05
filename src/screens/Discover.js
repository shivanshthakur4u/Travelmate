import { View, Text, SafeAreaView, Image, ScrollView} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useScrollToTop } from '@react-navigation/native'
import { AttractionImage, AvatarImage, HotelImage, RestaurantsImage } from '../../assets';
import { SearchBar } from 'react-native-elements';
import MenuContainer from '../components/MenuContainer';
const Discover = () => {

    const [type, setType] = useState("restaurants")
    const navigation = useNavigation();

    useLayoutEffect(()=>{
navigation.setOptions({
    headerShown:false
})
    },[])

const [text, settext] = useState('')


// useEffect(()=>{
//     loadData();
// },[text])

// const loadData =()=>{
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'dc6be911f1msh21748cd65485799p19a6c5jsn968c3c54d986',
//             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//         }
//     };
    
//     fetch(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${text}&lang=en_US&units=km`, options)
//         .then(response => response.json())
//         .then(response => console.log(response.data.results))
//         .catch(err => console.error(err));
// }

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
  
     {/* <SearchBar className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4"
placeholder="Type Here to Search..." lightTheme onChangeText={(text1)=>{
settext(text1)
}} value={text}
/> */}

{/* Menu Container */}
<ScrollView>
    <View className="flex-row items-center justify-between px-8 mt-8">
<MenuContainer 
    key={'hotel'}
    title="Hotels"
    imgSrc={HotelImage}
    type={type}
    setType={setType}
/>

<MenuContainer 
    key={'attractions'}
    title="Attractions"
    imgSrc={AttractionImage}
    type={type}
    setType={setType}
/>

<MenuContainer 
    key={'restaurants'}
    title="Restaurants"
    imgSrc={RestaurantsImage}
    type={type}
    setType={setType}
/>

    </View>
</ScrollView>

    

     

    
      </SafeAreaView>
  )
}

export default Discover