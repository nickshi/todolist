import React, { Component } from 'react';
import {
    TextInput,
    View,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 15,
    }
});

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitEditing = this.onSubmitEditing.bind(this);
    }

    onChangeText(text) {
        this.setState({
            text
        })
    }

    onSubmitEditing() {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if (!text) return;

        onSubmit(text);
        this.setState({
            text: ''
        })
    }

    render() {
        const { placeholder } = this.props;
        const { text } = this.state;

        return (
            <TextInput
                style= { styles.input }
                placeholder = { placeholder }
                value = { text }
                onChangeText = { this.onChangeText }
                onSubmitEditing = { this.onSubmitEditing }
                blurOnSubmit = { false }
            >
            
            </TextInput>
        );
    }
};

Input.propTypes = {
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
}