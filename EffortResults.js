import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'


// formats the calculated time into hours, minutes, and seconds
// returns default of "hh:mm:ss" if input is invalid (i.e. not a number
// or outside of the specified range)
export function formatResult(timeInSeconds) {

  let maxNumber = 362399;

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
// calculates a pace corresponding to an effort percentage
// converts given performance to 3200 performance and divides by given % effort
// returns main calculation with table underneath
const EffortResults = ({race, effortPercent, hours, minutes, seconds}) => {

  let basisDistance = 3200; // effort relies on 3200 pace

  let conversionExponent = 1.06; // value of exponent in Riegal's conversion formula

  let currentRaceTimeVar = Number(hours)*3600 + Number(minutes)*60 + Number(seconds);

  let mySplit = Number(currentRaceTimeVar) * (Number(basisDistance)/(Number(race))) ** (conversionExponent);

  const events = [
      {
        id: 0,
        effort: '65%',
        time: formatResult(Number(mySplit/2)/(Number(.65))),
      },
      {
        id: 1,
        effort: '70%',
        time: formatResult(Number(mySplit/2)/(Number(.70))),
      },
      {
        id: 2,
        effort: '75%',
        time: formatResult(Number(mySplit/2)/(Number(.75))),
      },
      {
        id: 3,
        effort: '80%',
        time: formatResult(Number(mySplit/2)/(Number(.8)))
      },
      {
        id: 4,
        effort: '85%',
        time: formatResult(Number(mySplit/2)/(Number(.85)))
      },
      {
        id: 5,
        effort: '90%',
        time: formatResult(Number(mySplit/2)/(Number(.9)))
      },
      {
        id: 6,
        effort: '95%',
        time: formatResult(Number(mySplit/2)/(Number(.95)))
      },
      {
        id: 7,
        effort: '96%',
        time: formatResult(Number(mySplit/2)/(Number(.96)))
      },
      {
        id: 8,
        effort: '97%',
        time: formatResult(Number(mySplit/2)/(Number(.97)))
      },
      {
        id: 9,
        effort: '98%',
        time: formatResult(Number(mySplit/2)/(Number(.98)))
      },
      {
        id: 10,
        effort: '99%',
        time: formatResult(Number(mySplit/2)/(Number(.99)))
      },
      {
        id: 11,
        effort: '100%',
        time: formatResult(Number(mySplit/2)/(Number(1)))
      },
      {
        id: 12,
        effort: '105%',
        time: formatResult(Number(mySplit/2)/(Number(1.05)))
      },
      {
        id: 13,
        effort: '110%',
        time: formatResult(Number(mySplit/2)/(Number(1.1)))
      },
      {
        id: 14,
        effort: '115%',
        time: formatResult(Number(mySplit/2)/(Number(1.15)))
      },
      {
        id: 15,
        effort: '120%',
        time: formatResult(Number(mySplit/2)/(Number(1.2)))
      }
    ];

    return (
      // displays main converion result followed by a table of
      // common effort percentages
      <View>
        <Text style = {styles.mainResult}> { formatResult((mySplit/(Number(2)))/(Number(effortPercent)/(Number(100)))) } </Text>
        <Text style = {{textAlign: 'center', marginBottom: 30}}> min/mile for { effortPercent }% </Text>
        <ScrollView>
          {events.map((item, index) => (
              <View key={item.id} style={styles.container}>
                <Text style={styles.text}>{item.effort}</Text>
                <Text style={styles.text}>{item.time}</Text>
              </View>
            ))}
        </ScrollView>
      </View>
    )
}
export default EffortResults

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
