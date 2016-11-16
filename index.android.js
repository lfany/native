/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Hello extends Component {
  render() {
    return (
      <Text> Hello {this.props.name}! </Text>
    );
  }
}


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText});
    }, 1000);
  }

    render() {
      let display = this.state.showText ? this.props.text : '      ';
      return (
        <Text>
           {this.props.txt}: {display}
        </Text>
      );
    }
}

class Styles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>
          Red Red Red
        </Text>
        <Text style={styles.green}>
          green green green
        </Text>
        <Text style={styles.blue}>
          blue blue blue
        </Text>
        <Text style={styles.light}>
          light light light
        </Text>
      </View>
    );
  }
}

class FixedDimensionBasics extends Component {
  render() {
    return (
      <View>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
      </View>
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>
      </View>
      <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>
      </View>
      </View>
    );
  };
}

class FlexDimensionBasics extends Component {
  render() {
    // Try removing the `flex: 1` on the parent View.
     // The parent will not have dimensions, so the children can't expand.
     // What if you add `height: 300` instead of `flex: 1`?
    return (
      <View style={{flex: 1, height: 100, width: 200}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}

export default class hello extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>

        <Hello name="World"/>
        <Blink txt="xzxc" text="xxxxxxxxxxxx">
        </Blink>
        <Styles/>
        <FixedDimensionBasics/>

        <FlexDimensionBasics/>
        {/*<Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>*/}
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
  blue: {
    color: 'blue',
  },
  light: {
    color: 'lightblue',
  },
});

AppRegistry.registerComponent('hello', () => hello);
