import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedRoute } from "react-router-transition";
import HomeScreen from "../HomeScreen";
import SearchResults from "../SearchResults/SearchResults";
import PubScreen from "../PubScreen";
import AdvancedSearch from "../AdvancedSearch";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn";
import UserProfile from "../UserProfile";
import { withAuth } from "../../contexts/AuthContext/AuthContext";
import PubRegistration from "../PubRegistration/PubRegistration";
import SearchByLocalization from "../SearchByLocalization/SearchByLocalization";

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/advancedSearch" component={AdvancedSearch} />
          <Route path="/publist/:pubId" component={PubScreen} />
          <AnimatedRoute
            path="/signup"
            component={SignUp}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={styles => ({
              transform: `translateX(${styles.offset}%)`
            })}
            className="route-wrapper"
          />
          <Route exact path="/publist" component={SearchResults} />
          <Route path="/searchbylocal" component={SearchByLocalization} />
          {this.props.authContext.user === null ? (
            <>
              <AnimatedRoute
                path="/login"
                component={LogIn}
                atEnter={{ offset: -100 }}
                atLeave={{ offset: -100 }}
                atActive={{ offset: 0 }}
                mapStyles={styles => ({
                  transform: `translateX(${styles.offset}%)`
                })}
                className="route-wrapper"
              />
            </>
          ) : (
            <>
              <Route path="/profile" component={UserProfile} />
              <Route path="/add-pub" component={PubRegistration} />
            </>
          )}
        </div>
      </Router>
    );
  }
}

export default withAuth(Root);
