import React, { Component } from 'react';
import { TextInput,Text, View } from 'react-native';
import MapView from 'react-native-maps';
import MyMap from '../components/MyMap'
export default function DrivesScreen() {
    return(
        <MyMap></MyMap>
    );
}
DrivesScreen.navigationOptions = {
  title: 'Map',
};