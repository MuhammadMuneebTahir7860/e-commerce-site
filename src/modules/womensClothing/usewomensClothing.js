import {useState,useEffect} from 'react';
import axios from 'axios';

export default function WoMensClothing(){
    const[womensClothing,setwomensClothing]=useState([]);
    const[loading,setLoading]=useState(false);
    const fetchwomensClothing=async()=>{
        try {
            setLoading(true);
            let getwomensClothing=await axios.get("https://fakestoreapi.com/products/category/women's clothing");
            let womensClothingData=await getwomensClothing.data;
            setwomensClothing(womensClothingData);
        } catch (error) {
            console.log("Error Message", error.message);
        }
        finally{
            setLoading(false)
        }
        
    }

useEffect (()=>{
    fetchwomensClothing();
},[])

    return(
       [womensClothing,loading]
    )
}