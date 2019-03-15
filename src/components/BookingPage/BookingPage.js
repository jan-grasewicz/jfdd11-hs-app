import React, { Component } from "react";
import { withAuth } from "../../contexts/AuthContext/AuthContext";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";
import DatePicker from "react-datepicker";
import "./BookingPage.css";
import "react-datepicker/dist/react-datepicker.css";

//https://github.com/Hacker0x01/react-datepicker <-- DatePicker Docs
//https://reactdatepicker.com/ <--datepicker docs complete

class BookingPage extends Component {
  state = {
    pub: null,
    pubId: null,
    user: null,
    reservationDate: new Date(),
    countOfPeople: 5
  };

  componentDidMount() {
    this.setState({
      pubId: this.props.match.params.pubId,
      pub: this.props.advancedSearchContext.publist.find(
        pub => pub.id === this.props.match.params.pubId
      ),
      user: this.props.authContext.user
    });
  }

  handlInput = event => {
    if (event.target.value >= 0 && event.target.value <= this.state.pub.space) {
      this.setState({
        countOfPeople: event.target.value
      });
    }
  };

  handleDate = reservationDate => {
    if (new Date() < reservationDate) {
      this.setState({ reservationDate });
    }
  };

  submitReservation = event => {
    event.preventDefault();
  };

  render() {
    let pubId = this.props.match.params.pubId;
    let pub = this.props.advancedSearchContext.publist.find(
      pub => pub.id === pubId
    );
    console.log(this.state);
    let { countOfPeople, reservationDate } = this.state;
    let { handlInput, submitReservation, handleDate } = this;

    const excludeTimes = [];

    if (reservationDate) {
      {
        const date = new Date(reservationDate);
        date.setHours(23);
        date.setMinutes(59);
        excludeTimes.push(date);
      }
      {
        const date = new Date(reservationDate);
        const [hour] = pub.openhour.split(":");
        date.setHours(+hour);
        date.setMinutes(0);
        excludeTimes.push(date);
      }
    }

    const [close, open] = excludeTimes;
    return (
      <div className="BookingPage">
        <form className="BookingPage-form">
          <h2 className="BookingPage-title">
            Reservation in <span>{pub.name}</span>
          </h2>
          <div>
            <p>Please specify the date, time and size of your reservation.</p>

            <DatePicker
              className="BookingPage-datepicker"
              placeholderText="Click to select a date"
              selected={new Date(reservationDate)}
              onChange={handleDate}
              showTimeSelect={!!this.state.reservationDate}
              minTime={open}
              maxTime={close}
              dateFormat="yyyy/MM/dd HH:mm"
            />
            <p className="BookingPage-note">
              Keep in mind that {pub.name} is opened from {pub.openhour} <br />
              and only accepts reservations before midnight.
            </p>
            <input
              className="BookingPage-count"
              type="number"
              name="countOfPeople"
              value={countOfPeople}
              onChange={handlInput}
            />
            <p className="BookingPage-note">
              Keep in mind that pub {pub.name} offers {pub.space} seats for
              reservation on chosen date.
            </p>
            <button className="BookingPage-submit" onClick={submitReservation}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(withAdvancedSearch(BookingPage));
