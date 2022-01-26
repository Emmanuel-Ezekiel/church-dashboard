import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import ApexCharts from 'apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Trend from '../components/Trend/Trend'

import Instruction from '../components/Trend/Instruction'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import Image from '../assets/images/Rectangle 10.png'


import Event from '../components/upcomingEvent/Event'
import SeriesEvent from '../components/upcomingEvent/SeriesEvent'


// const {
//   REACT_APP_ADMIN_CURRENT_ENVIRONMENT,
//   REACT_APP_ADMIN_DEVELOPMENT_URL,
//   REACT_APP_ADMIN_PRODUCTION_URL,
// } = process.env;

// const BASE_URL =
//   REACT_APP_ADMIN_CURRENT_ENVIRONMENT= "DEVELOPMENT"
//     ? REACT_APP_ADMIN_DEVELOPMENT_URL
//     : REACT_APP_ADMIN_PRODUCTION_URL

const {
  ADMIN_CURRENT_ENVIRONMENT,
  ADMIN_DEVELOPMENT_URL,
  ADMIN_PRODUCTION_URL,
} = process.env;

const BASE_URL =
  ADMIN_CURRENT_ENVIRONMENT === "DEVELOPMENT"
    ? ADMIN_DEVELOPMENT_URL
    : ADMIN_PRODUCTION_URL;

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const Charts = {
    series: [{
              name: 'series1',
              data: [0, 2, 4, 6, 8,]
            }],

            options: {
             colors: [ 'rgba(82, 113, 255, 0.7)'],
              chart: {
                height: 220,
                type: 'area'
              },
              chart: {
      toolbar: {
        show: false,
      }},
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              xaxis: {
                categories: ["1", "2", "4", "6", "8"]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
          
 };
const Charts1 = {
    series: [{
              name: 'series1',
              data: [0, 2, 4, 6, 8,]
            }],

            options: {
             colors: [ 'rgba(255, 92, 92, 0.7)', 'rgba(255, 92, 92, 0.7)'],
              chart: {
                height: 220,
                type: 'area'
              },
              chart: {
      toolbar: {
        show: false,
      }},
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              xaxis: {
                categories: ["1", "2", "4", "6", "8"]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
          
 };
const Charts2 = {
    series: [{
              name: 'series1',
              data: [0, 2, 4, 6, 8,]
            }],

            options: {
             colors: [ 'rgba(53, 183, 41, 0.7)'],
              chart: {
                height: 220,
                type: 'area'
              },
              chart: {
      toolbar: {
        show: false,
      }},
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              xaxis: {
                categories: ["1", "2", "4", "6", "8"]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
          
 };


const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Home = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)


    return (
        <div>
            <h2 className="page-header">Home</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card-ins">
                        <div className="card__instruction">
                            <div className="instruction">
                                <img className="instruction-image" src={Image} alt="pastor-image" />
                                <i class='bx bx-play-circle'></i>
                            </div>
                            <Instruction />
                        </div>
                    </div>
                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card__header">
                                            <p className='card-head-name'>Upcoming Event</p>
                                        </div>
                                            <Event />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card__header">
                                            <p className='card-head-name'>Series of Upcoming Events</p>
                                        </div>
                                            <SeriesEvent/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card">
                                        <div className="card__headers">
                                            <h3>App Download</h3>
                                            <p>All time Download</p>
                                        </div>
                                        <div className="card__headers">
                                            <h3 className='card_number'>72,754</h3>
                                        </div>
                                         <Chart
                                          options={Charts.options}
                                          series={Charts.series}
                                          type='area'
                                          height={200}
                                          />
                                    </div>
                                </div>
                             <div className="col-4">
                                    <div className="card">
                                        <div className="card__headers">
                                            <h3>App User</h3>
                                            <p>All time Users</p>
                                        </div>
                                        <div className="card__headers">
                                            <h3 className='card_number'>72,754</h3>
                                        </div>
                                         <Chart
                                          options={Charts1.options}
                                          series={Charts.series}
                                          type='area'
                                          height={200}
                                          />
                                    </div>
                             </div>
                                <div className="col-4">
                                    <div className="card">
                                        <div className="card__headers">
                                            <h3>Web Views</h3>
                                            <p>All time Views</p>
                                        </div>
                                        <div className="card__headers">
                                            <h3 className='card_number'>72,754</h3>
                                        </div>
                                         <Chart
                                          options={Charts2.options}
                                          series={Charts.series}
                                          type='area'
                                          height={200}
                                          />
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="card">
                                        <div className="card__header">
                                            <h3>Trending</h3>
                                            <p className='card-trending'>past 30Days</p>
                                        </div>
                                        <Trend/>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="card">
                                        <div className="card__header5">
                                            <h3>Current Users on the Application</h3>
                                        </div>
                                        <div className="card__app">
                                            <div className="card__home">
                                                <div className="icon">
                                                <span><i class='bx bxs-home'></i></span>
                                                <h3>1006</h3>
                                                </div>
                                             <p>Set as Home</p>
                                            </div>
                                            <div className="card__star">
                                                <div className="icon-star">
                                                    <span><i class='bx bxs-star'></i></span>
                                                    <h3>200</h3>
                                                </div>
                                                
                                                <p>Set as Favourite</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            </div>
        </div>
    )
}

export default Home
