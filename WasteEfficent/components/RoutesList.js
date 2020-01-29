import React, { Component } from 'react';
import { Text } from 'react-native';
import { ListItem, Left, Right, Radio } from 'native-base';

export default class RoutesList extends Component {
  render() {
    return (
      <ListItem
        selected={this.props.selectedBoolean}
      >
        <Left>
          <Text>{this.props.routeName}</Text>
        </Left>
        <Right>
          <Radio
            color={"#f0ad4e"}
            selectedColor={"#5cb85c"}
            selected={this.props.selectedBoolean}
          />
        </Right>
      </ListItem>
    );
  }
}
