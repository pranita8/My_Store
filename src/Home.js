import React from 'react';
import "./Home.css";
import  { useState } from "react";
import Checkout from "./Checkout";
import Product from './Product';

function Home() {
    const [drawer, setDrawer] = useState(false);
    return (
        <div className="home">
            <div className="home__container">
               <header>
  <div className="row large">
     <div  className="imagegroup" >
       <img src="https://alloforfait.fr/wp-content/uploads/2020/04/Store-Prime-Video.jpg" alt=""/>
       <img src="https://filmdaily.co/wp-content/uploads/2021/06/amazon-lede.jpg" alt=""/>
       <img src="https://fandomwire.com/wp-content/uploads/2020/08/2.jpg" alt=""/>
       {/* <img src="https://www.industryfreak.com/wp-content/uploads/2019/01/Amazon-Prime-Movies.jpg" alt=""/>
       <img src="https://i.gadgets360cdn.com/large/amazon-best-movies-feb-2020_1589535715687.jpg" alt=""/>
     */}
     </div>
  </div>

  <div  className="row small">
    <div  className="imagegroup" >
       <img src="https://www.techprevue.com/wp-content/uploads/2017/06/electronic-devices-1.jpg" alt=""/>
       <img src="https://media.gettyimages.com/vectors/sale-shopping-vector-id466020011" alt=""/>
       <img src="https://nectarbodyandbath.com/wp-content/uploads/2019/10/natural-purple-shampoo-bar-blondini.jpg" alt=""/>
       <img src="https://www.manilaonsale.com/wp-content/uploads/2015/07/colehaan-handbag-sale-july-2015-poster.jpg" alt=""/>
       <img src="https://guides.overstock.com/wp-content/uploads/2017/05/Best-Womens-Watches-for-Daily-Wear-PIN.jpg" alt=""/>
       <img src="https://i.pinimg.com/originals/0d/0a/40/0d0a40cad08ffe7efce398194413b3d5.jpg" alt=""/>
    </div>
  </div>
</header>
                <div classname="home__row">
                    <div className="ho">
                    <Product
                         id="12849"
                        title="Samsung Galaxy M32 5G (Sky Blue, 8GB RAM, 128GB Storage) | Dimensity 720 Processor | 5000mAh Battery| Knox Security"
                        price={22999}
                        image="https://m.media-amazon.com/images/I/41KgKngmaYL._SX300_SY300_QL70_FMwebp_.jpg"
                        rating={4}
                    />
                    
                    
                    <Product
                        id="3534345" 
                        title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)"
                        price={3999}
                        image="https://m.media-amazon.com/images/I/61MbLLagiVL._SX425_.jpg"
                        rating={4}
                    />
                </div>
                </div>

                <div classname="home__row">
                    <div className='ho'>
                    <Product 
                        id="24242"
                        title="boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD Display with 550 NITS & 70% Color Gamut, 150+ Watch Faces, Multi-Sport Modes,HR,SpO2, IP68(Active Black)"
                        price={2499}
                        image="https://m.media-amazon.com/images/I/614AipEWSIL._SY355_.jpg"
                        rating={4}
                    />

                    <Product 
                         id="23553647"
                        title="Red Chief Leather Slipper for Men's (RC0216_P)"
                        price={2155}
                        image="https://m.media-amazon.com/images/I/61PuWDmhzlL._UY500_.jpg"
                        rating={4}
                    />
                    
                    <Product
                        id="359473"
                        title="RIVANA Women's Banarasi Silk Saree With Blouse Piece (Patola_Ckokda_1 (3)_Multicolored)"
                        price={1299}
                        image="https://m.media-amazon.com/images/I/81HV6B-QzPL._UL1500_.jpg"
                        rating={4}
                    />
                </div>
                </div>
                <div classname="home__row">
                <div className="ho">  
                <Product
                         id="4839274"
                        title="Mi 108 cm (43 Inches) 4K Ultra HD Android Smart LED TV 4X | L43M4-4AIN (Black)"
                        price={28499}
                        image="https://m.media-amazon.com/images/I/612oGaxp3DS._SX355_.jpg"
                        rating={5}
                    /> 
                </div>
              </div>
            </div>
        </div>
        
    )
}

export default Home;