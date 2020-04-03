import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import { Content, Card, Container } from 'native-base';
import Polyline from '@mapbox/polyline';


export default class RnDirectionsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: []
    }
  }

  componentDidMount() {
    // find your origin and destination point coordinates and pass it to our method.
    // I am using Toronto, ON -> London, ON in this example below.
    this.getDirections("43.0258, -81.2784", "43.0126, -81.2656")
  }
  async getDirections(startLoc, destinationLoc) {
    try {
      let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=AIzaSyAxVOLyJLJi2xHuokJK489s_sQWM1R3DYk`)
      let respJson = await resp.json();
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords: coords })
      return coords
    } catch (error) {
      alert(error)
      return error
    }
  }

  render() {
    return (
      <Container>
        <View>
          <MapView style={styles.map} showsCompass={true} initialRegion={{
            latitude: 42.9849,
            longitude: -81.2453,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
            <MapView.Marker coordinate={{latitude: 43.025, longitude: -81.278, }}
              title='Masonville pickup site'
              description="Mall pickup site"
            />
            <MapView.Marker coordinate={{latitude: 43.020151, longitude: -81.27869, }}
              title='Apartments 1580 pickup site'
              description="Apartment pickup site in the back"
            />
            <MapView.Marker coordinate={{latitude: 43.015117, longitude: -81.270156, }}
              title='Western Center For Public Health pickup site'
            />
            <MapView.Marker coordinate={{latitude: 43.017078, longitude: -81.273421, }}
              title='Western Center For Public Health pickup site'
            />
            <MapView.Marker coordinate={{latitude: 43.012907, longitude: -81.265441, }}
              title='Western Center For Public Health pickup site'
            />
            <MapView.Polyline
              coordinates={this.state.coords}
              strokeWidth={2}
              strokeColor="red" />
          </MapView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});

AppRegistry.registerComponent('RnDirectionsApp', () => RnDirectionsApp);