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
      setFinished: true,
      mileStarted: false,
    };
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.toggleSet = this.toggleSet.bind(this);
    this.toggleSetReset = this.toggleSetReset.bind(this);
    this.toggleTimeReset = this.toggleTimeReset.bind(this);
    this.toggleMileRun = this.toggleMileRun.bind(this);
  }

  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }
  toggleSet(){
    if(!this.state.setFinished) {
      this.setState({
        setFinished: true,
        numberSets: this.state.numberSets + 1
      });
    } else {
      this.setState({setFinished: false});
    }
  }
  toggleSetReset() {
    this.setState({numberSets: 0});
  }

  toggleTimeReset() {
    this.setState({stopWatchStart: true, stopwatchReset: true});
  }
  
  toggleMileRun() {
    this.setState({mileStarted: !this.state.mileStarted});
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
          <View style={Styles.buttonContainer}>
            <TouchableOpacity style={Styles.button1} onPress={this.toggleStopwatch}>
              <Text style={Styles.buttonText}>{!this.state.stopwatchStart ? "Start" : "Pause"}</Text>
            </TouchableOpacity>
            {!this.state.stopwatchStart
              ? <TouchableOpacity style={Styles.button2} onPress={this.toggleTimeReset}>
                  <Text style={Styles.buttonText}>Reset</Text>
                </TouchableOpacity>
              : null
            }
          </View>
        </View>
        
        {/* Number of sets container */}
        <View style={Styles.bodyContainer}>
          <Text style={Styles.header}>Number of Sets: {this.state.numberSets}</Text>
          <View style={Styles.buttonContainer}>
            <TouchableOpacity style={Styles.button1} onPress={this.toggleSet}>
              <Text style={Styles.buttonText}>{this.state.setFinished ? "Start" : "Finish"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button2} onPress={this.toggleSetReset}>
              <Text style={Styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Mile container */}
        <View style={Styles.bodyContainer}>
            <Text style={Styles.header}>Mile Start</Text>
            <TouchableOpacity style={Styles.button1} onPress={this.toggleMileRun}>
              <Text style={Styles.buttonText}>{!this.state.mileStarted ? "Start" : "Finish"}</Text>
            </TouchableOpacity>
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

