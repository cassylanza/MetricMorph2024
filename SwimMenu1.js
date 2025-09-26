import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

const SwimMenu1 = () => {

  const goToTrackMenu = () => {
    Actions.trackmenu1()
  }

  const goToSwimMenu = () => {
    Actions.swimmenu1()
  };

  const goToConvertMeterYardEntry = () => {
    Actions.convmeteryardinfoentry()
  }

  const goToHundredProjectionInfoEntry = () => {
    Actions.hundredinfoentry()
  }

  const goToRaceProjectionInfoEntry = () => {
    Actions.raceinfoentry()
  }

  return (
    <View style = {styles.containerScreen}>
      <Image style = {styles.logo} source={require('./MetricMorphLogo.png')} />
      <View style = {styles.swimMenuButton}>
        <TouchableOpacity onPress = {goToConvertMeterYardEntry}>

         <Text style = {styles.textSwimMenu}>Meter/yard conversion</Text>

        </TouchableOpacity>
</View>
<View style = {styles.swimMenuButton}>
        <TouchableOpacity onPress = {goToHundredProjectionInfoEntry}>
         <Text style = {styles.textSwimMenu}>6x100 Projection</Text>
        </TouchableOpacity>
</View>
<View style = {styles.swimMenuButton}>
        <TouchableOpacity onPress = {goToRaceProjectionInfoEntry}>

         <Text style = {styles.textSwimMenu}>Race Projection</Text>

        </TouchableOpacity>
        </View>

       <View style = {styles.containerTaskBar}>
          <TouchableOpacity onPress = {goToSwimMenu}>
            <Text style = {styles.textTaskBarSwim}> Swim Menu </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {goToTrackMenu}>
            <Text style = {styles.textTaskBar}> Track Menu </Text>
          </TouchableOpacity>
        </View>
      </View>

  )
}
export default SwimMenu1

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

   swimMenuButton: {
  padding: 10,
  margin: 20,
  width: 280,
  height: 60,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'center',
  backgroundColor: 'green'

   },

  containerTaskBar: {
     flex: 1,
     flexDirection: 'row',
     position: 'absolute',
     alignItems: 'center',
     height: '12%',
     width: '100%',
     bottom: 0,
     left: 0,
     borderWidth: 1,
     backgroundColor: 'white'
  },

   textTaskBar: {
     width: 188,
     height: 100,
     textAlign: 'center',
     padding: 37,
     fontSize: 20,


   },
   textTaskBarSwim: {
     width: 188,
     height: 100,
     textAlign: 'center',
     padding: 37,
     fontSize: 20,
     fontWeight: 'bold',
     color: 'blue'
   },
   textSwimMenu: {
      textAlign: 'center',
      fontSize: 20,
      color: 'white'
   }
})
