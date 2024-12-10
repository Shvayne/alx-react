import React from "react";
import { connect } from "react-redux";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "./AppContext";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  loginRequest,
  logout,
} from "../actions/uiActionCreators";
import PropTypes from "prop-types";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      listNotifications: listNotifications,
    };
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func,
    login: PropTypes.func,
    logout: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
    login: () => {},
    logout: () => {},
  };

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.state.logOut();
    }
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <AppContext.Provider
        value={{ user: this.state.user, logOut: this.props.logout }}>
        <>
          <Notifications
            listNotifications={this.state.listNotifications}
            displayDrawer={this.props.displayDrawer}
            handleDisplayDrawer={this.props.displayNotificationDrawer}
            handleHideDrawer={this.props.hideNotificationDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css(styles.App)}>
            <Header />
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.props.login} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor alt some text.</p>
            </BodySection>
            <Footer />
          </div>
        </>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
  },
});

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get("isUserLoggedIn"),
  displayDrawer: state.get("isNotificationDrawerVisible"),
});

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);