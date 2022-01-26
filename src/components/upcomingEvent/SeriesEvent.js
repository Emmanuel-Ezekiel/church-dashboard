import React from 'react'
import image1 from '../../assets/images/Rectangle 331.png'
import image2 from '../../assets/images/Rectangle 332.png'
import image3 from '../../assets/images/Rectangle 333.png'
import image4 from '../../assets/images/Rectangle 334.png'
import './SeriesEvent.css'

function SeriesEvent() {
    return (
        <div>
            <div className="series_event">
                <img className="first-image" src={image1} alt="" />
                <img className="second-image" src={image2} alt="" />
                <img className="third-image" src={image3} alt="" />
                <img className="fourth-image" src={image4} alt="" />
            </div>
        </div>
    )
}

export default SeriesEvent
