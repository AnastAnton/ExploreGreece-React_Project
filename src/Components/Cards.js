import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import image1 from '../images/image-3.jpg'
import image2 from '../images/image-1.jpg'
import image3 from '../images/image-5.jpg'
import image4 from '../images/image-7.jpg'
import image5 from '../images/image-8.jpg'


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image2}
                            text='Swim side by side to the famous Shipwreck in Zakynthos'
                            label='Life Experience'
                            path='/services'
                        />
                        <CardItem
                            src={image3}
                            text='Watch the most beautiful sunset in Santorini'
                            label='Romance'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={image4}
                            text='Visit Parthenon, a former temple on the Athenian Acropolis'
                            label='Culture'
                            path='/services'
                        />
                        <CardItem
                            src={image1}
                            text='Relax at the Sacred Place of Meteora'
                            label='Holy Spirit'
                            path='/services'
                        />
                        <CardItem
                            src={image5}
                            text='Travel to traditional places like Platamon castle'
                            label='Tradition'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
