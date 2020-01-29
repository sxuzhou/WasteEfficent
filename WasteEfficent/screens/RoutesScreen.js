import React, { Component } from 'react';
import { Container, List , Text, View } from 'native-base';
import RoutesList from '../components/RoutesList';

var Routes = [{ id: 1, name: "route1" , mapsData: {}}, { id: 2,name: "route2" , mapsData: {}}]

export default class RoutesScreen extends Component {
  state = { routes: Routes}
  render(){
  return (
    <Container>
    <View style={{
          alignSelf: "center",
          width: "100%",
          backgroundColor: "#92ad1",
        }}>
 
      <Text
       style={{
          alignSelf: "center",
          paddingTop: 10
        }}>
          Select your route</Text>
          
    </View>
    <List>
      {this.state.routes.map( (route, index) => {
        return(
          <RoutesList 
          routeName={route.name} 
          selectedBoolean={false}
          key = {index + route.id}
          ></RoutesList>
        )
      })}
    </List>
  </Container>
  );
      }
}

RoutesScreen.navigationOptions = {
  title: 'Routes',
};
