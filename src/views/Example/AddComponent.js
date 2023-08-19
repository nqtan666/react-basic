import React from "react";
class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  hanldeSubmit = () => {
    if(!this.state.title || !this.state.salary ){
        alert('error')
        return
    }
    let job = {
        id : Math.floor(Math.random() * 1000),
        title : this.state.title,
        salary : this.state.salary,

    }
     this.props.addNewJob(job)
     this.setState({
        title:'',
        salary : ''

     })
  };
  render() {
    return (
      <form>
        <label htmlFor="title">Job Title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          name="title"
          onChange={(e) => this.handleOnChange(e)}
        />
        <br />
        <label htmlFor="salary">salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          name="salary"
          onChange={(e) => this.handleOnChange(e)}
        />
        <br />
        <input
          type="button"
          value="submit"
          onClick={() => this.hanldeSubmit()}
        />
      </form>
    );
  }
}
export default AddComponent;
