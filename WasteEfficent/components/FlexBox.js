import React from 'react';
import { View, Text } from 'react-native';

export function FlexLeft(props) {
    return (
        <View {...props} style={{ flex: 1, flexDirection: 'column', width: 100, height: 100 }} />
        );
}