import React, { Component } from 'react';
import { Container, Content, Item, Input, Button, Text, Form,} from 'native-base';

export default class AddStopsScreen extends Component {
    state = {
        name: '',
        address: '',
        postalCode: '',
    }

    render() {
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