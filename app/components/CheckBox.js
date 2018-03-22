import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    box: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: 'black',
    },
    inner: {
        flex: 1,
        margin: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
});
export default class CheckBox extends Component {
    render() {
        const { onToggle, isChecked } = this.props;

        return (
            <TouchableOpacity onPress = { onToggle }>
                <View style={styles.box}>
                    {isChecked && <View style={styles.inner}/>}
                </View>
            </TouchableOpacity>
        );
    }
}

CheckBox.protoTypes = {
    onToggle : PropTypes.func,
    isChecked: PropTypes.bool,
}