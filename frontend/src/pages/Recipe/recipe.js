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
                    <img src="https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/Whisk_PI_180919_Burritos_Port_023.jpg" className='box' alt="" />
                    <div className="top box">
                        <div className="title">
                            Beef and Rice Burritos
                        </div>
                        <div className="time">
                            Expected Time:30min
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/NEW_Korma_lamb%20shoulder_recipe.jpg" className='box' alt="" />
                    <div className="top box">
                        <div className="title">
                            Korma Marinated Lamb Shoulder with Spinach Lentils
                        </div>
                        <div className="time">
                            Expected Time:2HRS
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/MexicanChickenTacos.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Mexican Chicken Tacos
                        </div>
                        <div className="time">
                            Expected Time:25MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/EVERYDAY_DHAL%20WITH%20EGGS_AUST%20EGGS_PART%20TWO_AUG%202020_7491.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Egg and Lentil Dahl
                        </div>
                        <div className="time">
                            Expected Time:20MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/Pass20183890_0.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Beef Mince and Chickpea Curry
                        </div>
                        <div className="time">
                            Expected Time:25MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/Eggs20171399_0.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Mexican Filled Sweet Potatoes with Egg
                        </div>
                        <div className="time">
                            Expected Time:30MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/Food20177962_0_0.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Lentil and Black Bean Tacos
                        </div>
                        <div className="time">
                            Expected Time:20MIN
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/FamilyNachosTrayBake.jpg" className='box' alt="food" />
                    <div className="top box">
                        <div className="title">
                            Family Nachos Tray Bake
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
