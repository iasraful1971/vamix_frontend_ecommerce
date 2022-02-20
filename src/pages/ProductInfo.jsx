import { Rating } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import firebaseDb from "../firebase/fireConfig";


const ProductInfo = () => {
  const [product, setProduct] = useState();
    const params = useParams()
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
      console.log(error);
    }
  }

  return (
    <Layout>
      
     {
         product && 
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
                     <button className="add-to-cart-details">Add to cart</button>
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
