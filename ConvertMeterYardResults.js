import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'


const ConvertMeterYardResults = () => {

  const goToTrackMenu = () => {
    Actions.trackmenu1()
  }

  const goToSwimMenu = () => {
    Actions.swimmenu1()
  }

return (
  <View>
    <Text style = {styles.mainResult}> MM:SS:TH </Text>


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
export default ConvertMeterYardResults

const styles = StyleSheet.create ({
  container: {
      padding: 10,
      marginTop: 3,
      //backgroundColor: '#d9f9b1',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderWidth: 1
   },
   text: {
      color: '#4f603c'
   },
   mainResult: {
     width: 250,
     height: 75,
     textAlign: 'center',
     borderWidth: 1,
     padding: 18,
     fontSize: 30,
     borderColor: 'black',
     backgroundColor: 'white',
     marginTop: 200,
     marginBottom: 385,
     marginLeft: 60
   },
   containerTaskBar: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     height: 20
   },
   textTaskBar: {
     width: 188,
     height: 100,
     textAlign: 'center',
     borderWidth: 1,
     padding: 37,
     fontSize: 20,
     borderColor: 'black',
     backgroundColor: 'white'
   },
   textTaskBarSwim: {
     width: 188,
     height: 100,
     textAlign: 'center',
     borderWidth: 1,
     padding: 37,
     fontSize: 20,
     borderColor: 'black',
     backgroundColor: 'white',
     fontWeight: 'bold',
     color: 'blue'
   }
})
