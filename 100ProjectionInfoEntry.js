import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'

const HundredProjectionInforEntry = () => {
  state = {
    unconvertedTime: ''
  }

  handleUnconvertedTime = (text) => {
    this.setState({ unconvertedTime: text })
  }

  hundredprojection = (unconvertedTime) => {
    //add calculations
  }

  const goToSwimMenu = () => {
    Actions.swimmenu1()
  }

  const goToTrackMenu = () => {
    Actions.trackmenu1()
  }

  const goToHundredProjectionResults = () => {
    Actions.hundredprojectionresults()
  }

return (
  <View style = {styles.container}>
    <TextInput style = {styles.input}
      placeholder = " Average of 6x100s"
      onChangeText = {this.unconvertedTime}/>

    <TouchableOpacity
      style = {styles.convertButton}
      onPress = {goToHundredProjectionResults}
      >
      <Text style = {styles.convertButtonText}> Calculate </Text>
    </TouchableOpacity>

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
export default EffortInfoEntry

const styles = StyleSheet.create({
container: {
  paddingTop: 23
},
input: {
  margin: 20,
  height: 50,
  borderColor: 'black',
  borderWidth: 1
},
convertButton: {
  backgroundColor: 'green',
  padding: 10,
  margin: 15,
  height: 40,
  //width: 100,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'center'
},
convertButtonText:{
  color: 'white',
  textAlign: 'center'
},
containerTaskBar: {
 flexDirection: 'row',
 justifyContent: 'space-between',
 alignItems: 'center',
 height: 600
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
