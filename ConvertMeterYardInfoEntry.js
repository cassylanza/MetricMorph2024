import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons/faPersonSwimming'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'

const ConvertMeterYardEntry = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tenths, setTenths] = useState(0);
  const [event, setEvent] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [result, setResult] = useState('');
  const [course, setCourse] = useState('');

  const handleSeconds = (text) => setSeconds(text);
  const handleMinutes = (text) => setMinutes(text);
  const handleTenths = (text) => setTenths(text);

  const yardsToMeters = (time) => time * 1.11;
  const metersToYards = (time) => time / 1.11;

  const conversion = () => {
    Keyboard.dismiss();
    const minutesActual = parseFloat(minutes || 0) * 60;
    const tenthsActual = parseFloat(tenths || 0) / 100;
    let time = minutesActual + parseFloat(seconds || 0) + tenthsActual;

    if (to.toUpperCase() === "SCM" && from.toUpperCase() === "Y") {
      if (!isNaN(parseFloat(time))) {
        time = yardsToMeters(time);
        setCourse('Your time in short course meters:');
      } else {
        setResult('Invalid Input');
      }
    } else if (to.toUpperCase() === "Y" && from.toUpperCase() === "SCM") {
      if (!isNaN(parseFloat(time))) {
        time = metersToYards(time);
        setCourse('Your time in yards:');
      } else {
        setResult('Invalid Input');
      }
    } else {
      setResult('Invalid Input');
      setCourse('Accepted courses: SCM, Y');
    }

    const finalMinutes = Math.floor(time / 60);
    const finalSeconds = Math.floor(time % 60);
    const finalTenths = Math.round((time - Math.floor(time)) * 100);

    const formattedTime = `${finalMinutes}:${finalSeconds < 10 ? '0' : ''}${finalSeconds}.${finalTenths < 10 ? '0' : ''}${finalTenths}`;
    setResult(formattedTime);
  };

  const goToSwimMenu = () => Actions.swimmenu1();
  const goToTrackMenu = () => Actions.trackmenu1();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
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
        placeholder="Event (e.g., '50FR')"
        placeholderTextColor="grey"
        onChangeText={(text) => setEvent(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Original course (SCM, Y)"
        placeholderTextColor="grey"
        maxLength={3}
        onChangeText={(text) => setFrom(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Desired course (SCM, Y)"
        placeholderTextColor="grey"
        maxLength={3}
        onChangeText={(text) => setTo(text)}
      />
      <TouchableOpacity
        style={styles.convertButton}
        onPress={() => conversion()}>
        <Text style={styles.convertButtonText}>Calculate</Text>
      </TouchableOpacity>
      {result !== '' && (
        <View style={styles.resultContainer}>
          <Text style={{ textAlign: 'center', marginTop: '15%' }}>{course}</Text>
          <Text style={styles.mainResult}>{result}</Text>
        </View>
      )}
      <View style = {styles.containerTaskBar}>
        <TouchableOpacity onPress = {goToSwimMenu} style={{alignItems: 'center'}}>
            <FontAwesomeIcon
              icon={faPersonSwimming}
              size={30}
              color='#00b3b3'
              style = {{marginTop: 2}}
            />
            <Text style = {{color: '#00b3b3'}}>Swimming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {goToTrackMenu} style={{alignItems: 'center'}}>
          <FontAwesomeIcon
            icon={faPersonRunning}
            size={30}
            color='gray'
            style = {{marginTop: 2}}
          />
          <Text style = {{color: 'gray'}}>Track</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default ConvertMeterYardEntry;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center'
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
    width: '75%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  convertButton: {
    backgroundColor: 'green',
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
    width: '50%',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey'
  }
});
