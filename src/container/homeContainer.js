import React from 'react';
import './home.css';
export default function Home (){
    return(
        <>
        <div className="container">
            <div className="up">
                    {/* <img src="../assets/logo YBIKE.png" className="logo"/> */}
                    <h1>
                        PalMall
                    </h1>
            </div>
            
            <div className="down">
                <div className="drop">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="/payment">Payment</a></li>
                    </ul>

                </div>
            </div>
        </div>
        <div className="container">
        <div className="p1">
            <div className="text1">New Products</div>
            <div className="brand">
                <img src="https://secure.img1-fg.wfcdn.com/im/06627301/resize-h800-w800%5Ecompr-r85/1602/160234345/Ableton+6+-+Light+Candle+Style+Chandelier.jpg" alt=""/>
                <img src="https://secure.img1-fg.wfcdn.com/im/97690887/resize-h800-w800%5Ecompr-r85/1287/128796717/Fotini+16+Piece+Dinnerware+Set%2C+Service+for+4.jpg" alt=""/>
                <img src="https://secure.img1-fg.wfcdn.com/im/58860990/resize-h800-w800%5Ecompr-r85/1616/161608913/Imani+81.5%27%27+Square+Arm+Sleeper.jpg" alt=""/>
            </div>
            <div className="text3">
                <li>Lightning Lamp</li>
                <li>Dinnerwet Set</li>
                <li>Square Arm Slipper</li>
            </div>
            <div className="about">
                <h2 className="text4">About Us<br/></h2>
                <p>
                    PalMall<br/>
                    is one of the online marketplace shopping centers in Indonesia.
                </p>
            </div>
            <h3 className="connect">Stay Connected With Us</h3>
            <div className="sosmed">
                <a href="https://twitter.com" target="_blank">
                     <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" className="media"/>
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img src="https://seeklogo.com/images/I/instagram-new-2016-logo-4773FE3F99-seeklogo.com.png" alt="" className="media"/>
                </a>
                <a href="https://facebook.com" target="_blank">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" alt="" className="media"/>
                </a>   
            </div>
           
        </div>        
    </div>
    <div class="container">
        <div class="footer">
            © 2021 PalMall
        </div>
    </div>
        </>
    )
}
