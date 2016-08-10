/**
 * Created by fanhl on 16/7/31.
 */
'use strict';//使用严格模式
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import numeral from 'numeral';

export default class NumeralDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>numeral(1234.56789).format('0.0')</Text>
                <Text style={styles.welcome}>{numeral(1234.56789).format('0.0')}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});