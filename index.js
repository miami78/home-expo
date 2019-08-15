import React, { Component } from 'react';

import Navigation from "./components/nav/Navigation"
import InfoPopup from "./components/popup/InfoPopup"
import Card from "./components/card/Card"

export {
  Navigation,
  InfoPopup,
  Card,
};

import {
  AppRegistry,
} from 'react-360';

export default class home_expo extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
        
    );
  }
};

AppRegistry.registerComponent('home_expo', () => home_expo);
