import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Textarea } from 'native-base';

export default function StopsScreen() {
  const [value, onChangeText] = React.useState('');
  return (
    <ScrollView style={styles.container}>
      {
        <View style={{ flex: 1, flexDirection: 'column', width: 180, height: 50 }}>
          <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 15 }}>Add Stop</Text>

          <Text>Enter your stop name here:</Text>

          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
