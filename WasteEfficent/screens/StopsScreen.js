import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, FlatList, Alert, TouchableOpacity } from 'react-native';
import { FlexLeft } from '../components/FlexBox';
import { StopsText } from '../components/StopsText';
import { InputBoxes } from '../components/InputBoxes';
import { Input, Container } from 'native-base';


export default function StopsScreen() {
  return (
    <ScrollView style={styles.container}>
      {
        <Container style={styles.inputBoxes}>
          <StopsText>Add Stop:</StopsText>
          <Text>Enter your stop name to add:</Text>
          <InputBoxes></InputBoxes>
          <StopsText>Edit Stop:</StopsText>
          <Text>Input your stop name to edit:</Text>
          <InputBoxes></InputBoxes>
          <StopsText>Remove Stop:</StopsText>
          <Text>Enter your stop name to remove:</Text>
          <InputBoxes></InputBoxes>
        </Container>
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
    flexDirection: 'column',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  inputBoxes: {
    maxWidth: '80%',
  }
});
