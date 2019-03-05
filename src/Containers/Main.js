import React, { Component } from "react";
import Contacts from "../Components/Contacts/Contacts";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header>Phone Directory</Header>
        <div className="Main__container">
          <Link to="/add" className="Main__add">
            ADD
          </Link>
          <Contacts
            list={this.props.contacts}
            onDelete={this.props.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default Main;
