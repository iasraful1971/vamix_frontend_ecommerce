import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import firebaseDb from "../firebase/fireConfig";

const Orders = () => {
  const [Orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = JSON.parse(localStorage.getItem("currentUser")).user.uid;
  
  async function getData() {
    try {
      setLoading(true);
      const result = await getDocs(collection(firebaseDb, "orders"));
      
      const OrdersArray = [];
      result.forEach((doc) => {
        OrdersArray.push(doc.data());
        setLoading(false);
      });
      
      setOrders(OrdersArray);
      
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
 
  

  return (
    <Layout loading={loading}>
      {Orders.filter(obj => obj.userId === userId).map((order) => {
        return <table className="container table my-5 table-dark  table-hover">
          <thead>
            {
              order.length
            }
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
             
            </tr>
          </thead>
          <tbody>
            {order.cartItems.map((item) => {
              return (
                <tr className="my-5">
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
                </tr>
              );
            })}
          </tbody>
        </table>;
      })}
    </Layout>
  );
};
export default Orders;
