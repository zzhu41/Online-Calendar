import React from 'react';
import { StyleSheet, Text, View, ScrollView, AlertIOS } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Timeline from 'react-native-timeline-listview'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Container, Header, Body, Grid, Row, Col, Content, Separator, Left, Right} from 'native-base';
import { FloatingAction } from 'react-native-floating-action';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
/**
 * Login Page
 */
export default class TimeTable extends React.Component {

    static navigationOptions = {
        header: null
    }
    
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {time: '09:00', title: 'Test Event 1', description: 'Event 1 Description'},
                {time: '10:45', title: 'Test Event 2', description: 'Event 2 Description'},
                {time: '12:00', title: 'Test Event 3', description: 'Event 3 Description'},
                {time: '14:00', title: 'Test Event 4', description: 'Event 4 Description'},
                {time: '16:30', title: 'Test Event 5', description: 'Event 5 Description'}
            ]
        }
    }
    /**
     * Render function
     * @return {ReactDOM}
     */
    render() {
        return (
            <Container>
                <Header>
                <Body>
                    <Text>
                        Calendar
                    </Text>
                </Body>
                </Header>
                <ScrollView>
                    <Timeline
                        style={{ paddingTop: 30}}
                        data={this.state.data}
                    />
                </ScrollView>
                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress = {
                        () => { 
                            let dataNew = this.state.data.push({time: '16:30', title: 'Test Event 5', description: 'Event 5 Description'})
                            this.setState({
                                data: dataNew
                            })
                        }
                    }
                />
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    }
});

const actions = [{
    text: 'Add Event',
    name: 'add_event',
    position: 1
}];
  