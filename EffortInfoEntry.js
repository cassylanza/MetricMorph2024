import React, { Component, useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, TextInput, Alert, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import EffortResults from './EffortResults.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons/faPersonSwimming'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'

const EffortInfoEntry = () => {

  // states for input fields
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [race, setRace] = useState('');
  const [effortPercent, setEffortPercent] = useState('');
  const [showResults, setShowResults] = useState(false);

  // navigation constants
  const goToSwimMenu = () => {
    Actions.swimmenu1()
  }
  const goToTrackMenu = () => {
    Actions.trackmenu1()
  }
  const calculateEffort = () => {
      setShowResults(true);
  };

return (
  // display info entry fields and task bar
  <View>
    <ScrollView>
      <View style = {styles.container}>
        <TextInput style = {styles.input}
          placeholder = " Current Race Distance (in meters)"
          placeholderTextColor = "grey"
          keyboardType='number-pad'
          onChangeText = {newRace => setRace(newRace)}
          maxLength = {15}/>

          <View style = {styles.timeInputContainer}>
            <TextInput style = {styles.input}
              placeholder = "  hh  "
              keyboardType = 'number-pad'
              placeholderTextColor = "grey"
              onChangeText = {newHours => setHours(newHours)}
              maxLength = {2}/>

            <Text> : </Text>

            <TextInput style = {styles.input}
              placeholder = "  mm  "
              keyboardType = 'number-pad'
              placeholderTextColor = "grey"
              onChangeText = {newMinutes => setMinutes(newMinutes)}
              maxLength = {2}/>

            <Text> : </Text>

            <TextInput style = {styles.input}
              placeholder = "  ss  "
              keyboardType = 'decimal-pad'
              placeholderTextColor = "grey"
              onChangeText = {newSeconds => setSeconds(newSeconds)}
              maxLength = {5}/>

          </View>


        <TextInput style = {styles.input}
          placeholder = " Effort percentage (1-120%)"
          placeholderTextColor = "grey"
          keyboardType='number-pad'
          onChangeText = {newEffortPercent => setEffortPercent(newEffortPercent)}
          maxLength = {15}/>

        <TouchableOpacity
          style = {styles.convertButton}
          onPress = {calculateEffort}
          >
          <Text style = {styles.convertButtonText}> Calculate </Text>
        </TouchableOpacity>

        {/* reveal result(s) and table upon pressing convert button*/}
        {showResults && (
          <View>
            <EffortResults
              race={race}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              effortPercent={effortPercent}
            />
          </View>
        )}

      </View>
    </ScrollView>

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
    <TouchableOpacity onPress = {goToTrackMenu} style = {{alignItems: 'center', marginBottom: '2%'}}>
      <FontAwesomeIcon
        icon={faPersonRunning}
        size={30}
        color='#00b3b3'
        style = {{marginBottom: 2}}
      />
      <Text style = {{color: '#00b3b3'}}>Track</Text>
    </TouchableOpacity>
    </View>

  </View>
)
}
export default EffortInfoEntry

const styles = StyleSheet.create({
container: {
  paddingTop: 23,
  marginBottom: '100%'
},
input: {
  margin: '10%',
  height: 50,
  borderBottomWidth: 1,
  borderBottomColor: 'grey'
},
convertButton: {
  backgroundColor: '#00b3b3',
  padding: 10,
  margin: 15,
  height: 40,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'center'
},
convertButtonText:{
  color: 'white',
  textAlign: 'center'
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
 borderWidth: 1,
 padding: 37,
 fontSize: 20,
 borderColor: 'black',
 backgroundColor: 'white'
},
textTaskBarTrack: {
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
},
timeInputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10%',
  height: 50
}
})
