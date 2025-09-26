import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'


const ConversionResults = () => {
  state = {
    events: [
      {
        id: 0,
        event: '50FR',
        time: 'time',
      },
      {
        id: 1,
        event: '100FR',
        time: 'time'
      },
      {
        id: 2,
        event: '200FR',
        time: 'time',
      },
      {
        id: 3,
        event: '500FR',
        time: 'time',
      },
      {
        id: 4,
        event: '1000FR',
        time: 'time',
      },
      {
        id: 5,
        event: '1650FR',
        time: 'time',
      },

    ]
  }

  const goToTrackMenu = () => {
    Actions.trackmenu1()
  }

  const goToSwimMenu = () => {
    Actions.swimmenu1()
  }

return (
  <View>
    <Text style = {styles.mainResult}> MM:SS:TH </Text>
    <Text style = {{textAlign: 'center', marginBottom: 30}}> For Distance </Text>
    <ScrollView>
    {
      this.state.events.map((item, index) => (
        <View
          key = {item.id}
          style = {styles.container}>
          <Text style = {styles.text}>
            {item.event}
          </Text>
          <Text style = {styles.text}>
            {item.time}
          </Text>
        </View>
      ))
    }
    </ScrollView>
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
export default ConversionResults

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
     marginTop: 60,
     marginBottom: 10,
     marginLeft: 60
   },
   containerTaskBar: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     height: 20,
     position: 'fixed',
     marginTop: 215
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
