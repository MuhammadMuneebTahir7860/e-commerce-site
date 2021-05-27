import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Electronics(){
    const[electProducts,setElectProducts]=useState([]);
    const[loading,setLoading]=useState(false);
    const fetchElectProducts=async()=>{
        try {
            setLoading(true);
            let getElectProducts=await axios.get('https://fakestoreapi.com/products/category/electronics');
            let electProductsData=await getElectProducts.data;
            setElectProducts(electProductsData);
        } catch (error) {
            console.log("Error Message", error.message);
        }
        finally{
            setLoading(false)
        }
        
    }

useEffect (()=>{
    fetchElectProducts();
},[])

    return(
       [electProducts,loading]
    )
}