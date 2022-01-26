import React , { useState, useEffect } from 'react'
import Data from './Data'
import './Trend.css'



function Trend() {

    const [ getdata, setGetData] = useState(Data)

    return (
        <>
        {
            getdata.map((user, key) => (
                 <div className="Trend-list" key={user.id}>
                    <p >{user.number}</p>
                    <div className="Trend-image">
                        <img src={user.image} alt={user.pastor}/>
                    <h1>{user.describe}</h1>
                    </div>
                    <div className="Trend-user">
                         <p>{user.pastor}</p>
                    </div>
                    <div className="icon">
                         <i class='bx bx-bar-chart'></i>
                    </div>
                </div>
            ))
        }
            
        </>
    )
}

export default Trend
