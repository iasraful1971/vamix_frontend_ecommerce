import { Rating } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Spinner from "../extra/spinners/Spinner";
import firebaseDb from "../firebase/fireConfig";


const ProductInfo = () => {
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
    const params = useParams();
    const { cartItems } = useSelector((state) => state.cartReducer);
 

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const productTemp = await getDoc(
        doc(firebaseDb, "products", params.productId)
      );
        console.log(productTemp.data())
      setProduct(productTemp.data());
    } catch (error) {
      
    }
  }
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      
     {
         !product ? <Spinner/> : 
         <div className="container product-details my-5">
              <Link style={{color: '#000', fontSize:'20px', padding:"10px 0", textDecoration:'none'}} className="bradcame"  to="/">
          Back to products /
        </Link>
             <div className="row">
                 <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                     <img src={product.img} alt="" />
                 </div>
                 <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                     <h2>{product.name}</h2>
                     <Rating value={product.star} size="small" />
                     <p className="brand">brand: {product.seller}</p>
                     
                     <hr />
                     <h3 className="product-price">$ {product.price}</h3>
                     <div className="cart-button">
                     <button onClick={() => addToCart(product)} className="add-to-cart-details">Add to cart</button>
                     </div>
                 </div>
             </div>
             <hr />
             <div className="row">
               <h5>Products Details of {product.name} </h5>
                 <div className="col-md-6">
                    {
                        product.features.map(item => {
                            return(
                                 <li>{item.description} -  { item.value} </li>
                                 
                        )
                        })
                    }
                   
                    
                 </div>
             </div>
         </div>
     }
          
      
    </Layout>
  );
};

export default ProductInfo;
