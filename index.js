import React from "react";
import { View, Text } from "react-native";
const moment = require("moment-timezone");
const _ = require("lodash");

type Props = {
  till: Date
};

type State = {
  time: string
};

const placeholderTime = "--:--:--";

const CountDownTimer = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: placeholderTime
    };
  }

  componentDidMount() {
    // Code from: https://stackoverflow.com/a/42836533
    const interval = setInterval(() => {
      const till = moment(this.props.till);
      const duration = moment.duration(till.diff(moment()));

      const hours = new String(parseInt(duration.asHours()));
      const minutes = new String(parseInt(duration.asMinutes()) % 60);
      const seconds = new String(parseInt(duration.asSeconds()) % 60);

      this.setState({
        time: `${_.padStart(hours, 2, "0")}:${_.padStart(
          minutes,
          2,
          "0"
        )}:${_.padStart(seconds, 2, "0")}`
      });
    }, 1000);

    this.setState({
      interval: interval
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <View>
        {this.state.time !== "NaN:NaN:NaN" ? (
          <Text>{this.state.time}</Text>
        ) : (
          <Text>{placeholderTime}</Text>
        )}
      </View>
    );
  }
};

exports.CountDownTimer = CountDownTimer;
