import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native'
import { Container, Content, Card, Body, List, Text, Button, CardItem } from 'native-base';
import RoutesList from '../components/RoutesList';
import * as Font from 'expo-font'

var Routes = [{ id: 1, name: "route1", mapsData: {} }, { id: 2, name: "route2", mapsData: {} }, { id: 3, name: "route3", mapsData: {} }]

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
          <Button rounded style={{ width: '35%' }}>
            <Text>Add Routes</Text>
          </Button>
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
