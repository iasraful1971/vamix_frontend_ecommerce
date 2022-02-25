import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import firebaseDb from "../firebase/fireConfig";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAMount] = useState(0);
  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_TO_CART", payload: product });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setIsloading] = useState(false);
  const [name, setName] = useState("");
  const [location, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [zip, setZip] = useState("");

  const placeOrder =async () => {
    const address = {
      name,
      location,
      zip,
      number,
    };
    
    const orderInfoAddress ={
      cartItems,
      address,
      email : JSON.parse(localStorage.getItem("currentUser")).user.email,
      userId : JSON.parse(localStorage.getItem("currentUser")).user.uid,
      
    }


    try {
      setIsloading(true)
      const result  =await addDoc(collection(firebaseDb, "orders") , orderInfoAddress)
      toast.success("Order submitted successfully")
      
      setIsloading(false)
      handleClose();
    } catch (error) {
      setIsloading(false)
      toast.error("there was something error")
    }
  };

   const {user} =JSON.parse(localStorage.getItem('currentUser'))


  
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItems) => {
      temp = temp + cartItems.price;
    });
    setTotalAMount(temp);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const emailok = JSON.parse(localStorage.getItem("currentUser"));

    return (
      <Layout loading={loading}>
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
            <h2 className="total-amount">Total Amount is = $ {totalAmount}</h2>
          </div>
          <div className="d-flex justify-content-end">
            <button className="order" onClick={handleShow}>
                Check out
            </button>
          </div>
        </div>

        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add your address and place Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="log-in-form">
              <h2>Your Information</h2>
              <hr />
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={JSON.parse(localStorage.getItem("currentUser")).user.email.substring(0,user.email.length-10)}
                
              />
              <input
                type="email"
                placeholder="Name"
                className="form-control"
                value={JSON.parse(localStorage.getItem("currentUser")).user.email}
             
              />

              <input
                type="address"
                placeholder="address"
                className="form-control"
                value={location}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Phone"
                className="form-control"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Zip"
                className="form-control"
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value);
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Exit
            </Button>
       <Button  variant="primary" onClick={placeOrder}>
              Order Now
            </Button>
            
          </Modal.Footer>
        </Modal>
      
      </Layout>
    );
  
};

export default Cart;
