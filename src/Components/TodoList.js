import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

class TodoList extends Component {

  render() {
    return (
      <List>
        {this.props.data.map(todo =>
          <ListItem key={todo.id}>
            <Icon>drag_handle</Icon>
            <ListItemText
              primary={todo.name}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => { this.props.handleClick(todo.id) }}>
                <Icon>delete</Icon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
    );
  }

}

export default TodoList;