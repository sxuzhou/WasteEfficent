import React, { Component } from 'react';
import { TextInput,Text, View } from 'react-native';
import MapView from 'react-native-maps'

export default function MyMap(props) //react-native-maps-directions too
 {   
         return(      <MapView         
            style={{flex: 1}}        
            initialRegion={{
      latitude: 43.0096,
      longitude: -81.2737,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
        showsUserLocation={true}      
        />    
        ); 
}
