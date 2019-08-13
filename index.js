import React from 'react';

import Navigation from "./components/nav/Navigation"
import InfoPopup from "./components/popup/InfoPopup"

export {
  Navigation,
  InfoPopup
};

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class home_expo extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Home expo 1.0
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('home_expo', () => home_expo);
