import React, {Component} from 'react';
import { TextInput,Text, View } from 'react-native';

export function InputBoxes(props) {
  return (
    <TextInput 
    {...props}
    placeholder="Type street name here!"
    ref={input => {this.textInput = input}}
    style={{ height: 40, borderColor: 'gray', borderWidth: 1}}

    />
  );
}