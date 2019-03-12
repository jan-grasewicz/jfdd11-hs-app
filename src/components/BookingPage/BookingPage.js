import React, { Component } from "react";
import { withAuth } from "../../contexts/AuthContext/AuthContext";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";
import "./BookingPage.css";
//http://react-component.github.io/slider/examples/handle.html
//powyzej paczka do dodania
class BookingPage extends Component {
  state = {
    pub: null,
    pubId: null,
    user: null,
    reservationHour: "22:00",
    date: null,
    today: new Date().toLocaleDateString(),
    countOfPeople: 5
  };

  componentWillMount() {
    this.setState({
      pubId: this.props.match.params.pubId,
      pub: this.props.advancedSearchContext.publist.find(
        pub => pub.id === this.props.match.params.pubId
      ),
      user: this.props.authContext.user,
      date: new Date().toLocaleDateString()
    });
  }

  handlInput = event => {
    if (event.target.name === "reservationHour") {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    if (
      event.target.name === "countOfPeople" &&
      event.target.value >= 0 &&
      event.target.value <= this.state.pub.space
    ) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    if (event.target.name === "date") {
      this.setState({
        [event.target.name]: new Date(event.target.value).toLocaleDateString()
      });
    }
  };

  toDate = inp => console.log(inp.split(".").join("-"));

  submitReservation = event => {
    event.preventDefault();
  };

  render() {
    let pubId = this.props.match.params.pubId;
    let pub = this.props.advancedSearchContext.publist.find(
      pub => pub.id === pubId
    );
    console.log(this.state);
    let { countOfPeople, reservationHour, date, today } = this.state;
    let { handlInput, submitReservation, toDate } = this;
    return (
      <div className="BookingPage">
        <h1>Reservation in {pub.name}</h1>
        <form>
          <div>
            <div>
              <label>On what date would You like to make a reservation? </label>
              <div>
                <input
                  type="date"
                  name="date"
                  value={date
                    .split(".")
                    .reverse()
                    .join("-")}
                  onChange={handlInput}
                  min={today
                    .split(".")
                    .reverse()
                    .join("-")}
                  onInput=""
                />
              </div>
            </div>
            <div>
              <label>On which hour would You like to make a reservation?</label>
            </div>
            <div>
              <input
                type="time"
                name="reservationHour"
                value={reservationHour}
                onChange={handlInput}
              />
              <label>
                Please keep in mind that {pub.name} is opened from{" "}
                {pub.openhour} till {pub.closehour}
              </label>
            </div>
          </div>
          <div>
            <div>
              <label>
                For how many people would You like to make a reservation?
              </label>
            </div>
            <div>
              <input
                type="number"
                name="countOfPeople"
                value={countOfPeople}
                onChange={handlInput}
              />
            </div>
          </div>
          <div>
            <button onClick={submitReservation}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(withAdvancedSearch(BookingPage));
