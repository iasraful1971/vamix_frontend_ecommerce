import { Rating } from "@mui/material";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Spinner from "../extra/spinners/Spinner";
import firebaseDb from "../firebase/fireConfig";
import cam from "../image/camera.png";
import laptop from "../image/laptop.jpg";
import mob from "../image/phone.png";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const history = useNavigate();
  useEffect(() => {
    getData();
  }, []);

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
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <Banner />
      <div className="container filtering mb-5 ">
        <h4 className="text-bold">Shop By Category</h4>
        <div className="row d-flex justify-content-between align-items-center g-5">
          <div className="col-md-3">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="search items"
              className="form-control"
            />
          </div>
          <div
          onClick={() => setFilterType("laptop")}
            value="laptop"
            title="laptop"
            data-toggle="tooltip"
            data-placement="top"
            className="col-md-3 d-flex justify-content-between filter-item "
          >
            <img className="img-fluid" src={laptop} alt="" />
            <h5>CATCH BIG DEALS WITH LAPTOP</h5>
          </div>
          <div
           onClick={() => setFilterType("android")}
            value="android"
            title="Phone"
            className="col-md-3 d-flex justify-content-between filter-item "
          >
            <img className="img-fluid" src={mob} alt="" />
            <h5>CATCH BIG DEALS WITH PHONE</h5>
          </div>
          <div
           onClick={() => setFilterType("camera")}
            value="camera"
            title="camera"
            className="col-md-3 d-flex justify-content-between filter-item "
          >
            <img className="img-fluid" src={cam} alt="" />
            <h5>CATCH BIG DEALS WITH CAMERA</h5>
          </div>
        </div>
      </div>
      {products.length === 0 ? (
        <Spinner />
      ) : (
        <div className="container mb-4">
          <h5 className="mb-3 text-bold" id="shopId">Total products 20</h5>
          <div className="row-product">
            {products
              .slice(0, 20)
              .filter((obj) => obj.name.toLowerCase().includes(search))
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .map((product) => {
                return (
                  <div className="single-product">
                    <div className="product-area">
                      <div className="flex-img">
                        <img className="img-fluid" src={product.img} alt="" />
                        <Rating
                          size="small"
                          className="rating"
                          name="read-only"
                          value={product.star}
                          readOnly
                        />
                      </div>
                      <h6>{product.name.slice(0, 60)}</h6>
                      <div className="flex-img">
                        <span className="category">{product.category}</span>
                        <b className="price"> $ {product.price}</b>
                      </div>
                      <div className="sale">stock {product.stock}</div>
                      <div className="button-group">
                        <button
                          className="add-to-cart"
                          onClick={() => addToCart(product)}
                        >
                          add to cart
                        </button>

                        <button
                          onClick={() => {
                            history(`/product_info/${product.id}`);
                          }}
                          className="details"
                        >
                          details <IoMdArrowDropright />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
