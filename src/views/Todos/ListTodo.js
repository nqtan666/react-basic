import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo.";
import { toast } from "react-toastify";
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "Todo1", title: "Doing homeworks" },
      { id: "Todo2", title: "Naking Video" },
      { id: "Todo3", title: "Fixing bug" },
    ],
    editTodos: {},
  };
  addNewTodo = (job) => {
    this.setState({
      listTodos: [...this.state.listTodos, job],
    });
    toast.success("Add todo success");
  };
  handleDelete = (condition) => {
    this.setState({
      listTodos: this.state.listTodos.filter((item) => item.id !== condition),
    });
    let msg = "Delete id:" + condition + " success";
    toast.success(msg);
  };
  handleEdit = (todo) => {
    console.log("todo>>>>", todo);
    const { listTodos, editTodos } = this.state;
    console.log("edit", editTodos);
    let isEmptyObj = Object.keys(editTodos).length === 0;
    if (isEmptyObj === false && editTodos.id === todo.id) {
      // setstte cho listTodos
      const updatedList = listTodos.map((todo) => {
        if (todo.id === editTodos.id) {
          return editTodos;
        }
        return todo;
      });
      this.setState({
        listTodos: updatedList,
        editTodos: {},
      });
      console.log("updatedList", updatedList);
      toast.success("Update success");

      return;
    }
    this.setState({
      editTodos: todo,
    });
  };
  handleOnChangeEditTodo = (e) => {
    const { value } = e.target;
    const data = {
      id: this.state.editTodos.id,
      title: value,
    };
    this.setState({
      editTodos: data,
    });
  };
  render() {
    let { listTodos, editTodos } = this.state;
    let isEmptyObj = Object.keys(editTodos).length === 0;
    return (
      <>
        <p>Simple TODO Apps with React.js(TanNQ)</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child">
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {item.id === editTodos.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              name="title"
                              value={editTodos.title}
                              onChange={(e) => this.handleOnChangeEditTodo(e)}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEdit(item)}
                    >
                      {isEmptyObj === false && item.id === editTodos.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default ListTodo;
