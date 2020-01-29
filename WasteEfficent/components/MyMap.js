import React, { Component } from 'react';
import { TextInput,Text, View } from 'react-native';
import MapView from 'react-native-maps'

export default function MyMap(props) //react-native-maps-directions too
 {  render() {
         return 
         (      <MapView        
            style={{flex: 1}}        
            region={{          
            latitude: 43.6532,          
            longitude: 79.3832,         
            }}        
            showsUserLocation={true}      
            />    
            );  
        }}
