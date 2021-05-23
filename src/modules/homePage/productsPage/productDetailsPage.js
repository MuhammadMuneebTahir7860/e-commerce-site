import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';
function DetailsPage(){
    const {productId}=useParams();
    const[loading,setLoading]=useState(false);

    const[details,setDetails]=useState({});
    const productDetails=async()=>{
            try {
                setLoading(true);
                let getProductsDetails=await axios.get(`https://fakestoreapi.com/products/${productId}`);
                let productsDetails=await getProductsDetails.data;
                setDetails(productsDetails);
                console.log(productsDetails);
            } catch (error) {
                console.log("Error Message", error.message);
            }
            finally{
                setLoading(false)
            }
            
        }
        useEffect(()=>{
            if(productId && productId !=="") productDetails();
        },[productId]);
    return(
        <div>
            {/* <p>{details.title}</p> */}
        </div>
    )
}

export default DetailsPage;