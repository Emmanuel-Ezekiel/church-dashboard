import React from 'react'
import Image from '../../assets/images/Rectangle 330.png'
import './Event.css'

function Event() {
    return (
        <>
        <div className="event">
            <div className="event-all">
                    <img src={Image} alt="event" />
                <div className="event_details">
                    <h1>Marriage Serminar</h1>
                    <span>Together Forever</span>
                    <p>12th December, 2021</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Event
