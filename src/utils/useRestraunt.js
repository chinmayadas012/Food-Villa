import { useState , useEffect} from "react";
import RESTAURANT_MENU_API from "../contants";

const useRestraunt = (id)=>{
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

   

    const [restaurant,setRestaurant]=useState(null);
    // const[getRestaurantDetails,setGetRestaurantDetails]=useState(null)

    async function getRestaurantInfo(){
        
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ `${id}`);
        const json = await data.json();
        // console.log(json.data);
        
        
        // feeDetails.restaurantId
        setRestaurant(json.data);
    }
  
    
    return restaurant
    
}
export default useRestraunt;
