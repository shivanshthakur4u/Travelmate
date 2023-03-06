import axios from 'axios'

export const getPlacesData = async()=>{

    try{
      const {data:{data}} = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',{
        params: {
            bl_latitude: '25.15543993776612',
            tr_latitude: '25.41257834546226',
            bl_longitude: '51.3958721019369',
            tr_longitude: '51.62812119686502',
            limit: '30',
            currency: 'USD',

            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'X-RapidAPI-Key': 'dc6be911f1msh21748cd65485799p19a6c5jsn968c3c54d986',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
       }
       );
       return data;
    }
    catch(err){
    return nill
    }
}