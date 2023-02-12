import React from 'react'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Navbar/navbar'
import './recipe.css'

export default function Recipe() {
    return (
        <div className="body">
            <Navbar />
            <h1 className='header'>Try Out New Recipes!</h1>
            <div className="recipe-window">
                <div className="recipe">
                    <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/pav-bhaji-1-280x280.jpg" className='box' alt="" />
                    <div className="top box">
                        <div className="title">
                            Pav Bhaji Recipe (Super Delicious Mumbai Pav Bhaji)
                        </div>
                        <div className="time">
                            Expected Time:40min
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2011/10/grilled-paneer-tikka-280x280.jpg" className='box' alt="" />
                    <div className="top box">
                        <div className="title">
                            Paneer Tikka Recipe
                        </div>
                        <div className="time">
                            Expected Time:2HRS 30MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2010/07/pani-puri-recipe-golgappa-recipe-280x280.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Puri For Pani Puri | Suji Ke Golgappe
                        </div>
                        <div className="time">
                            Expected Time:1HRS 15MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2022/10/nankhatai-recipe-1-280x280.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Nankhatai Recipe | Nankhatai Biscuit
                        </div>
                        <div className="time">
                            Expected Time:40MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/thepla-280x280.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Thepla | Gujarati Methi Thepla Recipe
                        </div>
                        <div className="time">
                            Expected Time:50MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2015/10/spring-rolls-recipe-280x280.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Spring Rolls | Crispy Veg Spring Roll Recipe
                        </div>
                        <div className="time">
                            Expected Time:45MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/khaman-recipe-280x280.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Khaman Dhokla Recipe | Khaman Recipe
                        </div>
                        <div className="time">
                            Expected Time:20MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/dahi-vada-280x280.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Dahi Vada Recipe (Authentic North Indian Recipe)
                        </div>
                        <div className="time">
                            Expected Time:8HRS 45MINS
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
