# Introduction

A simple countdown clock for your React Native app, which displays time left in `HH:mm:ss` format.

## Usage

Provide a valid `Date` object to the `till` prop of `CountDownTimer`.

```
import { CountDownTimer } from "rn-countdown-clock";

class YourComponent extends React.Component {
  render() {
    <CountDownTimer till={countdownTo} />
  }
}
```
