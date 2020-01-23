import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, Text, TextInput, View, FlatList, Alert, TouchableOpacity} from 'react-native';
<<<<<<< Updated upstream
import { Button, StyleProvider } from 'native-base';
import { FlexLeft } from '../components/FlexBox';
import  { StopsText } from '../components/StopsText';
=======
import { Button, StyleProvider,Container } from 'native-base';
>>>>>>> Stashed changes
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
    paddingTop: 10,
    backgroundColor: '#fff',
<<<<<<< Updated upstream
=======
    maxWidth: '50%',
>>>>>>> Stashed changes
  },
  Button: {
    flex: 1,
    paddingTop: 15,
    maxWidth: '80%',
    backgroundColor: '#000',
  },
});
