import React from "react";
import { View, Environment, asset } from "react-360";

import SceneTitle from "./SceneTitle";
import Popup from "./InfoPopup";
import Scene from "./Scene";
export default class SceneManager extends React.Component {
    

        state = {
            currentSceneId: this.props.initialSceneId
        };
    

    componentDidMount() {
        this.updateScene({});
      }
    
    componentDidUpdate(prevProps, prevState) {
    this.updateScene(prevState);
    }

    updateScene = prevState => {
        if (prevState.currentSceneId === this.state.currentSceneId) return;
    
        const currentScene = this.getCurrentScene();
        Environment.setBackgroundImage(asset(currentScene.image));
      };
    
      getCurrentScene = () => {
        return this.getSceneById(this.state.currentSceneId);
      };
    
      getSceneById = sceneId => {
        return this.props.scenes.find(scene => scene.id === sceneId);
      };

      handleSceneClick = (e,sceneNext) => {
        this.setState({ currentSceneId: sceneNext.id });
      };

      renderPopups = (popups = []) => {
          return popups.map((popup, i) =>(
              <Popup
              key={i}
              title={popup.title}
              description={popup.description}
              location={popup.location}
            />
          ));
      };

      renderScenes = (scenes = []) => {
          return scenes.map((scene, i) => {
              const sceneNext = this.getSceneById(scene.sceneId);

              return (
                  <Scene
                    key={i}
                    onClick={e =>this.handleSceneClick(e, sceneNext)}
                    title={sceneNext.title}
                    preview={sceneNext.preview}
                    location={scene.location}
                   />
              );
          });
      };

      render() {
          const currentScene = this.getCurrentScene();

          return (
              <View style={{ flex: 1}}>
                  <SceneTitle title={currentScene.title}/>
                  {this.renderPopups(currentScene.popups)}
                  {this.renderScenes(currentScene.scenes)}
              </View>
          );
      }
}