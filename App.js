import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Styles from './Styles/styles.js';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
      numberSets: 0,
    };
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
  }

  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>Murph Tracker</Text>

        {/* Global Time container */}
        <View style={Styles.bodyContainer}>
          <Text style={Styles.header}>Global Time</Text>
          <Stopwatch msecs start={this.state.stopwatchStart}
            options={options}
            reset={this.state.stopwatchReset}
          />
          <TouchableOpacity style={Styles.buttonStyle} onPress={this.toggleStopwatch}>
            <Text style={Styles.buttonText}>{!this.state.stopwatchStart ? "Start" : "Pause"}</Text>
          </TouchableOpacity>
        </View>
        
        {/* Number of sets container */}
        <View style={Styles.bodyContainer}>
          <Text style={Styles.header}>Number of Sets: {this.state.numberSets}</Text>
        </View>


      </View>
    );
  }
}

const options = {
  container: {
    alignSelf: "flex-end",
    backgroundColor: "#ff512f",
    alignSelf: "center"
  }, 
  text: {
    fontSize: 20
  }
};
