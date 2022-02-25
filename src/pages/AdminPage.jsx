import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
import Layout from "../components/Layout";
import firebaseDb from "../firebase/fireConfig";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [Orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  
  async function getData() {
    try {
      setLoading(true);
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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function getOrderData() {
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
    getOrderData();
  }, []);
 

  
  return (
    <Layout loading={loading}>
      <div className="container">
        <Tabs
          
          defaultActiveKey="Products"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Products" title="Products">
            
            <h3>product lists</h3>

            <table className="container table my-5 table-striped  table-hover">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.slice(0, 20).map((item) => {
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
                      <td>{item.category}</td>
                      <td>
                        <MdEdit
                          style={{ color: "blue", fontSize: "20px" }}
                          title="delete"
                        />
                        <MdDelete
                          style={{ color: "red", fontSize: "20px" }}
                          title="delete"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Orders" title="Orders">
            <h2>orders</h2>

            {Orders.map((order) => {
        return <table className="container table my-5 table-dark  table-hover">
          <thead>
            {
              order.length
            }
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              
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
                  <td>${item.price}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>;
      })}


          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminPage;
