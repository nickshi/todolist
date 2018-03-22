import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

const styles = StyleSheet.create({
    item: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'whitesmoke',
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    remove: {
      marginLeft: 10,
      marginBottom: 2,
      color: '#CD5C5C',
      fontSize: 26,
    },
    completed: {
      backgroundColor: 'whitesmoke',
    },
});

export default class TodoItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            itemID: PropTypes.number,
            label: PropTypes.string,
            completed: PropTypes.bool,
        }),
        onToggleItemCompleted: PropTypes.func,
        onRemoveItem: PropTypes.func,
        onPressItem: PropTypes.func
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { item } = this.props;

        if(item.itemID != nextProps.item.itemID 
            || item.completed != nextProps.item.completed)
            return true;
        return false;
    }
    render() {
        
        const { item, onToggleItemCompleted, onRemoveItem, onPressItem }  = this.props;console.log("render ", item.itemID)
        const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item
        return (
            <TouchableOpacity onPress={() => onPressItem && onPressItem(item)}>
                <View style={itemStyle}>
                    <Text> {item.label} </Text>
                    <View style={styles.rightSection}>
                        <CheckBox
                            isChecked={item.completed}
                            onToggle={() => onToggleItemCompleted(item.itemID)}
                        />
                        <TouchableOpacity onPress={() => onRemoveItem(item.itemID)}>
                            <Text style={styles.remove}> &times; </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
           
        );
    }
}