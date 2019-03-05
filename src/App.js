import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Main from "./Containers/Main";
import AddContact from "./Components/AddContact/AddContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  addContact = contact => {
    const { name, phone } = contact;
    const newContacts = [...this.state.contacts];
    newContacts.push({ name, phone, id: newContacts.length + 1 });
    this.setState(
      {
        contacts: newContacts
      },
      () => {
        this.props.history.push("/");
      }
    );
  };
  deleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    return (
      <Switch>
        <Route
          path="/add"
          render={() => <AddContact addContact={this.addContact} />}
        />
        <Route
          path="/"
          render={() => (
            <Main
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
          )}
        />
      </Switch>
    );
  }
}

export default withRouter(App);
