import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import SwimMenu1 from './SwimMenu1.js'
import TrackMenu1 from './TrackMenu1.js'
import ConvertPerfInfoEntry from './ConvertPerfInfoEntry.js'
import SplitsInfoEntry from './SplitsInfoEntry.js'
import EffortInfoEntry from './EffortInfoEntry.js'
import ConvertMeterYardInfoEntry from './ConvertMeterYardInfoEntry.js'
import HundredProjectionInfoEntry from './HundredProjectionInfoEntry.js'
import RaceProjectionInfoEntry from './RaceProjectionInfoEntry.js'




const Routes = () => (
  <Router>
    <Scene key = "root">
      <Scene key = "swimmenu1" component = {SwimMenu1} title = "SWIM" initial = {true} />
      <Scene key = "trackmenu1" component = {TrackMenu1} title = "TRACK" />
      <Scene key = "convperfinfoentry" component = {ConvertPerfInfoEntry} title = "CONVERT RACE" />
      <Scene key = "splitsinfoentry" component = {SplitsInfoEntry} title = "SPLITS INFO ENTRY" />
      <Scene key = "effortinfoentry" component = {EffortInfoEntry} title = "EFFORT INFO ENTRY"/>
      <Scene key = "convmeteryardinfoentry" component = {ConvertMeterYardInfoEntry} title = "CONVERT METERS/YARDS" />
      <Scene key = "hundredinfoentry" component = {HundredProjectionInfoEntry} title = "6x100 PROJECTION" />
      <Scene key = "raceinfoentry" component = {RaceProjectionInfoEntry} title = "RACE BASED PROJECTION" />
    </Scene>
  </Router>
)

export default Routes
