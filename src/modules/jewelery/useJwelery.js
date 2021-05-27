import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Jewelry(){
    const[jewelryProducts,setjewelryProducts]=useState([]);
    const[loading,setLoading]=useState(false);
    const fetchjewelryProducts=async()=>{
        try {
            setLoading(true);
            let getjewelryProducts=await axios.get("https://fakestoreapi.com/products/category/jewelery");
            let jewelryProductsData=await getjewelryProducts.data;
            setjewelryProducts(jewelryProductsData);
        } catch (error) {
            console.log("Error Message", error.message);
        }
        finally{
            setLoading(false)
        }
        
    }

useEffect (()=>{
    fetchjewelryProducts();
},[])

    return(
       [jewelryProducts,loading]
    )
}