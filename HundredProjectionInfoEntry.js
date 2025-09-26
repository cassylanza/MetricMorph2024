import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback,TouchableOpacity, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons/faPersonSwimming'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'

const HundredProjectionInforEntry = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tenths, setTenths] = useState(0);
  const [convertedTime, setConvertedTime] = useState('');

  const handleMinutes = (text) => setMinutes(text);
  const handleSeconds = (text) => setSeconds(text);
  const handleTenths = (text) => setTenths(text);

  const calcTime = () => {
    Keyboard.dismiss();
    const minutesActual = parseFloat(minutes || 0) * 60;
    const tenthsActual = parseFloat(tenths || 0) / 100;
    let totalTime = minutesActual + parseFloat(seconds || 0) + tenthsActual;
    totalTime *= 0.92;

    const finalMinutes = Math.floor(totalTime / 60);
    const finalSeconds = Math.floor(totalTime % 60);
    const finalTenths = Math.round((totalTime - Math.floor(totalTime)) * 100);

    const formattedTime = `${finalMinutes}:${finalSeconds < 10 ? '0' : ''}${finalSeconds}.${finalTenths < 10 ? '0' : ''}${finalTenths}`;
    setConvertedTime(formattedTime);
  };

  const goToSwimMenu = () => Actions.swimmenu1();
  const goToTrackMenu = () => Actions.trackmenu1();

  const goTo100ProjectionResults = () => {
    setConvertedTime('');
    if (minutes === '0' && seconds === '0') {
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
          <View style={styles.contentContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTime}
                keyboardType='numeric'
                placeholder="MM"
                placeholderTextColor = "lightgrey"
                onChangeText={handleMinutes}
                value={minutes}
              />
              <Text style={styles.punctuation}>:</Text>
              <TextInput
                style={styles.inputTime}
                keyboardType='numeric'
                placeholder="SS"
                placeholderTextColor = "lightgrey"
                onChangeText={handleSeconds}
                value={seconds}
              />
              <Text style={styles.punctuation}>.</Text>
              <TextInput
                style={styles.inputTime}
                keyboardType='numeric'
                placeholder="TH"
                placeholderTextColor = "lightgrey"
                onChangeText={handleTenths}
                value={tenths}
              />
            </View>
            <Text style={styles.average}>Average of 6x100s in practice</Text>
            <TouchableOpacity
              style={styles.convertButton}
              onPress={goTo100ProjectionResults}>
              <Text style={styles.convertButtonText}>Calculate</Text>
            </TouchableOpacity>
            {convertedTime !== '' && (
              <View style={styles.mainResult}>
                <Text style={{ textAlign: 'center' }}>Projected race time:</Text>
                <Text style={styles.mainResult}>{convertedTime}</Text>
              </View>
            )}
          </View>
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

export default HundredProjectionInforEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingTop: 125,
    alignItems: 'center'
  },
  inputTime: {
    fontSize: 25
  },
  punctuation: {
    fontSize: 25,
    color: 'grey'
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '12%',
    width: '100%',
    borderWidth: 1,
    borderTopColor: 'lightgray',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: 'white',
    backgroundColor: 'white'
  },
  mainResult: {
    marginTop: '10%',
    width: '100%',
    height: 75,
    textAlign: 'center',
    padding: 18,
    fontSize: 30,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey'
  },
  average: {
    marginBottom: 20,
  }
});
