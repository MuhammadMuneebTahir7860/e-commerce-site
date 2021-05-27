import {useState,useEffect} from 'react';
import axios from 'axios';

export default function MensClothing(){
    const[mensClothing,setmensClothing]=useState([]);
    const[loading,setLoading]=useState(false);
    const fetchmensClothing=async()=>{
        try {
            setLoading(true);
            let getmensClothing=await axios.get("https://fakestoreapi.com/products/category/men's clothing");
            let mensClothingData=await getmensClothing.data;
            setmensClothing(mensClothingData);
        } catch (error) {
            console.log("Error Message", error.message);
        }
        finally{
            setLoading(false)
        }
        
    }

useEffect (()=>{
    fetchmensClothing();
},[])

    return(
       [mensClothing,loading]
    )
}