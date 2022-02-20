import { Rating } from "@mui/material";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import firebaseDb from "../firebase/fireConfig";
const Home = () => {
  const [products, setProducts] = useState([]);
  const history = useNavigate();
  useEffect(() => {
      getData();
  },[])

  function addProducts() {
    products.map(async (product) => {
      try {
        await addDoc(collection(firebaseDb, "products"), product);
      } catch (error) {
        console.log(error);
      }
    });
  }

  async function getData() {
    try {
      const products = await getDocs(collection(firebaseDb, "products"));

      const ProductsArray = [];
      products.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        ProductsArray.push(obj);
      });
      setProducts(ProductsArray);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <Banner />
      <div className="container">
          <div className="row-product">
              {
                  products.map((product) => {
                    return  <div className="single-product">
                            <div className="product-area">
                            <div className="flex-img">
                            <img className="img-fluid" src={product.img} alt="" />
                            <Rating size="small" className="rating" name="read-only" value={product.star} readOnly />
                            </div>
                            <h6>{product.name.slice(0, 60)}</h6>
                            <div className="flex-img">
                                <span className="category">{product.category}</span>
                                <b className="price"> $ {product.price}</b>
                            </div>
                            <div className="sale">stock {product.stock}</div>
                            <div className="button-group">
                                <button className="add-to-cart">add to cart</button>

                                <button onClick={() => {
                                  history(`/product_info/${product.id}`)
                                }} className="details">details <IoMdArrowDropright/></button>

                                
                            </div>
                        </div>
                    </div>
                  })
              }
          </div>
      </div>
    </Layout>
  );
};

export default Home;
