import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { MainStyles } from '../../assets/css/AppStyles';

class SecondScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={MainStyles.mainModel}>
                <Text>Hello world</Text>
                <Text>This is the second screen</Text>
            </View>
        );
    }
}

export default SecondScreen;