import React, { Component } from "react";
import Form from "./components/Form/Form";
import { container } from "./App.module.css";
import { List } from "./components/List/List";

const initValues = {
  name: "",
  lastname: "",
  asistencia: true,
  carnet: 0
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initValues, peaple: [] };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler(personIndex) {
    const peaple = this.state.peaple.filter((person, index) => {
      return personIndex !== index;
    });
    this.setState({ peaple });
  }

  changeHandler(event) {
    const { target } = event;
    const value = target.type==="checkbox"? target.checked: target.value
    this.setState({
      [target.id]: value
    });
  }

  
  submitHandler(event) {
    event.preventDefault();
    const { name, lastname, asistencia, carnet } = this.state;
    const peaple = [...this.state.peaple];
    peaple.push({ name, lastname, asistencia, carnet });
    this.setState({ ...initValues, peaple });
  }



  render() {
    const { name, lastname, asistencia, carnet } = this.state;
    return (
      <div className={container}>
        <Form
          name={name}
          lastname={lastname}
          asistencia={asistencia}
          carnet={carnet}
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
        />
        <List
          list={[...this.state.peaple]}
          deleteHandler={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;
