import React from 'react';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left, View } from 'native-base';

export default function RoutesScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Container>
    <View style={{
          alignSelf: "center",
          width: "100%",
          backgroundColor: "#92ad1",
        }}>
 
      <Text style={{
          alignSelf: "center"
        }}>
          Select your route</Text>
    </View>
    <Content>
      <ListItem selected={false} >
        <Left>
          <Text>Route Number 1</Text>
        </Left>
        <Right>
          <Radio
            color={"#f0ad4e"}
            selectedColor={"#5cb85c"}
            selected={false}
          />
        </Right>
      </ListItem>
      <ListItem selected={true}>
        <Left>
          <Text>Route number 2</Text>
        </Left>
        <Right>
          <Radio
            color={"#f0ad4e"}
            selectedColor={"#5cb85c"}
            selected={true}
          />
        </Right>
      </ListItem>
    </Content>
  </Container>
  );
}

RoutesScreen.navigationOptions = {
  title: 'app.json',
};
