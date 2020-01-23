
import React from 'react';
import { TextInput } from 'react-native';

export function InputBoxes(props) {
    const [value, onChangeText] = React.useState('');
  return (
<TextInput {...props}
    style={{ width: 80, height: 40, borderColor: 'gray', borderWidth: 1, }}
    onChangeText={text => onChangeText(text)}
    value={value} />
  );
}