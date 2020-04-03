import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Container, Content, Card, Body, List, Text, Button, CardItem, Right, Left } from 'native-base';
import RoutesList from '../components/RoutesList';
import * as Font from 'expo-font'

var Routes = [{ id: 1, name: "Western University Route", mapsData: {} }, { id: 2, name: "Broughdale Neighbourhood Route", mapsData: {} }, { id: 3, name: "Oakridge Neighbourhood Route", mapsData: {} }]

export default class RoutesScreen extends Component {
  state = {
    routes: Routes,
    loading: true
  }

  componentWillMount = async () => {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <ActivityIndicator />
    }
    return (
      <Container>


        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={{ paddingTop: 10 }}>
                  Select your route
                  </Text>
              </Body>
            </CardItem>




          </Card>
          <Card>
            <CardItem>
          <Right>
            <Button rounded style={{ width: '100%', margin: 'auto' }}>
            <Text>Add Routes</Text>
          </Button></Right>
          <Left><Button rounded danger style={{ width: '100%', margin: 'auto' }}>
            <Text>Delete Routes</Text>
          </Button>
          </Left>
          </CardItem>
          </Card>
        </Content>
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
        <Button full style={{ paddingTop: 10, height: '10%' }}>
          <Text>Drive Route</Text>
        </Button>
      </Container >
    );
  }
}

RoutesScreen.navigationOptions = {
  title: 'Routes',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  Button: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#000',
  },
});
