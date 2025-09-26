import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, ScrollView } from 'react-native'
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
  let formattedSplit = timeInSeconds;


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



// main display component
// calculates performance conversion using using Peter Riegel's predictor
// equation: T2 = T1 (D2/D1) * 1.06
// returns main calculation with table underneath
const ConversionResults = ({race, desiredRaceVar, hours, minutes, seconds}) => {
  
  let conversionExponent = Number(1.06);

  let currentRaceTimeVar = Number(hours)*3600 + Number(minutes)*60 + Number(seconds);

  let myNewTime = Number(currentRaceTimeVar) * (Number(desiredRaceVar)/(Number(race))) ** (conversionExponent);

  const events = [
      {
        id: 0,
        event: '400m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(400)/(Number(race))) ** (conversionExponent)),
      },
      {
        id: 1,
        event: '600m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(600)/(Number(race))) ** (conversionExponent))
      },
      {
        id: 2,
        event: '800m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(800)/(Number(race))) ** (conversionExponent)),
      },
      {
        id: 3,
        event: '1000m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(1000)/(Number(race))) ** (conversionExponent)),
      },
      {
        id: 4,
        event: '1200m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(1200)/(Number(race))) ** (conversionExponent)),
      },
      {
        id: 5,
        event: '1600m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(1600)/(Number(race))) ** (conversionExponent)),
      },
      {
        id: 6,
        event: '1609m (mile)',
        time: formatResult(Number(currentRaceTimeVar) * (Number(1609)/(Number(race))) ** (conversionExponent)),
      },
      {
        id: 7,
        event: '3000m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(3000)/(Number(race))) ** (conversionExponent)),
      },
      {
        id: 8,
        event: '3200m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(3200)/(Number(race))) ** (conversionExponent)),
      },
      {
        id: 9,
        event: '5000m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(5000)/(Number(race))) ** (conversionExponent)),
      },
      {
        id: 10,
        event: '10000m',
        time: formatResult(Number(currentRaceTimeVar) * (Number(10000)/(Number(race))) ** (conversionExponent)),
      }
    ];

return (
  <View>
    <Text style = {styles.mainResult}> { formatResult(myNewTime) } </Text>

      <Text style = {{textAlign: 'center', marginBottom: 30}}> For { desiredRaceVar }m </Text>
    <ScrollView>
      {events.map((item, index) => (
          <View key={item.id} style={styles.container}>
            <Text style={styles.text}>{item.event}</Text>
            <Text style={styles.text}>{item.time}</Text>
          </View>
        ))}
    </ScrollView>
  </View>
)



}
export default ConversionResults

const styles = StyleSheet.create ({
  container: {
      padding: 10,
      marginTop: 3,
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
     padding: 18,
     fontSize: 30,
     backgroundColor: 'white',
     marginTop: 60,
     marginBottom: 10,
     marginLeft: 60
   }
})
