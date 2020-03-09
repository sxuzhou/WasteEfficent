import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'
import { Container, Content, Item, Input, Button, Text } from 'native-base';


export default class AddStopsScreen extends Component {
    state = {
        name: '',
        address: '',
        postalCode: '',
    }
    handleChange = this.handleChange.bind(this);

    handleChange(evnt){
        this.setState({ [evnt.target.name] : evnt.target.value});
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form onSubmit={() => console.log(this.state)} redner={
                        <form onSubmit={handleChange}>
                            <Field onChange={this.handleChange} name="name" component="input" placeholder='Enter Stop Name Here'/>

                        <Field onChange={this.handleChange} name="address" component="input" placeholder='Enter Stop Address Here'/>

                        <Field onChange={this.handleChange} name="postalCode" component="input" placeholder='Enter Stop Postal Code Here'/>
                        <Button type="submit">
                            <Text>Submit</Text>
                        </Button></form>
                    }
                        
                       />


                </Content>
            </Container>
        );
    }
}

AddStopsScreen.navigationOptions = {
    title: 'AddStops',
};