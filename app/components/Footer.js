import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    footer: {
      paddingVertical: 15,
      alignItems: 'center',
    },
    remove: {
      color: '#CD5C5C',
    },
});

export default class Footer extends Component {
    render() {
      const { onRemoveCompleted } = this.props
  
      return (
        <TouchableOpacity style={ styles.footer } onPress={ onRemoveCompleted }>
          <Text style={ styles.remove }>Remove completed items</Text>
        </TouchableOpacity>
      )
    }
  }

  Footer.propTypes = {
    onRemoveCompleted: PropTypes.func,
  }