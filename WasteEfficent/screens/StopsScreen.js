import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, FlatList, Alert, TouchableOpacity } from 'react-native';
import { List,Card, CardItem, Icon, Right, Container, Content } from 'native-base';
import RoutesList from '../components/RoutesList';

var Routes = [{ id: 1, name: "Stop1", mapsData: {} }, { id: 2, name: "Stop2", mapsData: {} }, { id: 3, name: "Stop3", mapsData: {} }]
export default class StopsScreen extends Component {
  state = {
    routes: Routes,
  }
  render(){
  return (
    <ScrollView style={styles.container}>
      {
        <Container>
          
          <Content>
          <List>
          {this.state.routes.map((route, index) => {
            return (
              <RoutesList
                routeName={route.name}
                selectedBoolean={false}
                key={index + route.id}
              ></RoutesList>
            )
          })}
        </List>
          </Content><Content>
            <Card>
              <CardItem>
                <Icon active type="FontAwesome" name="plus" />
                <Text>Add stop</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>

              <CardItem>
                <Icon active type="FontAwesome" name="edit" />
                <Text>Edit Stop</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>

              <CardItem>
                <Icon active type="FontAwesome" name="trash" />
                <Text>Remove Stop</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Container>
      }
    </ScrollView>
  );
}}

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
