import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { FontAwesomeIcon }  from '@fortawesome/react-native-fontawesome'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons/faPersonSwimming'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'


const TrackMenu1 = () => {

  // navigation constants
  const goToSwimMenu = () => {
    Actions.swimmenu1()
  }

  const goToConvertInfoEntry = () => {
    Actions.convperfinfoentry()
  }

  const goToSplitsInfoEntry = () => {
    Actions.splitsinfoentry()
  }

  const goToEffortInfoEntry = () => {
    Actions.effortinfoentry()
  }

  return (
    <View style = {styles.containerScreen}>
    {/*  <Image style = {styles.logo} source={require('./MetricMorphLogo.png')} /> */}
      <View style = {{padding: '50%'}}>
        <TouchableOpacity onPress = {goToConvertInfoEntry} style = {styles.trackMenuButton}>

           <Text style = {styles.textTrackMenu}>Convert Race</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress = {goToSplitsInfoEntry} style = {styles.trackMenuButton}>

           <Text style = {styles.textTrackMenu}>Splits</Text>

          </TouchableOpacity>

        <TouchableOpacity onPress = {goToEffortInfoEntry} style = {styles.trackMenuButton}>

           <Text style = {styles.textTrackMenu}>% Effort</Text>

          </TouchableOpacity>
      </View>

      <View style = {styles.containerTaskBar}>
        <TouchableOpacity onPress = {goToSwimMenu} style={{alignItems: 'center', marginBottom: '2%'}}>
            <FontAwesomeIcon
              icon={faPersonSwimming}
              size={30}
              color='gray'
              style = {{marginBottom: 2}}
            />
            <Text style = {{color: 'gray'}}>Swimming</Text>
        </TouchableOpacity>
        <View style = {{alignItems: 'center', marginBottom: '2%'}}>
          <FontAwesomeIcon
            icon={faPersonRunning}
            size={30}
            color='#00b3b3'
            style = {{marginBottom: 2}}
          />
          <Text style = {{color: '#00b3b3'}}>Track</Text>
        </View>
      </View>
    </View>
  )
}
export default TrackMenu1

const styles = StyleSheet.create ({
   containerScreen: {
     flexDirection: 'column',
     alignItems: 'center',
     backgroundColor: 'white',
     flex: 1
   },
   logo: {
      marginTop: 80,
      marginBottom: 75
   },
   trackMenuButton: {
     padding: 10,
     margin: 20,
     width: 280,
     height: 60,
     borderRadius: 25,
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection: 'center',
     backgroundColor: '#00b3b3'
   },
   textTrackMenu: {
      textAlign: 'center',
      fontSize: 20,
      color: 'white'
   },
   containerTrackMenu: {
     textAlign: 'center',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'white',
     height: 420,
     width: 300
   },
   containerTaskBar: {
     flex: 1,
     flexDirection: 'row',
     position: 'absolute',
     justifyContent: 'space-around',
     alignItems: 'center',
     height: '12%',
     width: '100%',
     bottom: 0,
     left: 0,
     borderWidth: 1,
     borderTopColor: 'lightgray',
     backgroundColor: 'white'
   },
   textTaskBar: {
     width: 188,
     height: 100,
     textAlign: 'center',
     padding: 37,
     fontSize: 20,
   }
})
