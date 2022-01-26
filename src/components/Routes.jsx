import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Sermon from '../pages/Sermon'
import Bulletin from '../pages/Bulletin'
import Podcast from '../pages/Podcast'
import Giving from '../pages/Giving'
import Event from '../pages/Event'
import NewMember from '../pages/NewMember'
import HomeCell from '../pages/HomeCell'
import TeenageChurch from '../pages/TeenageChurch'
import ChildrenChurch from '../pages/ChildrenChurch'
import AboutUs from '../pages/AboutUs'
import JoinUsLive from '../pages/JoinUsLive'
import Announcement from '../pages/Announcement'
import PrayerRequest from '../pages/PrayerRequest'
import FindMyChurch from '../pages/FindMyChurch'
import DiscoverFaith from '../pages/DiscoverFaith'
import ServiceCountDown from '../pages/ServiceCountDown'



const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/sermon' component={Sermon}/>
            <Route path='/bulletin' component={Bulletin}/>
            <Route path='/podcast' component={Podcast}/>
            <Route path='/giving' component={Giving}/>
            <Route path='/event' component={Event}/>
            <Route path='/new-member' component={NewMember}/>
            <Route path='/home-cell' component={HomeCell}/>
            <Route path='/teenage-church' component={TeenageChurch}/>
            <Route path='/children-church' component={ChildrenChurch}/>
            <Route path='/about-us' component={AboutUs}/>
            <Route path='/join-us-live' component={JoinUsLive}/>
            <Route path='/announcement' component={Announcement}/>
            <Route path='/prayer-request' component={PrayerRequest}/>
            <Route path='/find-my-church' component={FindMyChurch}/>
            <Route path='/discover-your-faith' component={DiscoverFaith}/>
            <Route path='/service-countdown' component={ServiceCountDown}/>
        </Switch>
    )
}

export default Routes
