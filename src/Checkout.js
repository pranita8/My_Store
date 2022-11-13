import React, { Fragment } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
function Checkout() {
  const [{ basket,user}, dispatch] = useStateValue();

  return (
    <Fragment>
    <div className="checkout">
    <div className="checkout__left">
         <header>
  <div className="row large">
     <div  className="imagegroup" >
     <img src=" https://cdna.artstation.com/p/assets/images/images/019/056/448/large/wen-jie-wang-dm2p-18b-wangwenjie-z-06-01.jpg?1561827588" alt=""/>
     <img src=" https://2.bp.blogspot.com/-TAAiiqocoec/TlvCW6zvnKI/AAAAAAAAA3c/HMulJdRO8t4/s1600/Most-Amazing-Print-Advertisements-_outboxmag_18.jpg"alt=""/>
     <img src=" https://naotw-pd.s3.amazonaws.com/styles/aotw_detail_ir/s3/images/foodbank-posters-22x28.c.jpg?itok=qRIB-cXk"alt=""/>
       <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/17e5e777836739.5c932e0136086.jpg" alt=""/>
       <img src="https://advertisingrow.com/wp-content/uploads/2019/08/Creative-Advertising-Clever-Pepsi-Advertising-See-a-collection.jpg" alt=""/>
       <img src="https://th.bing.com/th/id/OIP.kvwyKncrn8Ms5fVV5RUo6gDJE1?pid=ImgDet&rs=1" alt=""/>
      
     </div>
  </div>
  </header>

         <div>
          
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map(item=>(
          <CheckoutProduct
          id={item.id}
          price={item.price}
          rating={item.rating}
          image={item.image}
          title={item.title}
          />
          ))}
          {/*Basketitem*/ }
           {/*Basketitem*/ }
            {/*Basketitem*/ }
             {/*Basketitem*/ }
              {/*Basketitem*/ }
         </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
           
        </div>
    </div>
    </Fragment>
  );
}
const FinalProducts = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Fragment>
      {basket.map((item) => (
        <CheckoutProduct
          id={item.id}
          price={item.price}
          rating={item.rating}
          image={item.image}
          title={item.title}
        />
      ))}
    </Fragment>
  );
};

export default Checkout;