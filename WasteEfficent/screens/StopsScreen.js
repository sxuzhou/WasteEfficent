import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, FlatList, Alert, TouchableOpacity} from 'react-native';
import { Button, StyleProvider, Container } from 'native-base';
import { InputBoxes } from '../components/InputBoxes';

export default function StopsScreen() {
  return (
    <ScrollView style={styles.container}>
      {
        <Container>
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
