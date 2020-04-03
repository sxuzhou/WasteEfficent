import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, FlatList, Alert, TouchableOpacity } from 'react-native';
import { List,Card, CardItem, Icon, Right, Container, Content, Button, Body } from 'native-base';
import RoutesList from '../components/RoutesList';

var Routes = [{ id: 1, name: "Western University Garbage Site", mapsData: {} }, { id: 2, name: "Brescia Ln Site", mapsData: {} }, { id: 3, name: "Perth Hall Site", mapsData: {} },{ id: 4, name: "Ontario Hall Site", mapsData: {} },{ id: 5, name: "Essex Hall Site", mapsData: {} }]
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
        
          </Content><Card><CardItem><Body><Text>Stops are singular sites you can chain together to make a route</Text></Body></CardItem></Card><Content>
            <Card>
              <CardItem>
                <Icon active type="FontAwesome" name="plus" />
                <Text>Add stop</Text>
                <Right>
                <Button transparent onPress={() => this.props.navigation.navigate('AddStops')}><Icon name="arrow-forward" /></Button>
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
