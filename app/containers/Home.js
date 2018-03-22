import React, { Component, Props } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TodoActionCreators from '../actions/todos';
import Title from '../components/Title';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    divider: {
        height: 1,
        backgroundColor: 'whitesmoke',
    },
})
class Home extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.toggleItemCompleted = this.toggleItemCompleted.bind(this);
        this.removeCompleted = this.removeCompleted.bind(this);
    }

    addItem(text) {
        const {todosAction} = this.props;
        todosAction.addItem(text);
    }

    removeItem(idx) {
        const {todosAction} = this.props;
        todosAction.removeItem(idx);
    }

    toggleItemCompleted(idx) {
        const { todosAction } = this.props;
        todosAction.toggleItemCompleted(idx);
    }

    removeCompleted() {
        const { todosAction } = this.props;
        todosAction.removeCompleted();
    }

    render() {
        const {items} = this.props
    
        return (
          <View style={styles.container}>
            <Title> Todo List </Title>
            <Input
              placeholder={'Enter an item!'}
              onSubmit={this.addItem}
            />
            <View style={styles.divider}/>
            <TodoList
              items={items}
              onRemoveItem={this.removeItem}
              onToggleItemCompleted={this.toggleItemCompleted}
            />
            <View style={styles.divider} />
            <Footer onRemoveCompleted={this.removeCompleted} />
          </View>
        )
      }
}

const mapStateToProps = (state) => {

    return {
        items: state.todos.items,
    }
}
;

const mapDispatchToProps = (dispatch) => ({
    todosAction: bindActionCreators(TodoActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

