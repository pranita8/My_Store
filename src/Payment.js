import React, { useState ,useEffect} from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const navigate = useNavigate()   //insted of history
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [name,setName]=useState("")

  useEffect(() => {//genrate special stripe secreat
    if(clientSecret)
      HandleChange();
  }, [clientSecret]);

  const HandleChange=async()=>{
  const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      if(payload.error){
        console.log("error :",payload.error)
      }
       else{
        const paymentIntent=payload.paymentIntent

        // Payment Intent =Payment Confirmation
        db
          .collection('users')
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
         .set({
             basket: basket,
             amount: paymentIntent.amount, 
            created: paymentIntent.created,
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        toast("Payment is Done!");
        navigate("/orders", { replace: true })
    }
  }

  const handleSubmit = async (e) => {
    //do all the fancy stripe stuff
    //with this code stripe know information to how mutch it charge about the element
    e.preventDefault();
    setProcessing(true);

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      }).then((res) => { 
        console.log("res :",res.data)
        return res.data;
      }).then((data) => {
        setClientSecret(data.clientSecret);
      });
    };

    getClientSecret();
  };

  const handleChange = (e) => {
    //listen for changes in the cardelement
    //and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }
  return (
    <div classname="payment">
      <div classname="payment__container">
        {/* Payment section-delivery address */}
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React</p>
            <p>Nagpur</p>
          </div>
        </div>

        {/* payment section-review items  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section-payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Methods</h3>
          </div>
          <div className="payment__details" >
            {/* Stripe magic goes here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeperator={true}
                  prefix="$"
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>error</div>}
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment;