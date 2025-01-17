import React from 'react';
import {
  AppRegistry,
} from 'react-360';

import SceneManager from "./components/SceneManager.js";
import config from "./static_assets/config.json";
export default class HomeExpo extends React.Component {
  render() {
    return (
      <SceneManager
        scenes={config.scenes}
        initialSceneId={config.initialSceneId}
      />
    );
  }
};

AppRegistry.registerComponent('HomeExpo', () => HomeExpo);
