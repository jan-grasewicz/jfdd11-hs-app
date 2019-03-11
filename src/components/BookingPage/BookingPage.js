import React, { Component } from "react";
import { withAuth } from "../../contexts/AuthContext/AuthContext";
import "./BookingPage.css";

class BookingPage extends Component {
  render() {
    return (
      <div className="BookingPage">
        <span>wypierdalaj</span>
      </div>
    );
  }
}

export default withAuth(BookingPage);
