import React, { Component } from 'react'
import {useState} from 'react'
import { TouchableOpacity, Text, View, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SplitsResults from './SplitsResults.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons/faPersonSwimming'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'

const SplitsInfoEntry = () => {

  // states for input fields
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [race, setRace] = useState('');
  const [desiredSplitVar, setDesiredSplitVar] = useState('');
  const [showResults, setShowResults] = useState(false);

  // navigation constants
  const goToSwimMenu = () => {
    Actions.swimmenu1()
  }
  const goToTrackMenu = () => {
    Actions.trackmenu1()
  }
  const calculateSplits = () => {
    setShowResults(true);
  }


return (
  // display info entry fields and task bar
  <View style = {{position: 'absolute', height: '100%', width: '100%', backgroundColor: 'white'}}>
    <ScrollView style = {{backgroundColor: 'white', height: '100%', marginBottom: '23%'}}>
    <View style = {styles.container}>

    <View style = {styles.timeInputContainer}>
      <TextInput style = {styles.inputTime}
        placeholder = "  hh  "
        keyboardType = 'number-pad'
        placeholderTextColor = "grey"
        onChangeText = {newHours => setHours(newHours)}
        maxLength = {2}/>

      <Text style = {styles.inputTime}> : </Text>

      <TextInput style = {styles.inputTime}
        placeholder = "  mm  "
        keyboardType = 'number-pad'
        placeholderTextColor = "grey"
        onChangeText = {newMinutes => setMinutes(newMinutes)}
        maxLength = {2}/>

      <Text style = {styles.inputTime}> : </Text>

      <TextInput style = {styles.inputTime}
        placeholder = "  ss  "
        keyboardType = 'number-pad'
        placeholderTextColor = "grey"
        onChangeText = {newSeconds => setSeconds(newSeconds)}
        maxLength = {5}/>

    </View>

      <TextInput style = {styles.input}
        placeholder = " Current Race Distance (in meters)"
        placeholderTextColor = "grey"
        keyboardType = 'number-pad'
        onChangeText = {newRace => setRace(newRace)}/>

      <TextInput style = {styles.input}
        placeholder = " Desired Split Distance (in meters)"
        placeholderTextColor = "grey"
        keyboardType = 'number-pad'
        onChangeText = {newDesSplit => setDesiredSplitVar(newDesSplit)}/>

      <TouchableOpacity
        style = {styles.convertButton}
        onPress = {calculateSplits}>
        <Text style = {styles.convertButtonText}> Calculate </Text>
      </TouchableOpacity>


    </View>

    {/* reveal result(s) and table upon pressing convert button*/}
    {showResults && (
      <View>
        <SplitsResults
          race={race}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          desiredSplitVar={desiredSplitVar}
        />
      </View>
    )}

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
export default SplitsInfoEntry


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontSize: 16,
    marginBottom: '10%'
  },
  convertButton: {
    backgroundColor: '#00b3b3',
    margin: '5%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'center'
  },
  convertButtonText:{
    color: 'white',
    padding: '5%',
    textAlign: 'center',
    fontSize: 20
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
    width: '70%',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    marginTop: '10%'
  },
  inputTime: {
    fontSize: 16
  }
})
