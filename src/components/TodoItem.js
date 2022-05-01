import React, { Component } from 'react';
import styles from "./TodoItem.module.scss"

class TodoItem extends Component {
    state = {
        editing: false
    }

    handleEditing = () => {
        this.setState({
            editing: true
        })
    }
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
    const { completed, id, title } = this.props.todo;

    const viewMode = {};
    const editMode = {}

    if(this.state.editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none"
    }

        return (
            <>
               <li className={styles.item}>
               <div onDoubleClick={this.handleEditing} style={viewMode}>
               <input type= "checkbox" 
               className={styles.checkbox}
               checked={completed} 
               onChange= {() => this.props.handleChangeProps(id)}
               /> 
               <button onClick={() => {this.props.deleteTodoProps(this.props.todo.id)}}>
                   delete
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
               </div>
               <input 
               type="text" 
               className={styles.textInput}
               style={editMode}
               value={title}
               onChange={ e => {console.log(editMode.target.value, id)}}
               />
                </li> 
            </>
        );
    }
}

export default TodoItem;