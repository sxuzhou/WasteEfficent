import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native'
import { Container, Content, Item, Input, Button, Text, Form,} from 'native-base';
import * as Font from 'expo-font'

export default class AddStopsScreen extends Component {
    state = {
        name: '',
        address: '',
        postalCode: '',
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
                    <Form>
                            <Item>
                                <Input placeholder='Enter Stop Name Here'/>
                            </Item>

                            <Item>
                                <Input placeholder='Enter Stop Address Here'/>
                            </Item>

                            <Item>
                                <Input placeholder='Enter Stop Postal Code Here'/>
                            </Item>
                    <Content>
                        <Button type="submit">
                            <Text>Submit</Text>
                        </Button>
                    </Content>
                        
                        </Form>


                </Content>
            </Container>
        );
    }
}

AddStopsScreen.navigationOptions = {
    title: 'AddStops',
};