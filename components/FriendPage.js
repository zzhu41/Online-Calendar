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

export default class FriendPage extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                <Body>
                    <Text>
                        Friends
                    </Text>
                </Body>
                </Header>
            </Container>
        );
    }
};