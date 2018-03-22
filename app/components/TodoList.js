import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import TodoItem from './TodoItem';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  export default class TodoList extends Component {

    static propTypes = {
      items: PropTypes.array.isRequired,
      onRemoveItem: PropTypes.func.isRequired,
      onToggleItemCompleted: PropTypes.func.isRequired,
    }
    
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({item}) {
        const {onToggleItemCompleted, onRemoveItem} = this.props;
    
        return (
            <TodoItem
                key = { item.itemID } 
                item = { item }
                onToggleItemCompleted = { onToggleItemCompleted }
                onRemoveItem = { onRemoveItem }
                onPressItem = {(item) => console.log(item)}
            />
        )
    }
  
    render() {
      const {items} = this.props
  
      return (
        <FlatList
            data = {items}
            renderItem = { this.renderItem }
            keyExtractor = {(item) => item.itemID.toString()}
        >
        </FlatList>
      )
    }
  }