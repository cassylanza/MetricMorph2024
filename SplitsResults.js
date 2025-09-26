import React, { Component } from 'react'
import { useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux'

// formats the calculated time into hours, minutes, and seconds
// returns default of "hh:mm:ss" if input is invalid (i.e. not a number
// or outside of the specified range)
export function formatResult(timeInSeconds) {

  let maxNumber = 362399; // formats to 99:59:59

  if (isNaN(timeInSeconds) || typeof timeInSeconds !== 'number') {
      return "hh:mm:ss";
  }

  if(timeInSeconds < 0 || timeInSeconds > maxNumber) {
    return "hh:mm:ss";
  }

  let hours = parseInt((Number(timeInSeconds))/3600);
  let minutes = parseInt(Number(timeInSeconds)/60)-(hours*60);
  let seconds = (Number(timeInSeconds)%60);
  let formattedSplit = "--:--.--";


  if (timeInSeconds < 60) {
    formattedSplit = seconds.toFixed(2);
  }
  else if (timeInSeconds < 60*60) {

    if (seconds < 10) {
      formattedSplit = minutes + ":0" + seconds.toFixed(2);
    } else {
      formattedSplit = minutes + ":" + seconds.toFixed(2);
    }
  }
  else {

    formattedSplit = hours;

    if (minutes < 10) {
      formattedSplit = formattedSplit + ":0" + minutes;
    } else {
      formattedSplit = formattedSplit + ":" + minutes;
    }

    if (seconds < 10) {
      formattedSplit = formattedSplit + ":0" + seconds.toFixed(2);
    } else {
      formattedSplit = formattedSplit + ":" + seconds.toFixed(2);
    }
  }

  return formattedSplit;
}

export function timesRun(race, desiredSplitVar) {
  let numberTimesRun = "--";
  if (!isNaN(race) && !isNaN(desiredSplitVar)) {
    numberTimesRun = parseInt((Number(race)/Number(desiredSplitVar)));
  }
  return numberTimesRun;
}

// main display component
// calculates splits by dividing total race time by the ratio of
// the desired split to the given race distance
// returns main calculation with table underneath
const SplitsResults = ({ race, desiredSplitVar, hours, minutes, seconds}) => {

  let currentRaceTimeVar = Number(hours)*3600 + Number(minutes)*60 + Number(seconds);

  let mySplit = ((Number(desiredSplitVar)/Number(race))*(Number(currentRaceTimeVar)));

  const events = [
    {
      id: 0,
      event: '400m',
      time: formatResult((Number(400)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 1,
      event: '600m',
      time: formatResult((Number(600)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 2,
      event: '800m',
      time: formatResult((Number(800)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 3,
      event: '1000m',
      time: formatResult((Number(1000)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 4,
      event: '1200m',
      time: formatResult((Number(1200)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 5,
      event: '1600m',
      time: formatResult((Number(1600)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 6,
      event: '1609m (mile)',
      time: formatResult((Number(1609)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 7,
      event: '3000m',
      time: formatResult((Number(3000)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 8,
      event: '3200m',
      time: formatResult((Number(3200)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 9,
      event: '5000m',
      time: formatResult((Number(5000)/Number(race))*(Number(currentRaceTimeVar))),
    },
    {
      id: 10,
      event: '10000m',
      time: formatResult((Number(10000)/Number(race))*(Number(currentRaceTimeVar))),
    }
  ]

return (
  <View>
    <Text style = {styles.mainResult}> { formatResult(mySplit) } </Text>
    <Text style = {{textAlign: 'center', marginBottom: 10}}> For {desiredSplitVar}m ({ timesRun(race, desiredSplitVar) } times) </Text>
    <Text style = {{textAlign: 'center', marginBottom: 30}}> { (formatResult(currentRaceTimeVar - (mySplit * parseInt(Number(race)/Number(desiredSplitVar))))) } for remaining {race - (parseInt(race/desiredSplitVar) * desiredSplitVar)}m </Text>
    <ScrollView style = {{borderWidth: 0.5, borderBottomWidth: 0, borderColor: 'grey'}}>
    {events.map((item, index) => (
        <View key={item.id} style={styles.container}>
          <Text style={styles.text}>  {item.event}</Text>
          <Text style={styles.text}>{item.time}  </Text>
        </View>
      ))}
    </ScrollView>
  </View>
)



}
export default SplitsResults

const styles = StyleSheet.create ({
  container: {
      padding: 10,
      marginTop: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderBottomColor: 'grey',
      borderBottomWidth: 0.5
   },
   text: {
      color: 'black',
      fontSize: 15
   },
   mainResult: {
     width: 250,
     height: 75,
     textAlign: 'center',
     padding: 18,
     fontSize: 30,
     backgroundColor: 'white',
     marginTop: 60,
     marginBottom: 10,
     marginLeft: 60
   }
})
