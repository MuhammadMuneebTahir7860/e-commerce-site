import {useState,useEffect} from 'react';
import axios from 'axios';


export function FetchApis(){
    const[products,setProducts]=useState([]);
    const[loading,setLoading]=useState(false);

    const fetchProducts=async()=>{
        try {
            setLoading(true);
            let getProducts=await axios.get('https://fakestoreapi.com/products');
            let productsData=await getProducts.data;
            setProducts(productsData);
        } catch (error) {
            console.log("Error Message", error.message);
        }
        finally{
            setLoading(false)
        }
        
    }

useEffect (()=>{
    fetchProducts();
},[])




    return([products,loading])
}