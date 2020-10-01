import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />
            <div className="home__row" >
                <Product
                    id="1"
                    title="Razer DeathAdder v2 Gaming Mouse: 20K DPI Optical Sensor - Fastest Gaming Mouse Switch"
                    price={69.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81A11OxpgXL._AC_SL1500_.jpg" />

                <Product
                    id="2"
                    title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting"
                    price={109.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg" />



            </div>
            <div className="home__row" >
                <Product
                    id="3"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics"
                    price={169.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg" />

                <Product
                    id="4"
                    title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox (STGX2000400)"
                    price={57.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg" />
                <Product
                    id="5"
                    title="Logitech MK270 Wireless Keyboard and Mouse Combo - Keyboard and Mouse Included"
                    price={34.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81YtozY6oRL._AC_SL1500_.jpg" />

            </div>
            <div className="home__row" >
                <Product
                    id="6"
                    title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                    price={294.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg" />
            </div>
            <div className="home__row" >
                <Product
                    id="7"
                    title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort"
                    price={278.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg" />
            </div>

        </div >
    )
}

export default Home
