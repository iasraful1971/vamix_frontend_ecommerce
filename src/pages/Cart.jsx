import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import Spinner from "../extra/spinners/Spinner";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAMount] =useState(0)
  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_TO_CART", payload: product });
  };

  useEffect(() => {
      let temp = 0
      cartItems.forEach((cartItems) => {
          temp=temp +cartItems.price

      })
      setTotalAMount(temp)
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  if(cartItems.length === 0){
    return <Spinner/>
  }else{
    return (
      <Layout>
        <table className="container table my-5 table-striped  table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr>
                  <td>
                    <img
                      height="80"
                      width="80"
                      src={item.img}
                      alt=""
                      className="img-fluid"
                    />
                  </td>
                  <td>{item.name.slice(0, 80)}</td>
                  <td>{item.price}</td>
                  <td style={{ color: "red", fontSize: "20px" }}>
                    <MdDelete
                      tooltip="delete"
                      onClick={() => deleteFromCart(item)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="container mb-4">
            <div className="d-flex justify-content-end">
                  <h2 className="total-amount">
                      Total Amount is = $ {totalAmount}
                  </h2>
                 
            </div>
            <div className="d-flex justify-content-end">
                  <button className="order">
                      check out
                  </button>
                 
            </div>
        </div>
      </Layout>
    );
  }
  
};

export default Cart;
