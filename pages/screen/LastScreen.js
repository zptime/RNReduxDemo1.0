import React, { Component } from 'react';
import { View } from 'react-native';

import { MainStyles } from '../../assets/css/AppStyles';
import Group from '../../js/components/Group'

class LastScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={MainStyles.mainModel}>
                <Group />
            </View>
        );
    }
}

export default LastScreen;