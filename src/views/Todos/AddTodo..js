import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleChangeTitle = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Add Todo Error");
      return;
    }
    let data = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewTodo(data);
    //reset state
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            name="title"
            onChange={(e) => this.handleChangeTitle(e)}
            value={this.state.title}
          />
          <button
            className="add"
            type="button"
            onClick={() => this.handleAddTodo()}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default AddTodo;
