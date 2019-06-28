import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { MainStyles } from '../../assets/css/AppStyles';
import Group from '../../js/components/Group'

class FirstScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={MainStyles.mainModel}>
                <Text>Hello world</Text>
                <Text>This is the first screen</Text>
                <Group />
            </View>
        );
    }
}

export default FirstScreen;