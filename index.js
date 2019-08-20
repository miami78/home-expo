import React from 'react';

import { AppRegistry, StyleSheet, Text, View, VrButton } from 'react-360';


export default class home_expo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    sceneId: null,
    nextSceneId: null,
    };
  }
  onClick(toId){
    let scene = this.nextSceneId( toId );
    this.setScene( scene );
  }
  render() {
    return (
      <View style={styles.scene}>
        <VrButton onClick={this.props.onClick}>
          <Text style={styles.message}>Next Scene{this.state.nextSceneId }</Text>
        </VrButton>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  scene : {
    padding : 20,
    backgroundColor : '#000000',
    borderColor : '#639dda',
    borderWidth : 2
  },
  message: {
    fontSize : 30
  }
})
AppRegistry.registerComponent('home_expo', () => home_expo);
