import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons/faPersonSwimming';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning';

const RaceProjectionInfoEntry = () => {
  const [convertedTime, setConvertedTime] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tenths, setTenths] = useState(0);
  const [odistance, setODistance] = useState(0);
  const [ddistance, setDDistance] = useState(0);

  const handleSeconds = (text) => setSeconds(text);
  const handleMinutes = (text) => setMinutes(text);
  const handleTenths = (text) => setTenths(text);
  const handleODistance = (text) => setODistance(text);
  const handleDDistance = (text) => setDDistance(text);

  const calcTime = () => {
    const minutesActual = parseFloat(minutes || 0) * 60;
    const tenthsActual = parseFloat(tenths || 0) / 100;
    let totalTime = minutesActual + parseFloat(seconds || 0) + tenthsActual;

    totalTime = totalTime * (parseFloat(ddistance || 0) / parseFloat(odistance || 1)) ** 1.16;

    const finalMinutes = Math.floor(totalTime / 60);
    const finalSeconds = Math.floor(totalTime % 60);
    const finalTenths = Math.round((totalTime - Math.floor(totalTime)) * 100);

    const formattedTime = `${finalMinutes}:${finalSeconds < 10 ? '0' : ''}${finalSeconds}.${finalTenths < 10 ? '0' : ''}${finalTenths}`;
    setConvertedTime(formattedTime);
  };

  const goToSwimMenu = () => Actions.swimmenu1();
  const goToTrackMenu = () => Actions.trackmenu1();

  const goToRaceProjectionResults = () => {
    Keyboard.dismiss();
    setConvertedTime('');
    if (minutes === '' && seconds === '') {
      setConvertedTime('Invalid Time.');
    } else if (parseInt(minutes) > 60) {
      setConvertedTime('Invalid Time.');
    } else {
      calcTime();
    }
  };

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputTime}
              keyboardType='numeric'
              placeholder="MM"
              placeholderTextColor = "lightgrey"
              onChangeText={handleMinutes}
              value={minutes}
              maxLength={2}
            />
            <Text style={styles.punctuation}>:</Text>
            <TextInput
              style={styles.inputTime}
              keyboardType='numeric'
              placeholder="SS"
              placeholderTextColor = "lightgrey"
              onChangeText={handleSeconds}
              value={seconds}
              maxLength={2}
            />
            <Text style={styles.punctuation}>.</Text>
            <TextInput
              style={styles.inputTime}
              keyboardType='numeric'
              placeholder="TH"
              placeholderTextColor = "lightgrey"
              onChangeText={handleTenths}
              value={tenths}
              maxLength={2}
            />
          </View>

        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder=" Original distance"
          placeholderTextColor = "lightgrey"
          onChangeText={handleODistance}
          value={odistance}
          maxLength={4}
        />

        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder=" Desired distance"
          placeholderTextColor = "lightgrey"
          onChangeText={handleDDistance}
          value={ddistance}
          maxLength={4}
        />

        <TouchableOpacity
          style={styles.convertButton}
          onPress={goToRaceProjectionResults}>
          <Text style={styles.convertButtonText}>Calculate</Text>
        </TouchableOpacity>
        {convertedTime !== '' && (
          <View>
            <Text style={styles.mainResult}>{convertedTime}</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.containerTaskBar}>
        <TouchableOpacity onPress={goToSwimMenu} style={{ alignItems: 'center' }}>
          <FontAwesomeIcon
            icon={faPersonSwimming}
            size={30}
            color='#00b3b3'
            style={{ marginTop: 2 }}
          />
          <Text style={{ color: '#00b3b3' }}>Swimming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToTrackMenu} style={{ alignItems: 'center' }}>
          <FontAwesomeIcon
            icon={faPersonRunning}
            size={30}
            color='gray'
            style={{ marginTop: 2 }}
          />
          <Text style={{ color: 'gray' }}>Track</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default RaceProjectionInfoEntry;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  inputTime: {
    fontSize: 25
  },
  punctuation: {
    fontSize: 25,
    color: 'grey'
  },
  input: {
    paddingLeft: 10,
    margin: 15,
    height: 45,
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  convertButton: {
    backgroundColor: '#00b3b3',
    padding: 10,
    margin: 40,
    height: 50,
    width: '55%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'center'
  },
  convertButtonText: {
    fontSize: 20,
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
     borderRightColor: 'white',
     borderLeftColor: 'white',
     borderBottomColor: 'white',
     backgroundColor: 'white'
   },
  mainResult: {
    width: 250,
    height: 75,
    textAlign: 'center',
    padding: 18,
    fontSize: 30,
    backgroundColor: 'white',
    marginTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey'
  }
});
``
