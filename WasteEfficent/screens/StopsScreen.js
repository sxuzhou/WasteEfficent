import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, Text, TextInput, View, FlatList, Alert, TouchableOpacity} from 'react-native';
import { Button, StyleProvider } from 'native-base';
import { FlexLeft } from '../components/FlexBox';
import  { StopsText } from '../components/StopsText';
import { InputBoxes } from '../components/InputBoxes';
import { Input } from 'native-base';

export default function StopsScreen() {
  return (
    <ScrollView style={styles.container}>
      {
        <FlexLeft> 
          <InputBoxes></InputBoxes>
          <Button
          onPress={() => alert("Added stop!")}>
          <Text>Add stop</Text>
          </Button>
          <InputBoxes></InputBoxes>
          <Button
          onPress={() => alert("Edit stop!")}>
          <Text>Edit Stop</Text>
          </Button>
          <InputBoxes></InputBoxes>
          <Button
          onPress={() => alert("Remove stop!")}>
          <Text>Remove Stop</Text>
          </Button> 
        </FlexLeft>
      }
    </ScrollView>
  );
}

StopsScreen.navigationOptions = {
  title: 'Stops',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  Button: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#000',
  },
});
